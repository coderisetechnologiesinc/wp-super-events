import axios from "./adminApi";

const headers = () => ({ "X-WP-Nonce": servvData.nonce });

export const fetchBookings = async ({ page = 1, filters = {} } = {}) => {
  const {
    dates = {},
    selectedInterval,
    searchString = "",
    price = {},
    selectedProvider = { offline: true, zoom: true },
  } = filters;

  let params = [];

  if (dates.startDate && dates.endDate) {
    params.push(`from_datetime=${dates.startDate}`);
    params.push(`to_datetime=${dates.endDate}`);
  }

  if (searchString.length > 0)
    params.push(`search=${encodeURIComponent(searchString)}`);
  if (price.from) params.push(`from_price=${price.from}`);
  if (price.to) params.push(`to_price=${price.to}`);

  if (selectedProvider && !selectedProvider.offline && !selectedProvider.zoom) {
    throw new Error("Please select at least one event type.");
  }

  if (selectedProvider && selectedProvider.offline !== selectedProvider.zoom) {
    params.push(
      `event_provider=${selectedProvider.offline ? "offline" : "zoom"}`,
    );
  }

  params.push(`page=${page}`, `page_size=10`);

  const response = await axios.get(
    `/wp-json/servv-plugin/v1/bookings?${params.join("&")}`,
    { headers: headers() },
  );
  return response.data;
};

export const refundBooking = async (id) => {
  const response = await axios.post(
    `/wp-json/servv-plugin/v1/bookings/${id}/refund`,
    null,
    { headers: headers() },
  );
  return response;
};

export const cancelBooking = async (id) => {
  const response = await axios.post(
    `/wp-json/servv-plugin/v1/bookings/${id}/cancel`,
    null,
    { headers: headers() },
  );
  return response;
};

export const resendBookingConfirmation = async (eventId, registrantId, occurrenceId = null) => {
  let url = `/wp-json/servv-plugin/v1/event/${eventId}/registrants/${registrantId}/resend`;
  if (occurrenceId) url += `?occurrence_id=${occurrenceId}`;
  const response = await axios.post(url, null, { headers: headers() });
  return response;
};
