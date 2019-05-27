import { fetchProjects, createProject } from "../actions/types";

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case fetchProjects:
      return action.payload;
    case createProject:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default projectReducer;
