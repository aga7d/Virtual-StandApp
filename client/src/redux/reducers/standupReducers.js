import { fetchStandups, createStandup } from "../actions/types";

const standupReducer = (state = [], action) => {
  switch (action.type) {
    case createStandup:
      return [...state, action.payload.data];
    case fetchStandups:
      return action.payload.data;
    default:
      return state;
  }
};
export default standupReducer;
