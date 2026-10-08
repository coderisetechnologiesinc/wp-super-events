import axios from "./adminApi";
import apiFetch from "./adminApiFetch";

/* ------------------ helpers ------------------ */

// Shared registrant shape. The paged and token-paged fetches used to map their
// own subsets of this; callers read only the fields they need.
const mapRegistrant = (registrant) => {
  if (!registrant) return null;

  return {
    id: registrant.id,
    firstName: registrant.first_name,
    lastName: registrant.last_name,
    email: registrant.email,
    status: registrant.status,
    joinUrl: registrant.join_url,
    createdAt: registrant.created_datetime,
  };
};

const mapRegistrants = (res) =>
  res.registrants?.map(mapRegistrant).filter(Boolean) || [];

const withOccurrence = (url, occurrenceId) =>
  occurrenceId ? `${url}&occurrence_id=${occurrenceId}` : url;

const getNonceHeaders = () => {
  if (typeof servvData !== "undefined" && servvData.nonce) {
    return { "X-WP-Nonce": servvData.nonce };
  }
  return {};
};

/* ------------------ fetch registrants ------------------ */

export const fetchRegistrants = async ({
  postID,
  page = 1,
  occurrenceId = null,
}) => {
  const url = withOccurrence(
    `/servv-plugin/v1/event/${postID}/registrants?page_size=20&page=${page}`,
    occurrenceId,
  );

  try {
    const res = await apiFetch({ path: url });

    return {
      registrants: mapRegistrants(res),
      pagination: {
        pageNumber: res.page_number,
        pageCount: res.page_count,
      },
    };
  } catch (e) {
    return {
      registrants: [],
      pagination: { pageNumber: 1, pageCount: 1 },
    };
  }
};

export const fetchRegistrantsWithToken = async ({
  postID,
  next_page_token = null,
  occurrenceId = null,
  pageSize = 20,
}) => {
  let url = `/servv-plugin/v1/event/${postID}/registrants?page_size=${pageSize}`;

  if (next_page_token) {
    url += `&next_page_token=${encodeURIComponent(next_page_token)}`;
  }

  url = withOccurrence(url, occurrenceId);

  try {
    const res = await apiFetch({ path: url });
    const registrants = mapRegistrants(res);

    return {
      registrants,
      pagination: {
        nextPageToken: res.next_page_token || null,
        totalRecords: res.total_records ?? registrants.length,
        pageSize: res.page_size ?? pageSize,
      },
    };
  } catch (e) {
    console.error("fetchRegistrantsWithToken failed", e);

    return {
      registrants: [],
      pagination: {
        nextPageToken: null,
        totalRecords: 0,
        pageSize,
      },
    };
  }
};

/* ------------------ delete registrant ------------------ */

export const deleteRegistrant = async ({
  postID,
  registrantID,
  occurrenceId = null,
}) => {
  let path = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}`;

  if (occurrenceId) {
    path += `?occurrence_id=${occurrenceId}`;
  }

  return apiFetch({
    path,
    method: "DELETE",
  });
};

/* ------------------ resend one ------------------ */

export const resendRegistrantNotification = async ({
  postID,
  registrantID,
  occurrenceId = null,
}) => {
  let path = `/servv-plugin/v1/event/${postID}/registrants/${registrantID}/resend`;

  if (occurrenceId) {
    path += `?occurrence_id=${occurrenceId}`;
  }

  return apiFetch({
    path,
    method: "POST",
  });
};

/* ------------------ resend all ------------------ */

export const resendAllNotifications = async ({
  postID,
  occurrenceId = null,
}) => {
  let url = `/wp-json/servv-plugin/v1/event/${postID}/registrants/resend`;

  if (occurrenceId) {
    url += `?occurrence_id=${occurrenceId}`;
  }

  return axios({
    url,
    method: "POST",
    headers: getNonceHeaders(),
  });
};
