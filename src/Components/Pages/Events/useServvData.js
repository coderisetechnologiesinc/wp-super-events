import axios from "../../../utilities/adminApi";
import apiFetch from "../../../utilities/adminApiFetch";
import { useServvStore } from "../../../store/useServvStore";
import moment from "moment-timezone";
const getNonceHeaders = () => {
  if (typeof servvData !== "undefined" && servvData.nonce) {
    return { "X-WP-Nonce": servvData.nonce };
  }
  return {};
};

export const useServvData = () => {
  const { filtersList: storeFilters } = useServvStore();

  /**
   * SETTINGS
   */
  const fetchSettings = async ({ adminSection, settingsData }) => {
    let getSettingsResponse;

    if (!adminSection) {
      try {
        getSettingsResponse = await axios.get(
          "/wp-json/servv-plugin/v1/shop/info",
          { headers: getNonceHeaders() }
        );
      } catch (e) {
        const err = new Error("Settings fetch failed");
        err.original = e;
        err.status = e?.response?.status;
        throw err;
      }
    } else {
      getSettingsResponse = { status: 200, data: settingsData };
    }

    if (getSettingsResponse && getSettingsResponse.status === 200) {
      const data = getSettingsResponse.data;
      return {
        ...data,
        settings: {
          ...data.settings,
          admin_dashboard: data?.settings?.admin_dashboard
            ? JSON.parse(data.settings.admin_dashboard)
            : {},
        },
      };
    }

    return null;
  };

  const fetchCalendarAccount = async () => {
    const res = await axios.get("/wp-json/servv-plugin/v1/calendar/account", {
      headers: getNonceHeaders(),
    });
    if (res && res.status === 200) return res.data;
    return null;
  };

  const fetchZoomAccount = async () => {
    const res = await axios.get("/wp-json/servv-plugin/v1/zoom/account", {
      headers: getNonceHeaders(),
    });
    if (res && res.status === 200) return res.data;
    return null;
  };

  const fetchStripeAccount = async () => {
    const res = await axios.get("/wp-json/servv-plugin/v1/stripe/account", {
      headers: getNonceHeaders(),
    });
    if (res && res.status === 200) return res.data;
    return null;
  };

  const fetchGmailAccount = async () => {
    const res = await axios.get("/wp-json/servv-plugin/v1/gmail/account", {
      headers: getNonceHeaders(),
    });
    if (res && res.status === 200) return res.data;
    return null;
  };

  const fetchFiltersByType = async (type) => {
    const res = await axios.get(`/wp-json/servv-plugin/v1/filters/${type}`, {
      headers: getNonceHeaders(),
    });
    if (res && res.status === 200) {
      return res.data;
    }
    return [];
  };

  const fetchAllFilters = async ({ filtersProp, settings }) => {
    if (filtersProp) {
      return filtersProp;
    }

    if (storeFilters && Object.keys(storeFilters).length > 0) {
      return storeFilters;
    }

    const result = {};
    result.locations = await fetchFiltersByType("locations");
    result.languages = await fetchFiltersByType("languages");
    result.categories = await fetchFiltersByType("categories");

    if (settings && settings.current_plan?.id !== 1) {
      result.members = await fetchFiltersByType("members");
    }

    return result;
  };

  const fetchEventTickets = async ({ postId, occurrenceId }) => {
    let reqURL = `/wp-json/servv-plugin/v1/event/${postId}/tickets`;
    if (occurrenceId) {
      reqURL += `?occurrence_id=${occurrenceId}`;
    }

    const res = await axios.get(reqURL, { headers: getNonceHeaders() });
    if (res && res.status === 200) {
      return res.data;
    }
    return [];
  };

  const fetchEventData = async ({ postIDProp, occurrenceId, adminSection }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = postIDProp ? postIDProp : urlParams.get("post");

    let postStatus = "admin";
    if (!adminSection) {
      const { getEditedPostAttribute } = wp.data.select("core/editor");
      postStatus = getEditedPostAttribute("status");
    }

    if (!postId) {
      return {
        postId: null,
        status: postStatus,
        attributes: null,
        hasRecurrenceTab: false,
        notFoundError: null,
      };
    }

    let url = `/servv-plugin/v1/event/${postId}`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }

    let res = null;
    let notFoundError = null;

    if (postStatus === "publish" || postStatus === "admin") {
      try {
        res = await apiFetch({ path: url });
      } catch (e) {
        notFoundError = e;
      }
    }

    if (!res || res.code === 404) {
      return {
        postId,
        status: postStatus,
        attributes: null,
        hasRecurrenceTab: false,
        notFoundError,
      };
    }

    let startTime = null;

    if (res.meeting.provider === "offline") {
      if (
        res.meeting.providers_type === 1 ||
        (res.meeting.providers_type === 2 && occurrenceId)
      ) {
        startTime = moment(res.meeting.start_time)
          .tz(res.meeting.timezone)
          .format("YYYY-MM-DDTHH:mm:ss:SSS")
          .replace(/:\d\d\d$/, "");
      } else if (res.meeting.providers_type === 2 && !occurrenceId) {
        startTime = moment(res.meeting.occurrences[0].start_time)
          .tz(res.meeting.timezone)
          .format("YYYY-MM-DDTHH:mm:ss:SSS")
          .replace(/:\d\d\d$/, "");
      }
    }

    if (res.meeting.provider === "zoom") {
      if (
        res.meeting.providers_type === 2 ||
        (res.meeting.providers_type === 8 && occurrenceId)
      ) {
        startTime = moment(res.meeting.start_time)
          .tz(res.meeting.timezone)
          .format("YYYY-MM-DDTHH:mm:ss:SSS")
          .replace(/:\d\d\d$/, "");
      } else if (res.meeting.providers_type === 8 && !occurrenceId) {
        startTime = moment(res.meeting.occurrences[0].start_time)
          .tz(res.meeting.timezone)
          .format("YYYY-MM-DDTHH:mm:ss:SSS")
          .replace(/:\d\d\d$/, "");
      }
    }

    const hasRecurrenceTab = !!(res.meeting.recurrence && !occurrenceId);

    let eventRecurrence = null;
    if (res.meeting.recurrence && res.meeting.recurrence.type) {
      eventRecurrence = res.meeting.recurrence;
    }

    const attributes = {
      meeting: {
        eventType: res.meeting.providers_type,
        title: res.meeting.topic,
        location: res.meeting.provider,
        startTime: startTime,
        duration: res.meeting.duration,
        timezone: res.meeting.timezone,
        recurrence: eventRecurrence,
      },
      product: {
        price: res.product.price,
        quantity: res.product.current_quantity,
        current_quantity: res.product.current_quantity,
      },
      notifications: {
        google_calendar: res.notifications.google_calendar,
        disable_emails: res.notifications.disable_emails,
      },
      types: { ...res.types },
      custom_fields: { ...res.custom_fields },
    };

    if (res.tickets) {
      attributes.tickets = res.tickets;
    }

    if (!res.product.current_quantity) {
      delete attributes.product.current_quantity;
    }

    return {
      postId,
      status: postStatus,
      attributes,
      hasRecurrenceTab,
      notFoundError,
    };
  };

  /**
   * REGISTRANTS
   */
  const fetchEventRegistrants = async ({ postID, page = 1, occurrenceId }) => {
    let url = `/servv-plugin/v1/event/${postID}/registrants?page_size=10&page=${page}`;
    if (occurrenceId) {
      url += `&occurrence_id=${occurrenceId}`;
    }

    let res = null;
    try {
      res = await apiFetch({ path: url });
    } catch (e) {
      return { registrants: [], pagination: { pageNumber: 1, pageCount: 1 } };
    }

    if (!res) {
      return { registrants: [], pagination: { pageNumber: 1, pageCount: 1 } };
    }

    const registrantsForShow =
      res.registrants
        ?.map((registrant) => {
          if (!registrant) return null;
          return {
            id: registrant.id,
            firstName: registrant.first_name,
            lastName: registrant.last_name,
            email: registrant.email,
          };
        })
        .filter(Boolean) || [];

    return {
      registrants: registrantsForShow,
      pagination: {
        pageNumber: res.page_number,
        pageCount: res.page_count,
      },
    };
  };

  const deleteRegistrant = async ({ postID, registrantID }) => {
    return await apiFetch({
      path: `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`,
      method: "DELETE",
    });
  };

  const resendRegistrantNotification = async ({
    postID,
    registrantID,
    occurrenceId,
  }) => {
    let url = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }

    return await apiFetch({
      path: url,
      method: "POST",
    });
  };

  const resendAllNotifications = async ({ postID, occurrenceId }) => {
    let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;
    if (occurrenceId) {
      url += `?occurrence_id=${occurrenceId}`;
    }

    const res = await axios({
      url,
      method: "POST",
      headers: getNonceHeaders(),
    });

    return res;
  };

  return {
    fetchSettings,
    fetchCalendarAccount,
    fetchZoomAccount,
    fetchStripeAccount,
    fetchGmailAccount,
    fetchFiltersByType,
    fetchAllFilters,
    fetchEventTickets,
    fetchEventData,
    fetchEventRegistrants,
    deleteRegistrant,
    resendRegistrantNotification,
    resendAllNotifications,
  };
};
