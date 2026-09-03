import { jest, describe, expect, test } from "@jest/globals";
import { hasReviewedState } from "./main";

jest.mock("@actions/core", () => ({
  getInput: () => "",
}));

jest.mock("@actions/github");

describe("hasReviewedState", () => {
  test.each(["CHANGES_REQUESTED", "COMMENTED"])(
    "returns true when state is %p",
    (state) => {
      expect(hasReviewedState(state)).toBe(true);
    },
  );
});
