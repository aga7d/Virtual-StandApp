import { fetchTeamMember, createMember } from "../actions/types";

const teamMemberReducer = (state = [], action) => {
  switch (action.type) {
    case createMember:
      return [...state, action.payload.data];
    case fetchTeamMember:
      return action.payload.data;
    default:
      return state;
  }
};
export default teamMemberReducer;
