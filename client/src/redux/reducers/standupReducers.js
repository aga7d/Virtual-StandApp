import { fetchStandups, createStandup } from "../actions/types";

const standupReducer = (state = [], action) => {
  switch (action.type) {
    case createStandup:
      return [...state, action.payload];
    case fetchStandups:
      return action.payload;
    default:
      return state;
  }
};
export default standupReducer;
