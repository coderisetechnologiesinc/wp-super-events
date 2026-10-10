// Caps how many admin requests are in flight at once.
//
// Every read here is a proxy: WordPress forwards it to the Servv API, which
// validates the signature by calling back into this same site. So a request
// holds one PHP worker while it waits, and answering it needs a second worker
// free for the callback. A screen that asks for N things at once therefore
// needs N+1 workers, and a pool smaller than that deadlocks rather than
// queues — no worker is left for the callback, the API times out, and every
// request comes back 401. Measured against a 5-worker pool: 4 parallel reads
// pass, 5 fail outright.
//
// Pool size is the host's business and not knowable from here (shared hosting
// commonly runs 5-20), so the fan-out is kept below any realistic one. Nothing
// is dropped — the queue only decides when each request leaves.
const DEFAULT_LIMIT = 3;

const limit = () => {
  const configured = Number(window.servvData?.requestConcurrency);
  return Number.isInteger(configured) && configured > 0
    ? configured
    : DEFAULT_LIMIT;
};

let active = 0;
const waiting = [];

const pump = () => {
  while (active < limit() && waiting.length) {
    waiting.shift()();
  }
};

// Runs `task` once a slot is free. Rejections pass through untouched: the
// queue decides scheduling, never whether a request succeeded.
export const runQueued = (task) =>
  new Promise((resolve, reject) => {
    waiting.push(() => {
      active += 1;
      Promise.resolve()
        .then(task)
        .then(resolve, reject)
        .finally(() => {
          active -= 1;
          pump();
        });
    });
    pump();
  });
