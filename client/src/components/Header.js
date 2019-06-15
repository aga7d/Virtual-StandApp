import React from "react";
import { Link } from "react-router-dom";
import Media from "react-media";
import { connect } from "react-redux";
import FilterBar from "./FilterBar";
import { dropDownMenuAction } from "../redux/actions";
import history from "../history";

class Header extends React.Component {
  componentDidMount() {
    history.listen(location => {
      this.props.dropDownMenuAction(false);
    });
  }
  render() {
    return (
      <nav className="navigation">
        <Link className="logo" to="/">
          Virtual StandApp
        </Link>
        <Media query="(min-width:860px)">
          {matches => {
            if (matches) {
              this.props.dropDownMenuAction(false);
              return (
                <>
                  <Link className="nav-links" to="/standup">
                    All Standups
                  </Link>
                  {history.location.pathname === "/standup" ? (
                    <div className="filter-bar">
                      <FilterBar />
                    </div>
                  ) : null}
                  <Link className="nav-links" to="/standup/create">
                    Create StandUp
                  </Link>
                </>
              );
            } else {
              return (
                <button
                  aria-label="dropdown-Menu"
                  className="dropdown-btn"
                  onClick={() => {
                    this.props.dropDownMenuAction(!this.props.menu);
                  }}
                >
                  <div />
                  <div />
                  <div />
                </button>
              );
            }
          }}
        </Media>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return { menu: state.dropDownMenu };
};

const mapDispatchToProps = {
  dropDownMenuAction
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
