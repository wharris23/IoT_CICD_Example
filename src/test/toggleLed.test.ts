import { describe, it, expect } from "vitest";
import { toggleLed } from "/Users/weh/IoT_CICD_Example/src/toggleLed";

describe("toggleLed", () => {
  it("should turn off when currently on", () => {
    expect(toggleLed(true)).toBe(false);
  });

  it("should turn on when currently off", () => {
    expect(toggleLed(false)).toBe(true);
  });
});