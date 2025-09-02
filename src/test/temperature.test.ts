import { describe, it, expect } from "vitest";
import { isOverheating } from "../temperature";

describe("isOverheating", () => {
  it("returns true if temp is above 70", () => {
    expect(isOverheating(75)).toBe(true);
  });

  it("returns false if temp is 70 or below", () => {
    expect(isOverheating(70)).toBe(false);
  });
});
