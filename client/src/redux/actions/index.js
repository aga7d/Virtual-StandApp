import {
  fetchTeamMember,
  createMember,
  fetchStandups,
  dropDownMenu,
  createStandup,
  fetchProjects,
  createProject
} from "./types";
import axios from "axios";
import history from "../../history";

export const fetchTeamMemberAction = () => async dispatch => {
  const teamMembers = await axios.get("/api/teams");
  dispatch({ type: fetchTeamMember, payload: teamMembers.data });
};

export const createMemberAction = formVal => async dispatch => {
  const result = await axios.post("/api/teams", JSON.stringify(formVal), {
    headers: { "Content-Type": "application/json" }
  });
  dispatch({ type: createMember, payload: result.data });
  history.push("/standup/create");
};

export const fetchStandupAction = (id = "") => async dispatch => {
  let result;
  if (id) {
    result = await axios.get(`/api/standups/${id}`);
  } else {
    result = await axios.get("/api/standups");
  }
  dispatch({ type: fetchStandups, payload: result.data });
};

export const dropDownMenuAction = bool => {
  return { type: dropDownMenu, payload: bool };
};

export const createStandupAction = formValues => async dispatch => {
  const result = await axios.post("/api/standups", JSON.stringify(formValues), {
    headers: { "Content-Type": "application/json" }
  });
  dispatch({ type: createStandup, payload: result.data });
  history.push("/standup");
};
export const fetchProjectsAction = usehistory => async dispatch => {
  const result = await axios.get("/api/projects");
  dispatch({ type: fetchProjects, payload: result.data });
};

export const createProjectAction = formValues => async dispatch => {
  const result = await axios.post("/api/projects", JSON.stringify(formValues), {
    headers: { "Content-Type": "application/json" }
  });
  dispatch({ type: createProject, payload: result.data });
  history.push("/standup/create");
};
