import axios from "./adminApi";
export const createTicket = async ({
  postId,
  occurrenceId = null,
  token,
  ticket,
}) => {
  try {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets`;
    if (occurrenceId) {
      requestURL += `?occurrence_id=${occurrenceId}`;
    }
    const response = await axios({
      method: "POST",
      url: requestURL,
      headers: { "X-WP-Nonce": token },
      data: { ...ticket },
    });
    return response;
  } catch (error) {
    console.error("Error creating ticket:", error);
    return null;
  }
};

// The editable fields of a ticket; the API ignores anything else on the object.
const ticketPayload = (ticket) => ({
  name: ticket.name,
  quantity: ticket.quantity,
  price: ticket.price,
  is_donation: ticket.is_donation,
  start_datetime: ticket.start_datetime,
  end_datetime: ticket.end_datetime,
});

const patchTicket = async ({ postId, token, ticket }) =>
  axios({
    method: "PATCH",
    url: `/wp-json/servv-plugin/v1/event/${postId}/tickets/${ticket.id}`,
    headers: { "X-WP-Nonce": token },
    data: ticketPayload(ticket),
  });

export const updateTicket = async ({ postId, token, ticket }) => {
  try {
    return await patchTicket({ postId, token, ticket });
  } catch (error) {
    console.error("Error on ticket update:", error);
    return null;
  }
};

export const deleteTicket = async ({
  postId,
  occurrenceId = null,
  ticketId,
  token,
}) => {
  try {
    let requestURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets/${ticketId}`;
    if (occurrenceId) {
      requestURL += `?occurrence_id=${occurrenceId}`;
    }
    const response = await axios({
      method: "DELETE",
      url: requestURL,
      headers: { "X-WP-Nonce": token },
    });
    return response;
  } catch (error) {
    console.error("Error deleting ticket:", error);
    return null;
  }
};

export const multipleTicketsCreate = async ({
  postId,
  occurrenceId = null,
  token,
  tickets,
}) => {
  try {
    const responses = await Promise.all(
      tickets.map((ticket) =>
        axios({
          method: "POST",
          url: `/wp-json/servv-plugin/v1/event/${postId}/tickets`,
          headers: { "X-WP-Nonce": token },
          data: { ticket },
        })
      )
    );
    return responses;
  } catch (error) {
    console.error("Error creating one or more tickets:", error);
    return null;
  }
};

export const multipleTicketsUpdate = async ({ postId, token, tickets }) => {
  const responses = [];

  try {
    for (const ticket of tickets) {
      responses.push(await patchTicket({ postId, token, ticket }));
    }

    return responses;
  } catch (error) {
    console.error("Error updating one or more tickets:", error);
    return null;
  }
};
