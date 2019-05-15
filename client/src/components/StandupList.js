import React from "react";
import { connect } from "react-redux";
import { fetchTeamMemberAction, fetchStandupAction } from "../redux/actions";
import Spinner from "./Spinner";
class StandupList extends React.Component {
  componentDidMount() {
    this.props.fetchTeamMemberAction();
    this.props.fetchStandupAction();
  }
  renderList() {
    return this.props.standups.map(standup => (
      <div className="standup-container" key={standup._id}>
        <div className="sub-container">
          <span className="date">
            {new Date(standup.createdOn).toUTCString().replace("GMT", "")}
          </span>
        </div>
        <div className="sub-container">
          <span className="header">Author:</span>{" "}
          <span className="content">{standup.teamMember}</span>
        </div>
        <div className="sub-container">
          <span className="header">Project:</span>{" "}
          <span className="content">{standup.project}</span>{" "}
        </div>
        <div className="sub-container">
          <span className="header">Yesterday: </span>
          <span className="content">{standup.workYesterday}</span>
        </div>
        <div className="sub-container">
          <span className="header">Today: </span>
          <span className="content">{standup.workToday}</span>
        </div>
        <div className="sub-container">
          <span className="header">Impediment: </span>
          <span className="content">{standup.impediment}</span>
        </div>
      </div>
    ));
  }
  render() {
    if (this.props.standups.length) {
      return <div className="main-standup-container">{this.renderList()}</div>;
    }
    return <Spinner />;
  }
}
const mapDispatchToProps = {
  fetchTeamMemberAction,
  fetchStandupAction
};
const mapStateToProps = state => {
  return { standups: state.standups };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandupList);
