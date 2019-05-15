import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import teamMemberReducer from "./teamMemberReducers";
import standupReducer from "./standupReducers";
import dropDownMenuReducer from "./dropDownMenuReducer";
import projectReducer from "./projectReducers";
export default combineReducers({
  teamMembers: teamMemberReducer,
  standups: standupReducer,
  dropDownMenu: dropDownMenuReducer,
  projects: projectReducer,
  form: formReducer
});
