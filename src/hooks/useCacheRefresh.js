import { useEffect, useRef } from "react";
import { subscribeToInvalidation } from "../utilities/requestCache";

// Refresh mounted read views only. Draft forms deliberately do not subscribe.
export default function useCacheRefresh(resources, refresh) {
  const latest = useRef(refresh);
  latest.current = refresh;
  const key = resources.join(",");
  useEffect(
    () =>
      subscribeToInvalidation((changed) => {
        if (!changed.some((resource) => key.split(",").includes(resource)))
          return;
        Promise.resolve()
          .then(() => latest.current(changed))
          .catch((error) => {
            console.error("Unable to refresh cached data", error);
          });
      }),
    [key],
  );
}
