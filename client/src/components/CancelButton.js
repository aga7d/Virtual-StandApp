import React from "react";
import { useLastLocation } from "react-router-last-location";
import history from "../history";

const CancelButton = () => {
  const lastLocation = useLastLocation();

  return (
    <button
      type="button"
      onClick={() => {
        if (lastLocation) {
          history.push(lastLocation.pathname);
        } else {
          history.push("/");
        }
      }}
      id="cancel-btn"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
