import { resourceVersion } from "./requestCache";
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

export const getFilters = async (current_plan) => {
  const version = resourceVersion("filters");
  const filterTypes = ["locations", "languages", "categories"];
  if (current_plan !== 1) {
    filterTypes.push("members");
  }

  const isDev = servvData.servv_plugin_mode === "development";
  const results = [];

  if (isDev) {
    for (const type of filterTypes) {
      const result = await getFilterType(type);
      results.push(result);
    }
  } else {
    const fetchPromises = filterTypes.map((type) => getFilterType(type));
    const parallelResults = await Promise.all(fetchPromises);
    results.push(...parallelResults);
  }

  if (version !== resourceVersion("filters")) return getFilters(current_plan);
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
