/* global servvData */
import { useCallback, useEffect, useRef, useState } from "react";

// How long to wait before the NEXT check, indexed by how many checks have
// already come back. The schedule only ever advances on a RESPONSE: the next
// /shop/info is scheduled from the previous one's result, so a backend that
// takes 10s to answer is asked once every 10s + delay instead of leaving four
// overlapping requests pending, the way the fixed setInterval did.
const RETRY_DELAYS = [2000, 3000, 5000, 8000];

// The install runs on WP-Cron with up to five tries 5s apart, so it can
// legitimately take half a minute. Past this the screen stops spinning and
// offers the troubleshooting guide instead of polling forever — the browser
// cannot watch `servv_install_status` flip to "failed" on its own, because
// servvData is a snapshot taken when the page was printed.
const GIVE_UP_AFTER = 120000;

const delayFor = (checks) =>
  RETRY_DELAYS[Math.min(checks, RETRY_DELAYS.length) - 1];

const printedStatus = () => {
  if (servvData.install_status === "ok") return "ok";
  return servvData.install_status === "failed" ? "failed" : "checking";
};

// Waiting is only worth it while the printed status is neither final state:
// "ok" needs no watching, and "failed" will not change by itself.
const watchable = () =>
  servvData.install_status !== "ok" && servvData.install_status !== "failed";

// Watches the install through /shop/info. `check` is the settings read whose
// answer decides it: a shop with an id means the install reached Servv.
//
// Returns { status, retry }:
//   "ok"       – the shop answered, or the install was already complete
//   "checking" – a check is in flight, or the next one is scheduled
//   "timeout"  – gave up waiting
//   "failed"   – activation had already failed when this page was printed
//
// One check is always made, even when there is nothing to wait for, so the
// settings store is filled exactly once on load.
export default function useInstallStatus(check) {
  const [status, setStatus] = useState(printedStatus);
  const [run, setRun] = useState(0);
  const latestCheck = useRef(check);
  latestCheck.current = check;

  const retry = useCallback(() => {
    setStatus("checking");
    setRun((n) => n + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    let timer = null;
    const startedAt = Date.now();
    const keepWatching = watchable();

    const poll = async (count) => {
      let settings = null;
      try {
        settings = await latestCheck.current();
      } catch (error) {
        console.error("Unable to read the install status", error);
      }
      // The component went away, or retry() started a newer chain.
      if (cancelled) return;

      if (settings?.id) {
        setStatus("ok");
        return;
      }
      // Nothing more to wait for: report what the page was printed with.
      if (!keepWatching) {
        setStatus(printedStatus());
        return;
      }
      if (Date.now() - startedAt >= GIVE_UP_AFTER) {
        setStatus("timeout");
        return;
      }
      timer = setTimeout(() => poll(count + 1), delayFor(count));
    };

    poll(1);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [run]);

  return { status, retry };
}
