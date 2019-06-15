import dropDownMenuReducer from "../dropDownMenuReducer";
import { dropDownMenu } from "../../actions/types";

it("handles action of type DROP_DOWN_MENU", () => {
  const action = {
    type: dropDownMenu,
    payload: true
  };
  const newState = dropDownMenuReducer(false, action);
  expect(newState).toEqual(true);
});
it("handles actions with unknown type", () => {
  const newState = dropDownMenuReducer(false, {});
  expect(newState).toEqual(false);
});
