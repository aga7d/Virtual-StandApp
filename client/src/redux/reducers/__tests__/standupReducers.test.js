import { fetchStandups, createStandup } from "../../actions/types";
import standupReducers from "../standupReducers";

it("handles action of type FETCH_STANDUPS", () => {
  const action = {
    type: fetchStandups,
    payload: [
      { name: "Alex", project: "CarLa", workToday: "I did something" },
      { name: "Mike", project: "CarLa", workToday: "I did something" }
    ]
  };
  const newState = standupReducers([], action);
  expect(newState).toEqual([
    { name: "Alex", project: "CarLa", workToday: "I did something" },
    { name: "Mike", project: "CarLa", workToday: "I did something" }
  ]);
});
it("handles action of type CREATE_STANDUP", () => {
  const action = {
    type: createStandup,
    payload: { name: "Zoe", project: "Paper Man" }
  };
  const newState = standupReducers(
    [{ name: "Mike", project: "CarLa", workToday: "I did something" }],
    action
  );
  expect(newState).toEqual([
    { name: "Mike", project: "CarLa", workToday: "I did something" },
    { name: "Zoe", project: "Paper Man" }
  ]);
});
it("handles actions with unknown type", () => {
  const newState = standupReducers([], {});
  expect(newState).toEqual([]);
});
