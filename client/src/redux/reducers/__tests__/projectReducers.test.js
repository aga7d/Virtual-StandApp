import projectReducers from "../projectReducers";
import { fetchProjects, createProject } from "../../actions/types";

it("handles action of type FETCH_PROJECTS", () => {
  const action = {
    type: fetchProjects,
    payload: [
      { name: "abc", description: "some project" },
      { name: "test project", description: "something" }
    ]
  };
  const newState = projectReducers([], action);
  expect(newState).toEqual([
    { name: "abc", description: "some project" },
    { name: "test project", description: "something" }
  ]);
});
it("handles action of type CREATE_PROJECT", () => {
  const action = {
    type: createProject,
    payload: { name: "new project", description: "something new" }
  };
  const newState = projectReducers(
    [
      { name: "abc", description: "some project" },
      { name: "test project", description: "something" }
    ],
    action
  );
  expect(newState).toEqual([
    { name: "abc", description: "some project" },
    { name: "test project", description: "something" },
    { name: "new project", description: "something new" }
  ]);
});
it("handles actions with unknown type", () => {
  const newState = projectReducers([], {});
  expect(newState).toEqual([]);
});
