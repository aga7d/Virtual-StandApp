import { fetchTeamMember, createMember } from "../actions/types";

const teamMemberReducer = (state = [], action) => {
  switch (action.type) {
    case createMember:
      return [...state, action.payload];
    case fetchTeamMember:
      return action.payload;
    default:
      return state;
  }
};
export default teamMemberReducer;
