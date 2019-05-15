import { dropDownMenu } from "../actions/types";
const dropDownMenuReducer = (state = false, action) => {
  switch (action.type) {
    case dropDownMenu:
      return action.payload;
    default:
      return state;
  }
};
export default dropDownMenuReducer;
