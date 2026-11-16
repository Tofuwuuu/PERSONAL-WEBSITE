import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

globalThis.IntersectionObserver ??= class {
  observe() {}
  disconnect() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
} as unknown as typeof IntersectionObserver;

afterEach(cleanup);
