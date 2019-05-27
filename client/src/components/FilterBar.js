import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { fetchStandupAction } from "../redux/actions";

class FilterBar extends React.Component {
  state = { selected: "" };
  componentDidUpdate() {
    if (this.state.selected.value !== undefined) {
      this.props.fetchStandupAction(this.state.selected.value);
    }
  }
  renderOptions() {
    const options = this.props.teamMembers.map(member => ({
      label: member.name,
      value: member._id
    }));
    options.unshift({ label: "Show All", value: "" });
    return options;
  }
  render() {
    const { selected } = this.state;
    return (
      <Select
        classNamePrefix="list"
        onChange={value => {
          this.setState({ selected: value });
        }}
        options={this.renderOptions()}
        placeholder={
          <>
            Filter by Team Member <i className="fas fa-user" />
          </>
        }
        isSearchable
        value={selected}
      />
    );
  }
}
const mapStateToProps = state => {
  return { teamMembers: state.teamMembers };
};
const mapDispatchToProps = {
  fetchStandupAction
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBar);
