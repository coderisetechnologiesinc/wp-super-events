import domReady from "@wordpress/dom-ready";
import { createRoot } from "@wordpress/element";
import { useEffect, useState, Fragment, useRef } from "@wordpress/element";
import axios from "axios";

import moment from "moment-timezone";

import BlockStack from "./Components/Containers/BlockStack";
import InputFieldControl from "./Components/Controls/InputFieldControl";
import InlineStack from "./Components/Containers/InlineStack";
import CheckboxControl from "./Components/Controls/CheckboxControl";
import Spinner from "./Components/Menu/Spinner";
import { toNumber } from "./utilities/numbers";
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import SelectControl from "./Components/Controls/SelectControl";
import { loadStripe } from "@stripe/stripe-js";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";
import OccurrencessDropdown from "./Components/Controls/OccurrencessDropdown";
const PaymentForm = () => {
  const [meetingData, setMeetingData] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [secret, setClientSecret] = useState(null);
  const [stripeElement, setStripeElement] = useState(null);
  const [paymentElement, setPaymentElement] = useState(null);
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState(false);
  const [showPaymentForm, setShowPaymentform] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [additionalRegistrants, setAdditionalRegistrants] = useState([]);
  const [additionalRegistrantsQuantity, setAdditionalRegistrantsQuantity] =
    useState(0);
  const [selectedOccurrence, setSelectedOccurrence] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [donation, setDonation] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [initialTickets, setInitialTickets] = useState([]);
  const [registrationError, setRegistrationError] = useState("");
  const [showRegistrationError, setShowRegistrationError] = useState(false);
  const [sameForAll, setSameForAll] = useState(true);

  const isEmailValid = (email) => {
    if (!email && email.length === 0) {
      return false;
    }
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validateRegistrants = () => {
    if (additionalRegistrants.length === 0) return true;
    if (additionalRegistrants.length > 0) {
      let flag = true;
      if (!sameForAll) {
        additionalRegistrants.forEach((registrant) => {
          if (
            isEmailValid(registrant.email) === null ||
            registrant.firstName.length === 0 ||
            registrant.lastName.length === 0
          ) {
            flag = false;
          }
          if (
            isTicketsAvailable() &&
            registrant.ticket.is_donation &&
            !(toNumber(registrant.donation) > 0)
          ) {
            flag = false;
          }
        });
        return flag;
      } else if (
        isEmailValid(additionalRegistrants[0].email) === null ||
        additionalRegistrants[0].firstName.length === 0 ||
        additionalRegistrants[0].lastName.length === 0
      ) {
        return false;
      }
      if (
        isTicketsAvailable() &&
        additionalRegistrants[0].ticket.is_donation &&
        !(toNumber(additionalRegistrants[0].donation) > 0)
      ) {
        return false;
      }
    }
    return true;
  };

  const fetchClientSecret = async () => {
    const registrantsValidation = validateRegistrants();

    if (
      // isEmailValid(email) === null ||
      // firstName.length === 0 ||
      // lastName.length === 0 ||
      !registrantsValidation
    ) {
      setErrorMessage(true);
      return;
    }

    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.append("action", "servv_create_checkout_session");
      params.append("security", servvData.security);
      params.append("post_id", servvData.postId);
      if (selectedOccurrence) {
        params.append("occurrence_id", selectedOccurrence.id);
      }
      // if (isTicketsAvailable()) {
      //   params.append("ticket_id", selectedTicket.id);
      // }

      // if (isDonation()) {
      //   params.append("donation_amount", donation);
      // }
      if (additionalRegistrants.length > 0) {
        let preparedAdditionalRegistrants = additionalRegistrants.slice(1);
        if (isTicketsAvailable()) {
          preparedAdditionalRegistrants = preparedAdditionalRegistrants.map(
            (registrant) => {
              return { ...registrant, ticket: registrant.ticket };
            }
          );
        }

        let additionalRegistrantsData = preparedAdditionalRegistrants.map(
          (registrant) => {
            let registrantData = null;
            if (!sameForAll) {
              registrantData = `${registrant.email},${registrant.firstName},${registrant.lastName}`;
            } else {
              registrantData = `${additionalRegistrants[0].email},${additionalRegistrants[0].firstName},${additionalRegistrants[0].lastName}`;
            }
            if (isTicketsAvailable()) {
              registrantData += `,${registrant.ticket.id}`;
            }

            if (registrant.ticket && registrant.ticket.is_donation) {
              if (!sameForAll)
                registrantData += `,${toNumber(registrant.donation)}`;
              else
                registrantData += `,${toNumber(
                  additionalRegistrants[0].donation
                )}`;
            }

            return registrantData;
          }
        );

        console.log(additionalRegistrantsData.join(";"));

        params.append(
          "additional_registrants",
          additionalRegistrantsData.join(";")
        );
        // // Get the value of "additional_registrants"
        // const additionalRegistrantsD = params.get("additional_registrants");

        // // If it was URL-encoded, decode it
        // const decodedValue = additionalRegistrantsD
        //   ? decodeURIComponent(additionalRegistrantsD)
        //   : null;

        // // Log it
        // console.log(decodedValue.split(";"));
      }
      // if (isDonation()) {
      //   params.append("donation_amount", donation);
      // }
      if (sameForAll) {
        params.append("same_for_all", true);
      }
      if (!isTicketsAvailable()) {
        params.append("email", email);
        params.append("first_name", firstName);
        params.append("last_name", lastName);
      } else {
        let firstRegistrant = additionalRegistrants[0];
        params.append("email", firstRegistrant.email);
        params.append("first_name", firstRegistrant.firstName);
        params.append("last_name", firstRegistrant.lastName);
        params.append("ticket_id", firstRegistrant.ticket.id);
        if (firstRegistrant.ticket.is_donation) {
          params.append("donation_amount", toNumber(firstRegistrant.donation));
        }
      }

      const response = await axios.post(servvData.ajaxUrl, params);
      if (response && response.status === 200 && response.data.success) {
        if (response.data.success) {
          const clientSecret = response.data.data.client_secret;
          const stripePublicKey = response.data.data.public_key;
          setClientSecret(clientSecret);
          const stripe = await loadStripe(stripePublicKey, {
            stripeAccount: servvData.stripeAccountId,
          });
          const handleComplete = async function () {
            checkout.destroy();
            setConfirmMessage(true);
          };
          const checkout = await stripe.initEmbeddedCheckout({
            clientSecret,
            onComplete: handleComplete,
          });
          setStep(step + 1);
          setShowPaymentform(true);
          checkout.mount("#servv-payment-element");
        }
      } else if (
        response &&
        response.status === 200 &&
        !response.data.success
      ) {
        setRegistrationError(response.data.message);
        setShowRegistrationError(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setRegistrationError(
        "Sorry, we're facing some issues, please try again later"
      );
      setShowRegistrationError(true);
      console.error("Error fetching event info:", error);
    }
  };

  const handleRegistrantEmailChange = (index, email) => {
    let registrants = [...additionalRegistrants];

    registrants[index].email = email;
    setAdditionalRegistrants(registrants);
    if (validateRegistrants()) {
      setErrorMessage(false);
    }
  };
  const handleRegistrantFirstNameChange = (index, firstName) => {
    let registrants = [...additionalRegistrants];
    registrants[index].firstName = firstName;
    setAdditionalRegistrants(registrants);
    if (validateRegistrants()) {
      setErrorMessage(false);
    }
  };
  const handleRegistrantLastNameChange = (index, lastName) => {
    let registrants = [...additionalRegistrants];
    registrants[index].lastName = lastName;
    setAdditionalRegistrants(registrants);
    if (validateRegistrants()) {
      setErrorMessage(false);
    }
  };

  const handleRegistrantDonation = (index, val) => {
    let registrants = [...additionalRegistrants];

    registrants[index].donation = val;
    setAdditionalRegistrants(registrants);
    // if (validateRegistrants()) {
    //   setErrorMessage(false);
    // }
  };

  // const handleRegistrantTicketSelect = (index, newVal) => {
  //   let updatedRegistrants = [...additionalRegistrants];
  //   let newTickets = [...tickets];
  //   let ticket =
  //     newTickets[tickets.findIndex((ticket) => ticket.name === newVal)];

  //   if (
  //     ticket &&
  //     (ticket.current_quantity === null || ticket.current_quantity - 2 >= 0)
  //   )
  //     updatedRegistrants[index].ticket = ticket;
  //   else return;
  //   setAdditionalRegistrants(updatedRegistrants);
  // };

  const renderAdditionalRegistrantsForm = () => {
    const price = getEventPrice();
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col w-full gap-4">
            {/* Render registrants start */}
            {additionalRegistrants.map((registrant, index) => {
              return (
                <Fragment>
                  {(registrant.first_registrant ||
                    (!registrant.first_registrant && !sameForAll)) && (
                    <div className="flex flex-col items-start gap-2 p-[17px] border rounded-[17px] self-stretch border-[#CBD5E1] bg-white w-full">
                      <div className="flex flex-col w-full flex-1 gap-2">
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row gap-4 items-center">
                            <span className="font-semibold text-[16px]">
                              {"Attendee " + (index + 1)}
                            </span>
                            <div className="text-[16px] flex justify-center items-center px-[0.5625rem] py-[0.1875rem] rounded-[0.425rem] border border-[#E5E5E5] text-[#171717] bg-white">
                              Standard ticket
                            </div>
                          </div>
                          {registrant.canBeAdded === false && (
                            <span>Registrant can't be added</span>
                          )}
                          <button
                            className="font-semibold text-black border-none"
                            onClick={() => removeRegistrant(index)}
                          >
                            Remove
                          </button>
                        </div>
                        <div className="text-[16px] leading-[1.4] font-normal not-italic text-[#4A5565] mb-8">
                          {price > 0
                            ? price + " " + meetingData.currency.toUpperCase()
                            : "Free"}
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="text-[16px] flex flex-col font-semibold">
                            Email *
                          </div>
                          <InputFieldControl
                            value={registrant.email}
                            align="left"
                            type="text"
                            width={"100%"}
                            onChange={(val) =>
                              handleRegistrantEmailChange(index, val)
                            }
                          />
                          <div className="flex flex-row justify-evenly items-baseline w-full gap-4">
                            <div className="flex flex-col gap-2 flex-1">
                              <div className="text-[16px] flex flex-col font-semibold">
                                First Name *
                              </div>
                              <InputFieldControl
                                value={registrant.firstName}
                                align="left"
                                type="text"
                                width={"100%"}
                                onChange={(val) =>
                                  handleRegistrantFirstNameChange(index, val)
                                }
                              />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                              <div className="text-[16px] flex flex-col font-semibold">
                                Last Name *
                              </div>
                              <InputFieldControl
                                value={registrant.lastName}
                                align="left"
                                type="text"
                                width={"100%"}
                                onChange={(val) =>
                                  handleRegistrantLastNameChange(index, val)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {additionalRegistrants.length > 1 &&
                        registrant.first_registrant && (
                          <div className="mt-4">
                            {registrant.first_registrant && (
                              <CheckboxControl
                                label="Same for all"
                                checked={sameForAll}
                                onChange={() => setSameForAll(!sameForAll)}
                              />
                            )}
                          </div>
                        )}
                    </div>
                  )}
                </Fragment>
              );
            })}
            {/* Render registrants end */}
            <div className="flex flex-row justify-between pt-8">
              <button
                onClick={() => handlePrevStep()}
                className="flex flex-row items-center justify-start gap-[8px] px-[12px] py-[8px] text-[#171717] rounded-[0.425rem] border border-[#E5E5E5] bg-[rgba(229,229,229,0.3)] text-[0.875rem] max-sm:p-1"
              >
                <ArrowLeftIcon className="w-[1rem]" />
                <span>Back to tickets</span>
              </button>
              <button
                onClick={handleCheckout}
                className="flex flex-row items-center justify-start gap-[8px] px-[12px] py-[8px]  bg-[#171717] text-[#FAFAFA] rounded-[0.425rem] text-[0.875rem] max-sm:p-1"
              >
                <ArrowRightIcon className="w-[1rem]" />
                <span>Continue to checkout</span>
              </button>
            </div>
          </div>
          {renderSummary()}
        </div>
      </div>
    );
  };

  // const renderAdditionalRegistrantsForm = () => {
  //   return additionalRegistrants.map((registrant, index) => {
  //     return (
  //       <BlockStack gap={2} cardsLayout={true}>
  //         <div className="section-description font-semibold border-b mt-2 flex flex-row justify-between">
  //           <span>Additional registrant</span>{" "}
  //           {registrant.canBeAdded === false && (
  //             <span>Registrant can't be added</span>
  //           )}
  //           <button className="" onClick={() => removeRegistrant(index)}>
  //             Remove
  //           </button>
  //         </div>
  //         {isTicketsAvailable() && (
  //           <BlockStack gap={4} cardsLayout={true}>
  //             <div className="flex flex-row items-center">Tickets</div>
  //             <SelectControl
  //               options={ticketsOptions()}
  //               selected={additionalRegistrants[index]?.ticket?.name}
  //               onSelectChange={(newVal) =>
  //                 handleRegistrantTicketSelect(index, newVal)
  //               }
  //             />
  //           </BlockStack>
  //         )}
  //         <div className="section-description font-regular">Email</div>
  //         <InputFieldControl
  //           value={registrant.email}
  //           align="left"
  //           type="text"
  //           width={"100%"}
  //           onChange={(val) => handleRegistrantEmailChange(index, val)}
  //         />
  //         <InlineStack gap={4}>
  //           <BlockStack cardsLayout={true}>
  //             <div className="section-description font-regular">First Name</div>
  //             <InputFieldControl
  //               value={registrant.firstName}
  //               align="left"
  //               type="text"
  //               width={"100%"}
  //               onChange={(val) => handleRegistrantFirstNameChange(index, val)}
  //             />
  //           </BlockStack>
  //           <BlockStack cardsLayout={true}>
  //             <div className="section-description font-regular">Last Name</div>
  //             <InputFieldControl
  //               value={registrant.lastName}
  //               align="left"
  //               type="text"
  //               width={"100%"}
  //               onChange={(val) => handleRegistrantLastNameChange(index, val)}
  //             />
  //           </BlockStack>
  //         </InlineStack>
  //         {registrant.ticket && registrant.ticket?.is_donation && (
  //           <BlockStack cardsLayout={true}>
  //             <div className="section-description font-regular">Donation</div>
  //             <InputFieldControl
  //               value={registrant.donation}
  //               align="left"
  //               type="number"
  //               width={"100%"}
  //               onChange={(val) => handleRegistrantDonation(index, val)}
  //             />
  //           </BlockStack>
  //         )}
  //       </BlockStack>
  //     );
  //   });
  // };

  const fetchEventInfo = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.append("action", "servv_get_event_info");
      params.append("security", servvData.security);
      params.append("post_id", servvData.postId);

      const response = await axios.post(servvData.ajaxUrl, params);

      if (response && response.status === 200) {
        setMeetingData(response.data);
      }

      // if (response && response.status === 200) {
      // }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching event info:", error);
    }
  };
  const getData = async () => {
    await fetchEventInfo();
  };
  useEffect(() => {
    getData();
  }, []);

  const handleEmailChange = (val) => {
    setEmail(val);
    checkForErrors();
  };
  const handleFirstNameChange = (val) => {
    setFirstName(val);
    checkForErrors();
  };
  const handleLastNameChange = (val) => {
    setLastName(val);
    checkForErrors();
  };

  const findFirstAvailableTicket = (occurrenceTickets = null) => {
    let availableTickets = null;
    if (occurrenceTickets) {
      availableTickets = [...occurrenceTickets];
    } else {
      availableTickets = [...tickets];
    }
    if (!availableTickets) return null;
    let firstAvailableTicket = availableTickets.filter((ticket) => {
      if (selectedTicket && selectedTicket.id === ticket.id) {
        if (
          ticket.current_quantity - 1 > 0 ||
          ticket.current_quantity === null
        ) {
          return { ...ticket };
        }
      } else if (
        ticket.current_quantity > 0 ||
        ticket.current_quantity === null
      ) {
        return { ...ticket };
      }
    });
    // console.log(
    //   "first available",
    //   firstAvailableTicket.filter(
    //     (t) => t.current_quantity > 0 || t.current_quantity === null
    //   )[0]
    // );
    if (firstAvailableTicket.length > 0) {
      return firstAvailableTicket.filter(
        (t) => t.current_quantity > 0 || t.current_quantity === null
      )[0];
    } else return null;
  };

  const checkForErrors = (newVal) => {
    if (
      errorMessage &&
      isEmailValid(email) !== null &&
      firstName.length > 0 &&
      lastName.length > 0
    ) {
      setErrorMessage(false);
    }
  };
  const addRegistrant = () => {
    const registrants = [...additionalRegistrants];
    let newRegistrant = {
      email: "",
      firstName: "",
      lastName: "",
      canBeAdded: true,
    };
    if (registrants.length === 0) {
      newRegistrant.first_registrant = true;
    }
    let firstAvailableTicket = null;
    if (isTicketsAvailable()) {
      firstAvailableTicket = findFirstAvailableTicket();

      newRegistrant.ticket = firstAvailableTicket;
      if (findFirstAvailableTicket) {
        let ticketsUpdated = [...tickets];
        let ticketIndex = ticketsUpdated.findIndex(
          (ticket) => ticket.id === firstAvailableTicket.id
        );
        let ticketToUpdate = ticketsUpdated[ticketIndex];
        if (ticketToUpdate.current_quantity !== null) {
          ticketToUpdate.current_quantity = ticketToUpdate.current_quantity - 1;
        }
        if (isTicketsAvailable() && firstAvailableTicket.is_donation) {
          newRegistrant.donation = 0;
        }
        ticketsUpdated[ticketIndex] = ticketToUpdate;
        setTickets(ticketsUpdated);
      }
    }
    if (
      (isTicketsAvailable() && firstAvailableTicket) ||
      !isTicketsAvailable()
    ) {
      registrants.push(newRegistrant);
      setAdditionalRegistrants(registrants);
      setAdditionalRegistrantsQuantity(additionalRegistrants.length + 1);
    }
  };

  const addRegistrantWithTicket = (id) => {
    const newRegistrants = [...additionalRegistrants];

    let newRegistrant = {
      email: "",
      firstName: "",
      lastName: "",
      canBeAdded: true,
    };
    if (newRegistrants.length === 0) {
      newRegistrant.first_registrant = true;
    }
    let updatedTickets = [...tickets];
    let selectedTicketIndex = tickets.findIndex((t) => t.id === id);
    newRegistrant.ticket = updatedTickets[selectedTicketIndex];
    newRegistrants.push(newRegistrant);
    setAdditionalRegistrants(newRegistrants);

    if (updatedTickets[selectedTicketIndex].current_quantity) {
      updatedTickets[selectedTicketIndex].current_quantity =
        updatedTickets[selectedTicketIndex].current_quantity - 1;
      setTickets(updatedTickets);
    }
  };

  const occurrencesList = meetingData?.meeting?.occurrences?.map(
    (occurrence) => {
      return {
        ...occurrence,
        label: moment(occurrence.start_time)
          .tz(meetingData.meeting.timezone)
          .format("MMM DD, YYYY"),
      };
    }
  );

  // useEffect(() => {
  //   console.log("tickets change", tickets);
  // }, [tickets]);

  const handleSelectOccurrenceChange = (val) => {
    const selectedOccurrence = occurrencesList.filter(
      (occurrence) => occurrence.label === val
    );

    if (selectedOccurrence.length > 0)
      setSelectedOccurrence(selectedOccurrence[0]);
  };

  const validateAdditionalRegistrants = (occurrenceTickets, currentTicket) => {
    if (additionalRegistrants.length === 0) {
      return;
    }
    // console.log("validate tickets", occurrenceTickets);
    let updatedRegistrants = [...additionalRegistrants];

    let workingTickets = occurrenceTickets.map((ticket) => ({ ...ticket }));
    updatedRegistrants = updatedRegistrants.map((registrant) => {
      let registrantTicket = workingTickets.find(
        (ticket) => ticket.name === registrant.ticket?.name
      );
      let ticketIndex = workingTickets.findIndex(
        (ticket) => ticket.name === registrant.ticket?.name
      );

      if (registrantTicket) {
        const isQuantityTracked =
          workingTickets[ticketIndex].current_quantity !== null;

        if (isQuantityTracked) {
          if (registrantTicket.current_quantity > 0) {
            workingTickets[ticketIndex].current_quantity =
              workingTickets[ticketIndex].current_quantity - 1;

            if (currentTicket && currentTicket.name === registrantTicket.name) {
              if (registrantTicket.current_quantity - 1 >= 0) {
                return {
                  ...registrant,
                  ticket: {
                    ...registrantTicket,
                  },
                  canBeAdded: true,
                };
              } else {
                return {
                  ...registrant,
                  ticket: {
                    ...registrantTicket,
                  },
                  canBeAdded: false,
                };
              }
            } else
              return {
                ...registrant,
                ticket: {
                  ...registrantTicket,
                },
                canBeAdded: true,
              };
          } else {
            return {
              ...registrant,
              ticket: registrantTicket,
              canBeAdded: false,
            };
          }
        } else {
          return {
            ...registrant,
            ticket: registrantTicket,
            canBeAdded: true,
          };
        }
      } else {
        return {
          ...registrant,
          canBeAdded: false,
        };
      }
    });
    setTickets(workingTickets);

    setAdditionalRegistrants(updatedRegistrants);
  };

  useEffect(() => {
    if (occurrencesList && occurrencesList.length > 0 && !selectedOccurrence) {
      setSelectedOccurrence(occurrencesList[0]);
    }
  }, [occurrencesList]);

  useEffect(() => {
    if (selectedOccurrence?.tickets?.length > 0) {
      // Always start with a fresh copy of the tickets for the selected occurrence
      const initialOccurrenceTickets = selectedOccurrence.tickets.map(
        (ticket) => ({ ...ticket })
      );
      const copied = JSON.parse(JSON.stringify(initialOccurrenceTickets));
      setInitialTickets(copied);

      setTickets([...initialOccurrenceTickets]);

      let availableTicket = findFirstAvailableTicket(initialOccurrenceTickets);
      setSelectedTicket(availableTicket);

      if (isTicketsAvailable()) {
        // Pass a copy of the *initial* tickets to validate against
        validateAdditionalRegistrants(
          [...initialOccurrenceTickets],
          availableTicket
        );
      }
    } else {
      // If no tickets for the selected occurrence, clear the tickets state
      setTickets([]);
      setSelectedTicket(null);
      // Also ensure additional registrants are cleared or flagged appropriately if no tickets are available
      setAdditionalRegistrants((prev) =>
        prev.map((reg) => ({ ...reg, canBeAdded: false, ticket: null }))
      );
    }
  }, [selectedOccurrence]);

  const checkEndTime = () => {
    if (additionalRegistrants.length === 0) {
      return;
    }
    // else if (
    //   additionalRegistrants.filter((reg) => reg.ticket.end_datetime !== null)
    //     .length === 0
    // ) {
    //   return;
    // }
    else {
      let currentRegistrants = [...additionalRegistrants];
      currentRegistrants = currentRegistrants.map((reg) => {
        if (reg.ticket && reg.ticket.end_datetime) {
          const currentTime = moment().utc();
          const ticketSalesStart = moment.utc(reg.ticket.end_datetime);

          if (currentTime.isSameOrAfter(ticketSalesStart)) {
            return { ...reg, canBeAdded: false };
          } else {
            return { ...reg, canBeAdded: true };
          }
        } else return { ...reg };
      });

      setAdditionalRegistrants(currentRegistrants);
    }
  };

  useEffect(() => {
    if (
      meetingData &&
      meetingData.meeting &&
      meetingData.meeting.tickets &&
      meetingData.meeting.tickets.length > 0
    ) {
      let availableTicket = findFirstAvailableTicket(
        meetingData.meeting.tickets
      );

      setSelectedTicket(availableTicket);
    }
    if (
      meetingData &&
      meetingData.meeting &&
      meetingData.meeting.tickets &&
      meetingData.meeting.tickets.length > 0
    ) {
      const copied = JSON.parse(JSON.stringify(meetingData.meeting.tickets));
      setInitialTickets(copied);
      // const isEndTime =
      //   copied.filter((ticket) => ticket.end_datetime).length > 0;
      // if (isEndTime) {
      //   setInterval(() => {
      //     checkEndTime();
      //   }, 1000);
      // }
      setTickets([...meetingData.meeting.tickets]);
    }
  }, [meetingData]);

  useEffect(() => {
    const isEndTime =
      initialTickets.filter((ticket) => ticket.end_datetime).length > 0;
    if (!isEndTime || additionalRegistrants.length === 0) return;

    const intervalId = setInterval(() => {
      checkEndTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [additionalRegistrants]);

  useEffect(() => {
    if (
      selectedOccurrence &&
      selectedOccurrence.tickets &&
      selectedOccurrence.tickets.length > 0 &&
      !selectedTicket
    ) {
      let availableTicket = findFirstAvailableTicket([
        ...selectedOccurrence.tickets,
      ]);

      setSelectedTicket(availableTicket);
      // setSelectedTicket(selectedOccurrence.tickets[0]);
    }
  }, [selectedOccurrence]);

  const removeRegistrant = (index = null) => {
    let registrantsList = [...additionalRegistrants];
    if (tickets.length > 0) {
      let registrantTicket;
      if (index) {
        registrantTicket = additionalRegistrants[index].ticket;
      } else {
        registrantTicket =
          additionalRegistrants[additionalRegistrants.length - 1].ticket;
      }

      if (registrantTicket && registrantTicket.current_quantity !== null) {
        let updatedTickets = [...tickets];
        let ticketToUpdate = updatedTickets.findIndex(
          (ticket) => ticket.id === registrantTicket.id
        );
        updatedTickets[ticketToUpdate].current_quantity =
          updatedTickets[ticketToUpdate].current_quantity + 1;
        if (index === 0) {
          updatedTickets[0].first_registrant = true;
        }
        setTickets(updatedTickets);
      }
    }

    if (index === null) {
      registrantsList.pop();
    } else {
      registrantsList = registrantsList.filter((_, i) => i !== index);
      if (index === 0 && registrantsList.length > 0) {
        registrantsList[0].first_registrant = true;
      }
    }
    setAdditionalRegistrants(registrantsList);
    // console.log(registrantsList.length);
    if (registrantsList.length === 0 && step !== 1) {
      handlePrevStep();
    }
  };
  const isFreeRegistrationPossible = () => {
    if (!meetingData) return;
    if (!tickets || tickets.length === 0) {
      if (isRecurringEvent()) {
        if (selectedOccurrence) {
          if (
            selectedOccurrence.product &&
            selectedOccurrence.product.price &&
            selectedOccurrence.product.price > 0
          ) {
            return false;
          } else return true;
        } else if (!selectedOccurrence && occurrencesList) {
          if (
            occurrencesList.length > 0 &&
            occurrencesList[0].product &&
            occurrencesList[0].product.price &&
            occurrencesList[0].product.price > 0
          )
            return false;
          else return true;
        } else return true;
      } else {
        if (
          meetingData &&
          meetingData.product &&
          meetingData.product.price &&
          meetingData.product.price > 0
        ) {
          return false;
        } else return true;
      }
    } else {
      let registrantsTicketsFree = true;
      additionalRegistrants.forEach((registrant) => {
        if (
          (registrant.ticket &&
            registrant.ticket.price &&
            registrant.ticket.price !== 0) ||
          (registrant.ticket && registrant.ticket.is_donation)
        ) {
          registrantsTicketsFree = false;
        }
      });
      if (
        registrantsTicketsFree &&
        (selectedTicket.price === null || selectedTicket.price === 0) &&
        !selectedTicket.is_donation
      ) {
        return true;
      } else {
        return false;
      }
    }
  };
  const freeRegistration = async () => {
    const registrantsValidation = validateRegistrants();

    if (
      // isEmailValid(email) === null ||
      // firstName.length === 0 ||
      // lastName.length === 0 ||
      !registrantsValidation
    ) {
      setErrorMessage(true);
      return;
    }

    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.append("action", "servv_process_free_order");
      params.append("security", servvData.security);
      params.append("post_id", servvData.postId);

      if (selectedOccurrence) {
        params.append("occurrence_id", selectedOccurrence.id);
      }

      // if (isTicketsAvailable()) {
      //   params.append("ticket_id", selectedTicket.id);
      // }

      // if (isDonation()) {
      //   params.append("donation_amount", donation);
      // }

      if (additionalRegistrants.length > 0) {
        let preparedAdditionalRegistrants = additionalRegistrants.slice(1);
        if (isTicketsAvailable()) {
          preparedAdditionalRegistrants = preparedAdditionalRegistrants.map(
            (registrant) => {
              return { ...registrant, ticket: registrant.ticket };
            }
          );
        }

        let additionalRegistrantsData = preparedAdditionalRegistrants.map(
          (registrant) => {
            let registrantData = null;
            if (!sameForAll) {
              registrantData = `${registrant.email},${registrant.firstName},${registrant.lastName}`;
            } else {
              registrantData = `${additionalRegistrants[0].email},${additionalRegistrants[0].firstName},${additionalRegistrants[0].lastName}`;
            }
            if (isTicketsAvailable()) {
              registrantData += `,${registrant.ticket.id}`;
            }
            if (registrant.ticket && registrant.ticket.is_donation) {
              registrantData += `,${toNumber(registrant.donation)}`;
            }
            return registrantData;
          }
        );

        params.append(
          "additional_registrants",
          additionalRegistrantsData.join(";")
        );
      }
      if (sameForAll) {
        params.append("same_for_all", true);
      }
      if (!isTicketsAvailable()) {
        params.append("email", additionalRegistrants[0].email);
        params.append("first_name", additionalRegistrants[0].firstName);
        params.append("last_name", additionalRegistrants[0].lastName);
      } else {
        let firstRegistrant = additionalRegistrants[0];
        params.append("email", firstRegistrant.email);
        params.append("first_name", firstRegistrant.firstName);
        params.append("last_name", firstRegistrant.lastName);
        params.append("ticket_id", firstRegistrant.ticket.id);
        if (firstRegistrant.donation) {
          params.append("donation_amount", toNumber(firstRegistrant.donation));
        }
      }

      const response = await axios.post(servvData.ajaxUrl, params);
      if (response && response.status === 200 && response.data.success) {
        setLoading(false);
        setStep(step + 1);
        setConfirmMessage(true);
      } else if (
        response &&
        response.status === 200 &&
        !response.data.success
      ) {
        setLoading(false);

        setRegistrationError(response.data.message);
        setShowRegistrationError(true);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching event info:", error);
      setRegistrationError("We're facing some issues please try again later.");
      setShowRegistrationError(true);
    }
  };

  const isAvailableTickets = (tickets) => {
    let isTicketsAvailable = -1;
    tickets.forEach((ticket) => {
      if (ticket.current_quantity) {
        isTicketsAvailable += ticket.current_quantity;
      }
    });
    if (isTicketsAvailable < 0 || isTicketsAvailable > 0) {
      return true;
    } else return false;
  };
  const isAddingRegistrationAvailable = () => {
    if (!meetingData) return false;
    const { meeting, product } = meetingData;
    let isRecurringEvent =
      meeting?.occurrences && meeting?.occurrences?.length > 0;
    if (!isRecurringEvent) {
      let isTicketsAvailable =
        meeting.tickets &&
        meeting.tickets.length > 0 &&
        isAvailableTickets(meetingData.meeting.tickets);

      if (
        isTicketsAvailable ||
        (product &&
          (!product.current_quantity ||
            (product.current_quantity && product.current_quantity > 0)))
      ) {
        let numberOfAvailableRegistrants = -1;
        if (!isTicketsAvailable && product.current_quantity) {
          numberOfAvailableRegistrants =
            product.current_quantity - 1 - additionalRegistrants.length;
        } else if (
          isTicketsAvailable &&
          selectedTicket &&
          meeting.tickets[selectedTicket].current_quantity
        ) {
          isTicketsAvailable =
            meeting.tickets[selectedTicket].current_quantity -
            1 -
            additionalRegistrants.length;
        }
        return {
          isRegistrationAvialable: true,
          numberOfAvailableRegistrants: numberOfAvailableRegistrants,
        };
      } else {
        return { isRegistrationAvialable: false };
      }
    }
  };

  // const ticketsOptions = () => {
  //   return tickets.map((ticket) => {
  //     if (ticket.price) {
  //       if (ticket.current_quantity !== null)
  //         if (ticket.current_quantity > 0)
  //           if (selectedTicket && ticket.id !== selectedTicket.id)
  //             return (
  //               ticket.name +
  //               " " +
  //               ticket.price +
  //               " " +
  //               ticket.currency +
  //               `   (${ticket.current_quantity} left)`
  //             );
  //           else
  //             return (
  //               ticket.name +
  //               " " +
  //               ticket.price +
  //               " " +
  //               ticket.currency +
  //               `   (${ticket.current_quantity - 1} left)`
  //             );
  //         else
  //           return (
  //             ticket.name +
  //             " " +
  //             ticket.price +
  //             " " +
  //             ticket.currency +
  //             `   (No available tickets)`
  //           );
  //       else return ticket.name + " " + ticket.price + " " + ticket.currency;
  //     } else {
  //       if (ticket.current_quantity !== null) {
  //         if (ticket.current_quantity > 0)
  //           if (selectedTicket && ticket.id !== selectedTicket.id)
  //             return ticket.name + `   (${ticket.current_quantity} left)`;
  //           else
  //             return ticket.name + `   (${ticket.current_quantity - 1} left)`;
  //         else return ticket.name + `   (No available tickets)`;
  //       } else {
  //         return ticket.name;
  //       }
  //     }
  //   });
  // };
  const ticketsOptions = () => {
    return tickets.map((ticket) => {
      let ticketDescription = ticket.name;
      if (ticket.price !== null) {
        ticket.ticketDescription += ticket.price;
      }
      return ticketDescription;
    });
  };

  const handleTicketSelect = (newVal) => {
    const selected = tickets.filter((ticket) => ticket.name === newVal);
    let ticketsUpdated = [...tickets];
    if (
      selected.length > 0 &&
      (selected[0].current_quantity === null ||
        selected[0].current_quantity - 1 >= 0)
    ) {
      setSelectedTicket(selected[0]);
      let updatedTicketIndex = ticketsUpdated.findIndex(
        (t) => t.id === selected[0].id
      );
      if (updatedTicketIndex >= 0) {
        ticketsUpdated[updatedTicketIndex].current_quantity =
          ticketsUpdated[updatedTicketIndex].current_quantity - 1;
        setTickets(ticketsUpdated);
      }
    } else setSelectedTicket(null);
  };

  // const isDonation = () => {
  //   if (
  //     !meetingData.meeting.tickets ||
  //     meetingData.meeting.tickets.length === 0
  //   )
  //     return false;
  //   else if (
  //     meetingData.meeting.tickets[
  //       meetingData.meeting.findIndex(
  //         (ticket) => ticket.name === selectedTicket
  //       )
  //     ].is_donation
  //   ) {
  //     return true;
  //   } else return false;
  // };

  const isRecurringEvent = () => {
    if (!meetingData) return false;
    if (
      meetingData.meeting &&
      meetingData.meeting.occurrences &&
      meetingData.meeting.occurrences.length > 0
    ) {
      return true;
    } else return false;
  };

  const isTicketsAvailable = () => {
    if (!meetingData) return false;
    if (!isRecurringEvent()) {
      if (meetingData.meeting && meetingData.meeting.tickets) {
        return true;
      } else return false;
    } else if (
      selectedOccurrence ||
      (occurrencesList &&
        occurrencesList.length > 0 &&
        occurrencesList[0].tickets &&
        occurrencesList[0].tickets.length > 0)
    ) {
      if (
        (selectedOccurrence &&
          selectedOccurrence.tickets &&
          selectedOccurrence.tickets.length > 0) ||
        (occurrencesList &&
          occurrencesList.length > 0 &&
          occurrencesList.tickets &&
          occurrencesList[0].tickets.length > 0)
      )
        return true;
      else return false;
    } else return false;
  };

  const isFreeEvent = () => {
    if (!isRecurringEvent()) {
      if (meetingData.product) {
        if (isTicketsAvailable()) {
          if (
            selectedTicket &&
            selectedTicket.price === 0 &&
            !selectedTicket.price
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          if (
            meetingData.product &&
            (meetingData.product.price === 0 || !meetingData.product.price)
          ) {
            return true;
          } else return false;
        }
      }
    } else {
      if (isTicketsAvailable()) {
        if (
          selectedTicket.price &&
          (selectedTicket.price === 0 || !selectedTicket.proice)
        ) {
          return true;
        } else return false;
      } else if (
        selectedOccurrence &&
        selectedOccurrence.product &&
        (selectedOccurrence.product.price === 0 ||
          !selectedOccurrence.product.price)
      ) {
        return true;
      } else return false;
    }
  };

  const isDonation = () => {
    if (isTicketsAvailable() && selectedTicket && selectedTicket.is_donation) {
      return true;
    } else return false;
  };

  const avaialbleRegistrantsCount = () => {
    const currentRegistrants = additionalRegistrants.length + 1;
    if (!meetingData) return;

    if (isTicketsAvailable()) {
      let haveUnlimitedTickets = false;
      let ticketsCount = 0;

      tickets.forEach((ticket) => {
        if (ticket.current_quantity !== null) {
          ticketsCount += ticket.current_quantity;
        } else if (ticket.current_quantity === null) {
          haveUnlimitedTickets = true;
        }
      });

      if (!haveUnlimitedTickets) {
        return ticketsCount;
      } else if (haveUnlimitedTickets) {
        return -1;
      } else if (!haveUnlimitedTickets && ticketsCount - 1 === 0) {
        return null;
      }
    } else {
      if (!isRecurringEvent()) {
        if (meetingData && meetingData.product.current_quantity) {
          return meetingData.product.current_quantity - currentRegistrants;
        } else return -1;
      } else {
        if (
          selectedOccurrence?.product?.current_quantity ||
          (occurrencesList && occurrencesList.length > 0)
        ) {
          if (selectedOccurrence) {
            return (
              selectedOccurrence.product.current_quantity - currentRegistrants
            );
          } else if (occurrencesList) {
            return (
              occurrencesList[0].product.current_quantity - currentRegistrants
            );
          }
        } else return -1;
      }
    }
  };
  const getEventPrice = () => {
    if (!meetingData) return;
    // console.log(meetingData);
    if (isTicketsAvailable()) {
      if (selectedTicket && selectedTicket.price) {
        return (
          selectedTicket.price + " " + selectedTicket.currency.toUpperCase()
        );
      } else return false;
    } else {
      if (isRecurringEvent()) {
        if (
          selectedOccurrence &&
          selectedOccurrence.product &&
          selectedOccurrence.product.price
        ) {
          return (
            selectedOccurrence.product.price +
            " " +
            meetingData.currency.toUpperCase()
          );
        } else {
          return false;
        }
      } else {
        if (meetingData && meetingData.product && meetingData.product.price) {
          return (
            meetingData.product.price + " " + meetingData.currency.toUpperCase()
          );
        } else return false;
      }
    }
  };

  const handleDonationChange = (newVal) => {
    setDonation(newVal);
  };

  const renderRegistrantsFormByTicket = (id) => {
    // console.log(additionalRegistrants);

    return additionalRegistrants.map((registrant, index) => {
      if (registrant.ticket && registrant.ticket.id === id) {
        attendeeCounter.current += 1;
        return (
          <Fragment>
            {(registrant.first_registrant ||
              (!registrant.first_registrant && !sameForAll)) && (
              <div className="flex flex-col items-start gap-2 p-[17px] border rounded-[17px] self-stretch border-[#CBD5E1] bg-white w-full">
                <div className="flex flex-col w-full flex-1 gap-2">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-4 items-center">
                      <span className="font-semibold text-[16px]">
                        {registrant.first_registrant
                          ? "Attendee " +
                            attendeeCounter.current +
                            " (Main contact)"
                          : "Attendee " + attendeeCounter.current}
                      </span>
                      {
                        <div className="text-[16px] flex justify-center items-center px-[0.5625rem] py-[0.1875rem] rounded-[0.425rem] border border-[#E5E5E5] text-[#171717] bg-white">
                          {registrant.ticket.name}
                        </div>
                      }
                    </div>
                    {registrant.canBeAdded === false && (
                      <span>Registrant can't be added</span>
                    )}
                    <button
                      className="font-semibold"
                      onClick={() => removeRegistrant(index)}
                    >
                      Remove
                    </button>
                  </div>
                  {
                    <div className="text-[16px] leading-[1.4] font-normal not-italic text-[#4A5565] mb-8">
                      {registrant.ticket.price > 0
                        ? registrant.ticket.price +
                          " " +
                          registrant.ticket.currency.toUpperCase()
                        : registrant.ticket.is_donation
                        ? "Donation"
                        : "Free"}
                    </div>
                  }
                  <div className="flex flex-col gap-2">
                    <div className="text-[16px] flex flex-col font-semibold">
                      Email *
                    </div>
                    <InputFieldControl
                      value={registrant.email}
                      align="left"
                      type="text"
                      width={"100%"}
                      onChange={(val) =>
                        handleRegistrantEmailChange(index, val)
                      }
                    />
                    <div className="flex flex-row justify-evenly items-baseline w-full gap-4">
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="text-[16px] flex flex-col font-semibold">
                          First Name *
                        </div>
                        <InputFieldControl
                          value={registrant.firstName}
                          align="left"
                          type="text"
                          width={"100%"}
                          onChange={(val) =>
                            handleRegistrantFirstNameChange(index, val)
                          }
                        />
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="text-[16px] flex flex-col font-semibold">
                          Last Name *
                        </div>
                        <InputFieldControl
                          value={registrant.lastName}
                          align="left"
                          type="text"
                          width={"100%"}
                          onChange={(val) =>
                            handleRegistrantLastNameChange(index, val)
                          }
                        />
                      </div>
                    </div>
                    {registrant.ticket && registrant.ticket?.is_donation && (
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="text-[16px] flex flex-col font-semibold">
                          Donation *
                        </div>
                        <InputFieldControl
                          value={registrant.donation}
                          align="left"
                          type="number"
                          width={"100%"}
                          onChange={(val) =>
                            handleRegistrantDonation(index, val)
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
                {additionalRegistrants.length > 1 &&
                  registrant.first_registrant && (
                    <div className="mt-4">
                      {registrant.first_registrant && (
                        <CheckboxControl
                          label="Same for all"
                          checked={sameForAll}
                          onChange={() => setSameForAll(!sameForAll)}
                        />
                      )}
                    </div>
                  )}
              </div>
            )}
          </Fragment>
        );
      }
    });
  };

  const getNumberOfTicketsById = (id) => {
    return additionalRegistrants.filter(
      (registrant) => registrant.ticket && registrant.ticket.id === id
    ).length;
  };

  function removeLastRegistrantByTicketId(id) {
    let newRegistrants = [...additionalRegistrants];
    const index = [...newRegistrants]
      .reverse()
      .findIndex(
        (registrant) => registrant.ticket && registrant.ticket.id === id
      );

    if (index === -1) {
      return;
    }

    const actualIndex = newRegistrants.length - 1 - index;

    removeRegistrant(actualIndex);
  }

  const renderTickets = () => {
    if (!tickets || tickets.length === 0) return;
    else if (tickets && tickets.length >= 1) {
      return tickets.map((ticket) => {
        const initialTicket =
          initialTickets[initialTickets.findIndex((t) => t.id === ticket.id)];
        const currentTime = moment();

        let ticketSalesStart = initialTicket.start_datetime
          ? moment(initialTicket.start_datetime)
          : null;

        let ticketSalesEnd = initialTicket.end_datetime
          ? moment(initialTicket.end_datetime)
          : null;

        const isWithinSalesWindow =
          (!ticketSalesStart || currentTime.isSameOrAfter(ticketSalesStart)) &&
          (!ticketSalesEnd || currentTime.isSameOrBefore(ticketSalesEnd));

        return (
          <div className="flex flex-col">
            <div
              className={`flex flex-row gap-[1rem] p-[17px] items-start border rounded-[17px] bg-white ${
                initialTicket.current_quantity > 0 ||
                initialTicket.current_quantity === null
                  ? "opacity-100"
                  : "opacity-40"
              } max-sm:flex-col max-sm:grow-0 max-sm:items-center`}
            >
              <div className="flex flex-col justify-self-stretch basis-[482px] grow shrink min-w-[300px] max-sm:basis-auto">
                <div className="flex flex-row gap-2">
                  <span className="font-regular text-[1rem]">
                    {ticket.name}
                  </span>
                  <div className="text-[0.75rem] flex justify-center items-center px-[0.5625rem] py-[0.1875rem] rounded-[0.425rem] bg-[#171717] text-white">
                    {(initialTicket.current_quantity > 0 ||
                      initialTicket.current_quantity === null) &&
                    isWithinSalesWindow
                      ? "Available"
                      : !isWithinSalesWindow
                      ? "Not available"
                      : "Sold out"}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start basis-[332px] grow shrink min-w-[250px] max-sm:basis-auto max-sm:items-center">
                <span className="font-regular text-[1.125rem]">
                  {ticket.price > 0
                    ? ticket.price + ` ${meetingData.currency.toUpperCase()}`
                    : "Free"}
                </span>
                {(initialTicket.current_quantity > 0 ||
                  initialTicket.current_quantity === null) &&
                isWithinSalesWindow ? (
                  <div className="flex flex-row gap-2 border border-[#E5E5E5] rounded-[4px] px-4 py-1">
                    <button
                      className="font-semibold text-lg self-align-en text-black rounded transition-all duration-200 ease-in-out justify-self-center hover:contrast-115 disabled:opacity-50 disabled:cursor-default border-none focus:outline-none"
                      onClick={() => removeLastRegistrantByTicketId(ticket.id)}
                      disabled={getNumberOfTicketsById(ticket.id) === 0}
                    >
                      <MinusIcon className="w-4 justify-self-center" />
                    </button>
                    <span>{getNumberOfTicketsById(ticket.id)}</span>
                    <button
                      className="font-semibold text-lg self-align-end text-black rounded transition-all duration-200 ease-in-out justify-self-center hover:contrast-115 disabled:opacity-50 disabled:cursor-default border-none focus:outline-none"
                      onClick={() => addRegistrantWithTicket(ticket.id)}
                      disabled={ticket.current_quantity === 0}
                    >
                      <PlusIcon className="w-4 justify-self-center" />
                    </button>
                  </div>
                ) : !isWithinSalesWindow &&
                  (ticketSalesStart || ticketSalesEnd) ? (
                  <div
                    className="flex flex-col items-start self-stretch 
                              px-[1.0625rem] py-[0.8125rem] 
                              rounded-[0.625rem] border border-[#E5E5E5] 
                              bg-white text-[0.875rem]"
                  >
                    {ticketSalesStart &&
                    (!ticketSalesEnd ||
                      (ticketSalesEnd &&
                        currentTime.isSameOrBefore(ticketSalesEnd)))
                      ? "Available · " +
                        ticketSalesStart
                          .tz(meetingData.meeting.timezone)
                          .format("MMM DD, YYYY hh:mm a")
                      : ticketSalesEnd
                      ? "Ticket sale ended on · " +
                        ticketSalesEnd
                          .tz(meetingData.meeting.timezone)
                          .format("MMM DD, YYYY hh:mm a")
                      : ""}
                  </div>
                ) : (
                  <div className="flex flex-row gap-2 h-[1.5rem]"></div>
                )}
              </div>
            </div>
            {/* {renderRegistrantsFormByTicket(ticket.id)} */}
          </div>
        );
      });
    }
  };
  const renderSummary = () => {
    const ticketStats = tickets.map((ticket) => {
      const count = additionalRegistrants.filter(
        (r) => r.ticket.id === ticket.id && r.canBeAdded === true
      ).length;
      let total = count * ticket.price;

      return {
        ...ticket,
        count,
        total,
      };
    });

    const { total, ticketsCount } = getTotal();
    let counter = 0;
    const isDonation = isTicketsAvailable()
      ? additionalRegistrants.filter((reg) => reg.ticket.is_donation).length > 0
      : false;
    return (
      <div className="flex flex-col items-start gap-2 p-[17px] border rounded-[17px] self-stretch border-[#CBD5E1] bg-white w-1/3 h-fit max-sm:w-full">
        <div className="font-semibold">Order summary</div>
        <div className="flex flex-col gap-4 border-b w-full pb-[13px]">
          {ticketStats
            .filter((t) => t.count > 0)
            .map((ticket) => {
              return (
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col items-start">
                    <span className="text-[0.875rem]">{ticket.name}</span>
                    <span className="text-[#4A5565] text-[0.875rem]">{`Qty: ${ticket.count}`}</span>
                  </div>
                  <div>
                    <span className="text-[0.875rem]">
                      {ticket.total > 0
                        ? ticket.total + " " + ticket.currency.toUpperCase()
                        : ticket.is_donation
                        ? "Donation"
                        : "Free"}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-row justify-between items-center w-full pb-[24px]">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">{total}</span>
        </div>
        <div className="pt-[24px] border-t w-full">
          <span className="font-semibold">Attendees</span>
          {isTicketsAvailable() && (
            <div>
              {tickets.map((t) =>
                additionalRegistrants
                  .filter((reg) => reg.ticket.id === t.id)
                  .map((r, index) => {
                    counter += 1;
                    return (
                      <div
                        key={`${t.id}-${index}`}
                        className="flex flex-row items-center gap-2"
                      >
                        <div
                          className={`w-[8px] h-[8px] rounded-full ${
                            r.first_registrant ? "bg-[#0ED300]" : "bg-[#BCBCBC]"
                          }`}
                        ></div>

                        <span className="text-[#4A5565] text-[0.875rem]">
                          {r.canBeAdded ? r.ticket.name : "Ticket closed"}
                        </span>
                        <span className="text-[#4A5565] text-[0.875rem]">
                          -
                        </span>
                        <span className="text-[#4A5565] text-[0.875rem]">
                          {`Attendee ${counter}`}
                        </span>
                      </div>
                    );
                  })
              )}
            </div>
          )}
          {!isTicketsAvailable() && (
            <div>
              {additionalRegistrants.map((r, index) => (
                <div
                  key={`${"Attendee"}-${index}`}
                  className="flex flex-row items-center gap-2"
                >
                  <div
                    className={`w-[8px] h-[8px] rounded-full ${
                      r.first_registrant ? "bg-[#0ED300]" : "bg-[#BCBCBC]"
                    }`}
                  ></div>

                  <span className="text-[#4A5565] text-[0.875rem]">
                    Standard
                  </span>
                  <span className="text-[#4A5565] text-[0.875rem]">-</span>
                  <span className="text-[#4A5565] text-[0.875rem]">
                    {`Attendee ${index + 1}`}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div class="self-stretch rounded-[0.425rem] bg-[#F9FAFB] pt-[0.75rem] pr-[0.65rem] pb-[0.75rem] pl-[0.65rem] text-[0.875rem]">
          <span className="font-semibold">Required fields:</span>{" "}
          {`First name,
          last name,${
            isDonation ? " donation" : ""
          } and email address are required for all attendees.`}
        </div>
      </div>
    );
  };

  const handleCheckout = () => {
    if (getEventPrice() > 0) {
      fetchClientSecret();
    } else if (isFreeRegistrationPossible()) {
      freeRegistration();
    } else fetchClientSecret();
  };
  const attendeeCounter = useRef(0);
  const renderAttendees = () => {
    if (!tickets || tickets.length === 0) return;
    const disabled =
      additionalRegistrants.filter((reg) => reg.ticket.canBeAdded === false)
        .length > 0;

    attendeeCounter.current = 0;
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-full gap-4">
            {tickets.map((ticket) => {
              return renderRegistrantsFormByTicket(ticket.id);
            })}
            <div className="flex flex-row justify-between pt-8">
              <button
                onClick={() => {
                  handlePrevStep();
                  setErrorMessage(false);
                }}
                className="flex flex-row items-center justify-start gap-[8px] px-[12px] py-[8px] text-[#171717] rounded-[0.425rem] border border-[#E5E5E5] bg-[rgba(229,229,229,0.3)] text-[0.875rem] max-sm:p-1"
              >
                <ArrowLeftIcon className="w-[1rem]" />
                <span>Back to tickets</span>
              </button>
              {additionalRegistrants.length > 0 && (
                <button
                  onClick={handleCheckout}
                  disabled={disabled}
                  className="flex flex-row items-center justify-start gap-[8px] px-[12px] py-[8px]  bg-[#171717] text-[#FAFAFA] rounded-[0.425rem] text-[0.875rem] max-sm:p-1"
                >
                  <ArrowRightIcon className="w-[1rem]" />
                  <span>Continue to checkout</span>
                </button>
              )}
            </div>
          </div>
          {renderSummary()}
        </div>
      </div>
    );
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const getTotal = () => {
    let total = 0;
    let ticketsCount = 0;
    let currency =
      additionalRegistrants.length > 0
        ? additionalRegistrants[0].ticket
          ? additionalRegistrants[0].ticket.currency.toUpperCase()
          : ""
        : "";
    additionalRegistrants.forEach((reg) => {
      if (reg.ticket && reg.ticket.id) {
        ticketsCount += 1;
        total += reg.ticket.price;
        if (reg.ticket.is_donation) {
          if (!sameForAll) total += toNumber(reg.donation);
          else total += toNumber(additionalRegistrants[0].donation);
        }
      }
    });
    if (isTicketsAvailable())
      return {
        total: total + " " + currency.toUpperCase(),
        ticketsCount: ticketsCount,
      };
    else
      return {
        total: total + " " + currency.toUpperCase(),
        ticketsCount: additionalRegistrants.length,
      };
  };

  const renderConfirmMessage = () => {
    const start = selectedOccurrence
      ? moment(selectedOccurrence.start_time).tz(meetingData.meeting.timezone)
      : moment(meetingData.meeting.start_time).tz(meetingData.meeting.timezone);

    const { total, ticketsCount } = getTotal();

    const price = getEventPrice;
    const mainRegistrant = sameForAll
      ? additionalRegistrants.find((reg) => reg.first_registrant)
      : null;

    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-[24px] p-[17px] border rounded-[17px] bg-white">
          <div className="w-[80px] h-[80px] rounded-full bg-[#DCFCE7] flex items-center justify-center">
            <CheckIcon className="fill-[#00A63E]" />
          </div>
          <span className="text-[#016630] text-[1rem]">
            Registration Complete!
          </span>
          <p className="text-[1rem] text-[#4A5565]">
            You will receive confirmation emails shortly for each attendee.
          </p>
          <div className="flex flex-col items-start self-stretch p-[1.5rem] gap-[1rem] rounded-[0.625rem] bg-[#F9FAFB]">
            <span className="font-semibold text-[18px] self-center">
              {meetingData.meeting.topic}
            </span>
            <div className="flex flex-row gap-[16px] w-full">
              <div className="flex flex-col gap-[4px] items-center w-1/2">
                <span className="text-[0.875rem] text-[#4A5565]">Date</span>
                <span className="text-[0.875rem] text-[#0A0A0A]">
                  {start.format("MMM DD, YYYY")}
                </span>
              </div>
              <div className="flex flex-col gap-[4px] items-center w-1/2">
                <span className="text-[0.875rem] text-[#4A5565]">Time</span>
                <span className="text-[0.875rem] text-[#0A0A0A]">
                  {start.format("hh:mm a")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[24px] p-[17px] border rounded-[17px] bg-white">
          <span className="font-semibold text-[18px] self-stretch pb-[24px]">
            Booking summary
          </span>
          <div className="flex flex-row w-full justify-evenly items-center pb-[24px] border-b">
            <div className="flex flex-col gap-[4px] items-start">
              <span className="text-[0.875rem] text-[#4A5565]">Total paid</span>
              <span className="font-semibold text-[1rem] text-[#0A0A0A]">
                {total}
              </span>
            </div>
            <div className="flex flex-col gap-[4px] items-start">
              <span className="text-[0.875rem] text-[#4A5565]">Tickets</span>
              <span className="font-semibold text-[1rem] text-[#0A0A0A]">
                {ticketsCount > 1 ? ticketsCount + " tickets" : "1 ticket"}
              </span>
            </div>
            <div className="flex flex-col gap-[4px] items-start">
              <span className="text-[0.875rem] text-[#4A5565]">Attendees</span>
              <span className="font-semibold text-[1rem] text-[#0A0A0A]">
                {additionalRegistrants.length + " people"}
              </span>
            </div>
          </div>
          <span className="font-semibold self-stretch pt-[25px] text-[1rem] text-[#0A0A0A]">
            Attendee details
          </span>
          <div className="flex flex-col gap-[0.75rem] w-full">
            {mainRegistrant &&
              additionalRegistrants.map((registrant, index) => (
                <div
                  key={registrant.id || index}
                  className="flex justify-between items-center self-stretch px-[1rem] py-[0.75rem] rounded-[0.625rem] bg-[#F9FAFB]"
                >
                  {/* Left Column: Name + Email */}
                  <div className="flex flex-col gap-[4px] items-start">
                    <span className="font-semibold text-[0.875rem]">
                      {`${mainRegistrant.firstName} ${mainRegistrant.lastName}`}
                    </span>
                    <span className="text-[#4A5565] text-[0.875rem]">
                      {mainRegistrant.email}
                    </span>
                  </div>

                  {/* Right Column: Ticket Info */}
                  {isTicketsAvailable() && (
                    <div className="flex flex-col gap-[4px] items-start">
                      <span className="font-semibold text-[0.875rem]">
                        {registrant.ticket.name}
                      </span>
                      <span className="text-[#4A5565] text-[0.875rem]">
                        {registrant.ticket.price > 0
                          ? `${
                              registrant.ticket.price
                            } ${registrant.ticket.currency.toUpperCase()}`
                          : registrant.ticket.is_donation
                          ? `${
                              registrant.ticket.donation
                            } ${registrant.ticket.currency.toUpperCase()}`
                          : "Free"}
                      </span>
                    </div>
                  )}
                  {!isTicketsAvailable() && (
                    <div className="flex flex-col gap-[4px] items-start">
                      <span className="font-semibold text-[0.875rem]">
                        {"Standard ticket"}
                      </span>
                      <span className="text-[#4A5565] text-[0.875rem]">
                        {"Free"}
                      </span>
                    </div>
                  )}
                </div>
              ))}

            {/* {mainRegistrant && (
              <div className="flex justify-between items-center self-stretch px-[1rem] py-[0.75rem] rounded-[0.625rem] bg-[#F9FAFB]">
                <div className="flex flex-col gap-[4px] items-start">
                  <span className="font-semibold text-[0.875rem]">{`${mainRegistrant.firstName} ${mainRegistrant.lastName}`}</span>
                  <span className="text-[#4A5565] text-[0.875rem]">
                    {mainRegistrant.email}
                  </span>
                </div>
                {isTicketsAvailable() && (
                  <div className="flex flex-col gap-[4px] items-start">
                    <span className="font-semibold text-[0.875rem]">{`${mainRegistrant.ticket.name}`}</span>
                    <span className="text-[#4A5565] text-[0.875rem]">
                      {mainRegistrant.ticket.price > 0
                        ? mainRegistrant.ticket.price +
                          " " +
                          mainRegistrant.ticket.currency
                        : mainRegistrant.ticket.is_donation
                        ? mainRegistrant.ticket.donation +
                          " " +
                          mainRegistrant.ticket.currency
                        : "Free"}
                    </span>
                  </div>
                )}
                {!isTicketsAvailable() && (
                  <div className="flex flex-col gap-[4px] items-start">
                    <span className="font-semibold text-[0.875rem]">
                      Standard ticket
                    </span>
                    <span className="text-[#4A5565] text-[0.875rem]">
                      {"Free"}
                    </span>
                  </div>
                )}
              </div>
            )} */}
            {!mainRegistrant &&
              additionalRegistrants.map((registrant, index) => (
                <div
                  key={registrant.id || index}
                  className="flex justify-between items-center self-stretch px-[1rem] py-[0.75rem] rounded-[0.625rem] bg-[#F9FAFB]"
                >
                  {/* Left Column: Name + Email */}
                  <div className="flex flex-col gap-[4px] items-start">
                    <span className="font-semibold text-[0.875rem]">
                      {`${registrant.firstName} ${registrant.lastName}`}
                    </span>
                    <span className="text-[#4A5565] text-[0.875rem]">
                      {registrant.email}
                    </span>
                  </div>

                  {/* Right Column: Ticket Info */}
                  {isTicketsAvailable() && (
                    <div className="flex flex-col gap-[4px] items-start">
                      <span className="font-semibold text-[0.875rem]">
                        {registrant.ticket.name}
                      </span>
                      <span className="text-[#4A5565] text-[0.875rem]">
                        {registrant.ticket.price > 0
                          ? `${registrant.ticket.price} ${registrant.ticket.currency}`
                          : registrant.ticket.is_donation
                          ? `${registrant.ticket.donation} ${registrant.ticket.currency}`
                          : "Free"}
                      </span>
                    </div>
                  )}
                  {!isTicketsAvailable() && (
                    <div className="flex flex-col gap-[4px] items-start">
                      <span className="font-semibold text-[0.875rem]">
                        {"Standard ticket"}
                      </span>
                      <span className="text-[#4A5565] text-[0.875rem]">
                        {"Free"}
                      </span>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  const { total, ticketsCount } = getTotal();
  const renderStandardTicket = () => {
    if (!meetingData || !meetingData.meeting) return null;
    if (meetingData.occurrences && !selectedOccurrence) return;
    const { product, meeting } = meetingData;
    const occurrence = selectedOccurrence ? selectedOccurrence : null;
    const isAvailable = !occurrence
      ? product.current_quantity === null || product.current_quantity > 0
      : occurrence.product.current_quantity === null ||
        occurrence.product.current_quantity > 0;
    const isSoldOut = !isAvailable;
    const price = getEventPrice();
    return (
      <div className="flex flex-col">
        <div
          className={`flex flex-row gap-[1rem] p-[17px] items-start border rounded-[17px] bg-white ${
            isAvailable ? "opacity-100" : "opacity-40"
          } max-sm:flex-col max-sm:grow-0 max-sm:items-center`}
        >
          {/* Standard ticket start */}
          <div className="flex flex-col justify-self-stretch basis-[482px] grow shrink min-w-[300px] max-sm:basis-auto">
            <div className="flex flex-row gap-2">
              <span className="font-regular text-[1rem]">Standard ticket</span>
              <div className="text-[0.75rem] flex justify-center items-center px-[0.5625rem] py-[0.1875rem] rounded-[0.425rem] bg-[#171717] text-white">
                {isAvailable ? "Available" : "Sold out"}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start basis-[332px] grow shrink min-w-[250px] max-sm:basis-auto max-sm:items-center">
            <span className="font-regular text-[1.125rem]">
              {price > 0 ? price + meetingData.currency.toUpperCase() : "Free"}
            </span>

            {isAvailable ? (
              <div className="flex flex-row gap-2 border border-[#E5E5E5] rounded-[4px] px-4 py-1">
                <button
                  className="font-semibold text-lg self-align-end rounded transition-all duration-200 ease-in-out justify-self-center hover:contrast-115 disabled:opacity-50 disabled:cursor-default border-none focus:outline-none"
                  onClick={() => removeRegistrant()}
                  disabled={additionalRegistrants.length === 0}
                >
                  <MinusIcon className="w-4 justify-self-center" />
                </button>
                <span>{additionalRegistrants.length}</span>
                <button
                  className="font-semibold text-lg self-align-end rounded transition-all duration-200 ease-in-out justify-self-center hover:contrast-115 disabled:opacity-50 disabled:cursor-default border-none focus:outline-none"
                  onClick={() => addRegistrant()}
                  disabled={
                    !occurrence
                      ? product.current_quantity !== null &&
                        product.current_quantity -
                          additionalRegistrants.length ===
                          0
                      : selectedOccurrence.product.current_quantity !== null &&
                        selectedOccurrence.product.current_quantity -
                          additionalRegistrants.length ===
                          0
                  }
                >
                  <PlusIcon className="w-4 justify-self-center" />
                </button>
              </div>
            ) : (
              <div className="flex flex-row gap-2 h-[1.5rem]" />
            )}
          </div>
          {/* Standard ticket end */}
        </div>
      </div>
    );
  };
  const getStartTime = () => {
    if (meetingData && meetingData.meeting) {
      return moment(meetingData.meeting.start_time)
        .tz(meetingData.meeting.timezone)
        .format("MMM DD, YYYY hh:mm a");
    }
  };

  return (
    <Fragment>
      {/* {meetingData && meetingData.meeting && renderConfirmMessage()} */}
      <div className="absolute top-[50vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[100]">
        {loading && <Spinner loading={true} />}
      </div>
      {!isRecurringEvent() && (
        <BlockStack gap={4} cardsLayout={true}>
          {step === 1 && (
            <div className="flex flex-row justify-between items-end">
              <h2>Select your tickets</h2>
              <div className="flex flex-row gap-2">
                <span className="text-[0.875rem] leading-[1.4] font-normal not-italic text-[#4A5565]">
                  {getStartTime()}
                </span>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-row justify-between items-end">
              <h2>Registrant Details</h2>
              <div className="flex flex-row gap-2">
                <span className="text-[0.875rem] leading-[1.4] font-normal not-italic text-[#4A5565]">
                  {additionalRegistrants.length > 1
                    ? additionalRegistrants.length + " attendees"
                    : additionalRegistrants.length + " attendee"}
                </span>
              </div>
            </div>
          )}

          {!isTicketsAvailable() && step === 1 && renderStandardTicket()}
          {!isTicketsAvailable() &&
            step === 2 &&
            renderAdditionalRegistrantsForm()}
          {/* {!confirmMessage && isTicketsAvailable() && (
              <BlockStack gap={4} cardsLayout={true}>
                <div className="flex flex-row items-center">Tickets</div>
                <SelectControl
                  options={ticketsOptions()}
                  selected={selectedTicket ? selectedTicket.name : ""}
                  onSelectChange={handleTicketSelect}
                />
              </BlockStack>
            )} */}

          {/* <div className="flex flex-col items-center">
              {!confirmMessage &&
                meetingData &&
                meetingData.product &&
                !isTicketsAvailable() && (
                  <div className="flex flex-row items-center">
                    Number of registrants
                  </div>
                )}
              <div className="flex flex-row items-center gap-4">
                {!confirmMessage &&
                  meetingData &&
                  meetingData.product &&
                  !isTicketsAvailable() && (
                    <button
                      className="font-semibold text-lg self-align-end rounded transition-all duration-200 ease-in-out justify-self-center hover:contrast-115 disabled:opacity-50 disabled:cursor-default border-none"
                      onClick={() => removeRegistrant()}
                      disabled={additionalRegistrants.length === 0}
                    >
                      <MinusCircleIcon className="w-8 justify-self-center" />
                    </button>
                  )}
                {!confirmMessage &&
                  meetingData &&
                  meetingData.product &&
                  !isTicketsAvailable() && (
                    <div className="font-semibold text-display-md">
                      {additionalRegistrants.length + 1}
                    </div>
                  )}
                {!confirmMessage &&
                  meetingData &&
                  meetingData.product &&
                  !isTicketsAvailable() && (
                    <button
                      className="font-semibold text-lg self-align-end rounded transition-all duration-200 ease-in-out justify-self-center hover:contrast-115 disabled:opacity-50 disabled:cursor-default border-none"
                      onClick={() => addRegistrant()}
                      disabled={
                        avaialbleRegistrantsCount() !== null &&
                        avaialbleRegistrantsCount() !== -1 &&
                        avaialbleRegistrantsCount() <= 0
                      }
                    >
                      <PlusCircleIcon className="w-8 justify-self-center" />
                    </button>
                  )}
              </div>
            </div> */}
          {!confirmMessage && (
            <BlockStack gap={2} cardsLayout={true}>
              {errorMessage && (
                <div className="section-description font-semibold text-error-700">
                  Please fill in all required fields.
                </div>
              )}
              {/* {!isTicketsAvailable() && (
                  <Fragment>
                    <div className="section-description font-semibold">
                      Email
                    </div>
                    <InputFieldControl
                      value={email}
                      align="left"
                      type="text"
                      width={"100%"}
                      onChange={handleEmailChange}
                    />
                    <InlineStack gap={4}>
                      <BlockStack cardsLayout={true}>
                        <div className="section-description font-semibold">
                          First Name
                        </div>
                        <InputFieldControl
                          value={firstName}
                          align="left"
                          type="text"
                          width={"100%"}
                          onChange={handleFirstNameChange}
                        />
                      </BlockStack>
                      <BlockStack cardsLayout={true}>
                        <div className="section-description font-semibold">
                          Last Name
                        </div>
                        <InputFieldControl
                          value={lastName}
                          align="left"
                          type="text"
                          width={"100%"}
                          onChange={handleLastNameChange}
                        />
                      </BlockStack>
                    </InlineStack>
                    <CheckboxControl
                      label="Same for all"
                      checked={sameForAll}
                      onChange={() => setSameForAll(!sameForAll)}
                    />
                    {isDonation() && (
                      <Fragment>
                        <div className="section-description font-semibold">
                          Donation amount
                        </div>
                        <InputFieldControl
                          value={donation}
                          align="left"
                          type="number"
                          width={"100%"}
                          onChange={handleDonationChange}
                        />
                      </Fragment>
                    )}
                  </Fragment>
                )} */}
              {/* {!isTicketsAvailable() && renderAdditionalRegistrantsForm()} */}
              {!confirmMessage && isTicketsAvailable() && (
                <BlockStack gap={4} cardsLayout={true}>
                  {/* <div className="flex flex-row items-center">
                      Registrants tickets
                    </div> */}
                  {step === 1 && renderTickets()}
                  {step === 2 && <div>{renderAttendees()}</div>}
                </BlockStack>
              )}
              {/* {!confirmMessage && !showPaymentForm && (
                  <button
                    className="wp-element-button"
                    onClick={
                      getEventPrice() > 0
                        ? () => fetchClientSecret()
                        : isFreeRegistrationPossible()
                        ? () => freeRegistration()
                        : () => fetchClientSecret()
                    }
                  >
                    {getEventPrice() > 0
                      ? "Next"
                      : isFreeRegistrationPossible()
                      ? "Submit"
                      : "Next"}
                  </button>
                )} */}
            </BlockStack>
          )}
          {/* {secret && (
        <CheckoutProvider
          stripe={stripePromise}
          options={{ fetchClientSecret }}
        >
          <CheckoutForm />
        </CheckoutProvider>
      )} */}
          {/* {paymentElement && <div>{paymentElement}</div>} */}
          {!confirmMessage && (
            <form id="servv-payment-form">
              <div id="servv-payment-element"></div>
              {showPaymentForm && (
                <button
                  id="submit"
                  className="font-semibold text-lg px-4 py-3 mt-4 rounded shadow-md w-full transition-all duration-200 ease-in-out hover:contrast-115 disabled:opacity-50 disabled:cursor-default"
                  onClick={(e) => confirmPayment(e)}
                >
                  <div class="spinner hidden" id="spinner"></div>
                  {/* <span id="button-text">Pay now</span> */}
                </button>
              )}
              <div id="payment-message" class="hidden"></div>
            </form>
          )}
          {confirmMessage && !showRegistrationError && (
            <Fragment>
              {renderConfirmMessage()}
              {/* {meetingData.product.price > 0
                  ? "Payment successful!"
                  : "Registration successful!"} */}
            </Fragment>
          )}
          {showRegistrationError && (
            <div className="flex flex-row justify-between text-display-md pb-2 items-center">
              {registrationError}
            </div>
          )}
        </BlockStack>
      )}
      {/* recurring event */}
      {isRecurringEvent() && (
        <BlockStack gap={4} cardsLayout={true}>
          {
            <Fragment>
              {step === 1 && (
                <div className="flex flex-row justify-between items-end">
                  <h2>Select your tickets</h2>
                  <div className="flex flex-row gap-2">
                    {/* <CalendarDaysIcon className="w-4" /> */}
                    <OccurrencessDropdown
                      options={occurrencesList.map(
                        (occurrence) => occurrence.label
                      )}
                      selected={selectedOccurrence?.label}
                      onSelectChange={handleSelectOccurrenceChange}
                    />
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="flex flex-row justify-between items-end">
                  <h2>Registrant Details</h2>
                  <div className="flex flex-col gap-2">
                    <span className="text-[0.875rem] leading-[1.4] font-normal not-italic text-[#4A5565]">
                      {selectedOccurrence && selectedOccurrence?.label}
                    </span>
                    <span className="text-[0.875rem] leading-[1.4] font-normal not-italic text-[#4A5565]">
                      {additionalRegistrants.length > 1
                        ? additionalRegistrants.length + " attendees"
                        : additionalRegistrants.length + " attendee"}
                    </span>
                  </div>
                </div>
              )}
            </Fragment>
          }

          {selectedOccurrence && (
            <Fragment>
              {/* {!isTicketsAvailable() && (
                <div className="flex flex-row justify-between text-display-md border-b pb-2">
                  <div>{meetingData.meeting.topic}</div>
                  <div>
                    {getEventPrice()
                      ? getEventPrice()
                      : !isDonation()
                      ? "Free"
                      : ""}
                  </div>
                </div>
              )} */}
              {/* {!confirmMessage && isTicketsAvailable() && (
                  <BlockStack gap={4} cardsLayout={true}>
                    <div className="flex flex-row items-center">Tickets</div>
                    <SelectControl
                      options={ticketsOptions()}
                      selected={selectedTicket ? selectedTicket.name : ""}
                      onSelectChange={handleTicketSelect}
                    />
                  </BlockStack>
                )} */}
              <div className="flex flex-col items-center">
                {/* {!isTicketsAvailable() &&
                  !confirmMessage &&
                  selectedOccurrence &&
                  selectedOccurrence.product && (
                    <div className="flex flex-row items-center">
                      Number of registrants
                    </div>
                  )}
                {!isTicketsAvailable() && (
                  <div className="flex flex-row items-center gap-4">
                    {!confirmMessage &&
                      selectedOccurrence &&
                      selectedOccurrence.product && (
                        <button
                          className="font-semibold text-lg self-align-end rounded transition-all duration-200 ease-in-out justify-self-center hover:contrast-115 disabled:opacity-50 disabled:cursor-default"
                          onClick={() => removeRegistrant()}
                          disabled={additionalRegistrants.length === 0}
                        >
                          <MinusCircleIcon className="w-8 justify-self-center" />
                        </button>
                      )}
                    {!confirmMessage &&
                      selectedOccurrence &&
                      selectedOccurrence.product && (
                        <div className="font-semibold text-display-md">
                          {additionalRegistrants.length + 1}
                        </div>
                      )}
                    {!confirmMessage &&
                      selectedOccurrence &&
                      selectedOccurrence.product && (
                        <button
                          className="font-semibold text-lg self-align-end rounded transition-all duration-200 ease-in-out justify-self-center hover:contrast-115 disabled:opacity-50 disabled:cursor-default"
                          onClick={() => addRegistrant()}
                          disabled={
                            avaialbleRegistrantsCount() !== null &&
                            avaialbleRegistrantsCount() !== -1 &&
                            avaialbleRegistrantsCount() - 1 <= 0
                          }
                        >
                          <PlusCircleIcon className="w-8 justify-self-center" />
                        </button>
                      )}
                  </div>
                )} */}
              </div>
              <BlockStack gap={2} cardsLayout={true}>
                {errorMessage && (
                  <div className="section-description font-semibold text-error-700">
                    Please fill all requierd fields.
                  </div>
                )}
                {!isTicketsAvailable() && step === 1 && renderStandardTicket()}
                {!isTicketsAvailable() &&
                  step === 2 &&
                  renderAdditionalRegistrantsForm()}
                {/* {!isTicketsAvailable() && !confirmMessage && (
                  <Fragment>
                    <div className="section-description font-semibold">
                      Email
                    </div>
                    <InputFieldControl
                      value={email}
                      align="left"
                      type="text"
                      width={"100%"}
                      onChange={handleEmailChange}
                    />
                    <InlineStack gap={4}>
                      <BlockStack cardsLayout={true}>
                        <div className="section-description font-semibold">
                          First Name
                        </div>
                        <InputFieldControl
                          value={firstName}
                          align="left"
                          type="text"
                          width={"100%"}
                          onChange={handleFirstNameChange}
                        />
                      </BlockStack>
                      <BlockStack cardsLayout={true}>
                        <div className="section-description font-semibold">
                          Last Name
                        </div>
                        <InputFieldControl
                          value={lastName}
                          align="left"
                          type="text"
                          width={"100%"}
                          onChange={handleLastNameChange}
                        />
                      </BlockStack>
                    </InlineStack>
                    <CheckboxControl
                      label="Same for all"
                      checked={sameForAll}
                      onChange={() => setSameForAll(!sameForAll)}
                    />
                    {!isTicketsAvailable() && renderAdditionalRegistrantsForm()}
                  </Fragment>
                )} */}
                {!confirmMessage && isTicketsAvailable() && (
                  <BlockStack gap={4} cardsLayout={true}>
                    {/* <div className="flex flex-row items-center">
                        Registrants tickets
                      </div> */}
                    {step === 1 && renderTickets()}
                    {step === 2 && <div>{renderAttendees()}</div>}
                  </BlockStack>
                )}

                {/* {!confirmMessage && !showPaymentForm && (
                    <button
                      className="wp-element-button"
                      onClick={
                        getEventPrice() > 0
                          ? () => fetchClientSecret()
                          : isFreeRegistrationPossible()
                          ? () => freeRegistration()
                          : () => fetchClientSecret()
                      }
                    >
                      {getEventPrice() > 0
                        ? "Next"
                        : isFreeRegistrationPossible()
                        ? "Submit"
                        : "Next"}
                    </button>
                  )} */}
                {!confirmMessage && (
                  <form id="servv-payment-form">
                    <div id="servv-payment-element"></div>
                    {showPaymentForm && (
                      <button
                        id="submit"
                        className="font-sans font-semibold text-lg px-4 py-3 mt-4 rounded shadow-md w-full transition-all duration-200 ease-in-out hover:contrast-115 disabled:opacity-50 disabled:cursor-default"
                        onClick={(e) => confirmPayment(e)}
                      >
                        <div class="spinner hidden" id="spinner"></div>
                        {/* <span id="button-text">Pay now</span> */}
                      </button>
                    )}
                    <div id="payment-message" class="hidden"></div>
                  </form>
                )}
                {confirmMessage && !showRegistrationError && (
                  <Fragment>
                    {renderConfirmMessage()}
                    {/* {selectedOccurrence.product.price > 0
                        ? "Payment successful!"
                        : "Registration successful!"} */}
                  </Fragment>
                )}
                {showRegistrationError && (
                  <div className="flex flex-row justify-between text-display-md pb-2 items-center">
                    {registrationError}
                  </div>
                )}
              </BlockStack>
            </Fragment>
          )}
        </BlockStack>
      )}
      {additionalRegistrants.length > 0 && step === 1 && (
        <div className="flex flex-row justify-between w-full mt-4">
          <div className="flex flex-row gap-1">
            <span>
              {ticketsCount > 1
                ? ticketsCount + " tickets"
                : ticketsCount + " ticket"}
            </span>
            <span>·</span>
            <span>{"Total " + total}</span>
          </div>
          <button
            onClick={() => handleNextStep()}
            className="flex flex-row items-center justify-start gap-[8px] px-[12px] py-[8px]  bg-[#171717] text-[#FAFAFA] rounded-[0.425rem] text-[0.875rem]"
          >
            Proceed to checkout
          </button>
        </div>
      )}
      <br />
    </Fragment>
  );
};

domReady(() => {
  const element = document.getElementById("servv-on-product-widget");

  if (element) {
    const root = createRoot(element);
    root.render(<PaymentForm />);
  } else {
    console.error("Element #servv-on-product-widget not found.");
  }
});
