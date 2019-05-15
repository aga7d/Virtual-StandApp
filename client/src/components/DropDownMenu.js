import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FilterBar from "./FilterBar";
import history from "../history";
const DropDownMenu = props => {
  return props.menu ? (
    <div className="dropdown-nav">
      <Link to="/standup">
        All Standups <i className="far fa-clipboard" />
      </Link>
      <Link to="/standup/create">
        Create new Standup <i className="fas fa-pencil-alt" />
      </Link>
      {history.location.pathname === "/standup" ? (
        <div className="filter-bar-drop">
          {" "}
          <FilterBar />{" "}
        </div>
      ) : null}
    </div>
  ) : null;
};

const mapStateToProps = state => {
  return { menu: state.dropDownMenu };
};
export default connect(mapStateToProps)(DropDownMenu);
