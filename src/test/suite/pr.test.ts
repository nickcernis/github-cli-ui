import * as assert from "assert";

import { githubPRSampleData, expectedPRItems } from "./data";
import { getListItems } from "../../pr/pickers";

suite("PR data processing", () => {
  test("GitHub data is processed to sorted PRItems", () => {
    assert.deepStrictEqual(getListItems(githubPRSampleData), expectedPRItems);
  });
});
