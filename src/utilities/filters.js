import { resourceVersion } from "./requestCache";
import { needsMembersFilter } from "./planCapabilities";
import axios from "./adminApi";

export const getFilterType = async (type) => {
  try {
    const reqURL = `/wp-json/servv-plugin/v1/filters/${type}`;
    const response = await axios.get(reqURL, {
      headers: { "X-WP-Nonce": servvData.nonce },
    });

    if (response.status === 200) {
      return { type, data: response.data };
    }
  } catch (error) {
    console.error(`Error fetching ${type}:`, error);
    return { type, data: null };
  }
};

export const createLocation = async (name) => {
  const response = await axios.post(
    "/wp-json/servv-plugin/v1/filters/locations",
    { name },
    { headers: { "X-WP-Nonce": servvData.nonce } },
  );
  return response.data;
};

export const getFilters = async (settings) => {
  const version = resourceVersion("filters");
  const filterTypes = ["locations", "languages", "categories"];
  // Members are a paid-plan kind, so a free shop's read would answer nothing
  // its filter screens can show.
  if (needsMembersFilter(settings)) {
    filterTypes.push("members");
  }

  // Asked for together: the request queue decides how many actually travel at
  // once, which is what the development-only serial path used to guard.
  const results = await Promise.all(
    filterTypes.map((type) => getFilterType(type)),
  );

  if (version !== resourceVersion("filters")) return getFilters(settings);
  const filters = {};
  for (const result of results) {
    if (result?.data) {
      filters[result.type] = result.data;
    }
  }

  return filters;
};

// Creates or updates one filter value. The four filter forms differ only in the
// collection they write to and the shape of `data`; priority is always numeric.
export const saveFilter = async (type, data, existingId) => {
  const base = `/wp-json/servv-plugin/v1/filters/${type}`;

  const response = await axios({
    method: existingId ? "PATCH" : "POST",
    url: existingId ? `${base}/${existingId}` : base,
    headers: { "X-WP-Nonce": servvData.nonce },
    data: { ...data, priority: Number.parseInt(data.priority) || 0 },
  });

  return response.data;
};
