import moxios from "moxios";
import { fetchTeamMember, fetchProjects, fetchStandups } from "../types";
import {
  fetchTeamMemberAction,
  fetchProjectsAction,
  fetchStandupAction
} from "../index";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([thunk]);

describe("Async actions", () => {
  const init = (path, response) => {
    moxios.install();
    moxios.stubRequest(path, {
      status: 200,
      responseText: response
    });
  };
  afterEach(() => {
    moxios.uninstall();
  });
  describe("fetchTeamMemberAction", () => {
    beforeEach(() => {
      init("/api/teams", [{ name: "Alex" }]);
    });
    it(" should dispatch a correct action with correct type and payload", done => {
      moxios.wait(() => {
        const store = mockStore({});
        const expectedPayload = [
          {
            type: fetchTeamMember,
            payload: [{ name: "Alex" }]
          }
        ];
        return store.dispatch(fetchTeamMemberAction()).then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedPayload);
          done();
        });
      });
    });
  });
  describe("fetchProjectsAction", () => {
    beforeEach(() => {
      init("/api/projects", [{ name: "Avocado", description: "simple app" }]);
    });
    it(" should dispatch a correct action with correct type and payload", done => {
      moxios.wait(() => {
        const store = mockStore({});
        const expectedPayload = [
          {
            type: fetchProjects,
            payload: [{ name: "Avocado", description: "simple app" }]
          }
        ];
        return store.dispatch(fetchProjectsAction()).then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedPayload);
          done();
        });
      });
    });
  });
  describe("fetchStandupAction", () => {
    beforeEach(() => {
      init("/api/standups", [
        { name: "Alex", project: "CarLa", workToday: "nothing" }
      ]);
    });
    it(" should dispatch a correct action with correct type and payload", done => {
      moxios.wait(() => {
        const store = mockStore({});
        const expectedPayload = [
          {
            type: fetchStandups,
            payload: [{ name: "Alex", project: "CarLa", workToday: "nothing" }]
          }
        ];
        return store.dispatch(fetchStandupAction()).then(() => {
          const actions = store.getActions();
          expect(actions).toEqual(expectedPayload);
          done();
        });
      });
    });
  });
});
