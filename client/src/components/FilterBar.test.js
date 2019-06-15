import React from "react";
import { mount } from "enzyme";
import Root from "../Root";
import Select from "react-select";
import FilterBar from "../components/FilterBar";
let wrapper;
let initialState;
beforeEach(() => {
  initialState = {
    teamMembers: [
      { name: "Magda", _id: "888" },
      { name: "Jan", _id: "555" },
      { name: "Ida", _id: "444" }
    ]
  };
  afterEach(() => {
    wrapper.unmount();
  });
  wrapper = mount(
    <Root initialState={initialState}>
      <FilterBar />
    </Root>
  );
  wrapper.find(".list__dropdown-indicator").simulate("mouseDown", {
    button: 0
  });
});
it("renders four options", () => {
  expect(wrapper.find(".list__option").length).toEqual(4);
});
it("shows teamMembers and calls setState on change", () => {
  wrapper
    .find(".list__option")
    .last()
    .simulate("click", null);
  wrapper.update();
  expect(wrapper.find(Select).props().value).toEqual({
    label: "Ida",
    value: "444"
  });
});
