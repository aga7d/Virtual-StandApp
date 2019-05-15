import React from "react";
import { connect } from "react-redux";
import { fetchTeamMemberAction, fetchProjectsAction } from "../redux/actions";
import StandupModal from "./StandupModal";
import ProjectModal from "./ProjectModal";
import MemberModal from "./MemberModal";
class Create extends React.Component {
  componentDidMount() {
    this.props.fetchTeamMemberAction();
    this.props.fetchProjectsAction();
  }

  renderHelper() {
    if (this.props.projects.length && this.props.teamMembers.length) {
      const location = this.props.history.location.pathname;
      let component;
      if (location === "/standup/create") {
        component = <StandupModal />;
      } else if (location === "/member/create") {
        component = <MemberModal />;
      } else if (location === "/project/create") {
        component = <ProjectModal />;
      }
      return <div className="create-standup">{component}</div>;
    }
    return <div className="loading-create" />;
  }
  render() {
    return this.renderHelper();
  }
}
const mapDispatchToProps = {
  fetchTeamMemberAction,
  fetchProjectsAction
};
const mapStateToProps = state => {
  return { teamMembers: state.teamMembers, projects: state.projects };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);
