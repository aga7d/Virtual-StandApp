import { fetchTeamMember, createMember } from "../../actions/types";
import teamMemberReducers from "../teamMemberReducers";

it("handles action of type TEAM_MEMBER", () => {
  const action = {
    type: fetchTeamMember,
    payload: [{ name: "Dastin" }, { name: "Mike" }]
  };
  const newState = teamMemberReducers([], action);
  expect(newState).toEqual([{ name: "Dastin" }, { name: "Mike" }]);
});
it("handles action of type CREATE_MEMBER", () => {
  const action = {
    type: createMember,
    payload: { name: "Lukas" }
  };
  const newState = teamMemberReducers([{ name: "Eleven" }], action);
  expect(newState).toEqual([{ name: "Eleven" }, { name: "Lukas" }]);
});
