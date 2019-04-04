import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("does not explode", () => {
    // This will fail if component throws
    const output = shallow(<App />);
    expect(output.exists()).toBe(true);
  });
});
