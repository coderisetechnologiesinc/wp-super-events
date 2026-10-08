import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { debounce } from "./debounce";

beforeEach(() => vi.useFakeTimers());
afterEach(() => vi.useRealTimers());

describe("debounce", () => {
  it("runs once with the last arguments", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 300);

    debounced("y");
    debounced("yo");
    debounced("yoga");
    vi.advanceTimersByTime(300);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("yoga");
  });

  it("cancel prevents the pending call", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 300);

    debounced("yoga");
    debounced.cancel();
    vi.advanceTimersByTime(600);

    expect(fn).not.toHaveBeenCalled();
  });

  it("flush runs immediately and drops the pending call", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 300);

    debounced("yo");
    debounced.flush("yoga");
    vi.advanceTimersByTime(600);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("yoga");
  });
});
