import { fetchProjects, createProject } from "../actions/types";

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case fetchProjects:
      return action.payload.data;
    case createProject:
      return [...state, action.payload.data];
    default:
      return state;
  }
};
export default projectReducer;
