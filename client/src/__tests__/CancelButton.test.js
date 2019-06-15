import React from "react";
import { shallow } from "enzyme";
import CancelButton from "../components/CancelButton";
import history from "../history";

it("changes pathname from /random to /", () => {
  const wrapper = shallow(<CancelButton />);
  history.push("/random");
  wrapper.find("button").simulate("click", null);
  expect(history.location.pathname).toEqual("/");
});
