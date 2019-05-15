import React from "react";
import ReactDOM from "react-dom";
import { Field, reduxForm } from "redux-form";
import Select from "react-select";
import history from "../history";
import { connect } from "react-redux";
import CancelButton from "./CancelButton";
import {
  createStandupAction,
  fetchTeamMemberAction,
  fetchProjectsAction
} from "../redux/actions";

class StandupModal extends React.Component {
  componentDidMount() {
    this.props.fetchTeamMemberAction();
    this.props.fetchProjectsAction();
  }
  onSubmit = formVal => {
    formVal = {
      ...formVal,
      project: formVal.project.value.name,
      teamMember: formVal.teamMember.value.name,
      teamMemberId: formVal.teamMember.value._id
    };
    this.props.createStandupAction(formVal);
  };
  renderInput = formProp => {
    return (
      <div>
        <label>{formProp.label}</label>
        <input type="text" {...formProp.input} autoComplete="off" />
        <div>{this.renderError(formProp.meta)}</div>
      </div>
    );
  };
  renderTextArea = formProp => {
    return (
      <div>
        <label>{formProp.label}</label>
        <textarea {...formProp.input} autoComplete="off" />
        <div>{this.renderError(formProp.meta)}</div>
      </div>
    );
  };

  renderDropDown = ({ input }) => {
    const option = input.name;
    const defaultValue =
      option === "teamMember" ? (
        <>
          Select Team Member <i className="fas fa-user" />
        </>
      ) : (
        <>
          Select project <i className="fas fa-tasks" />
        </>
      );
    const options = this.props[option].map(element => ({
      label: element.name,
      value: element
    }));
    return (
      <div className="select-area">
        <div className="select-bar">
          <Select
            name={option}
            options={options}
            onChange={input.onChange}
            onBlur={() => input.onBlur(input.value)}
            placeholder={defaultValue}
            value={input.value}
            isSearchable
          />
        </div>
        {option === "teamMember" ? (
          <button
            onClick={() => {
              history.push("/member/create");
            }}
            className="add-btn "
          >
            <i className="fas fa-user-plus" />
          </button>
        ) : (
          <button
            onClick={() => {
              history.push("/project/create");
            }}
            className="add-btn"
          >
            {" "}
            <i className="fas fa-plus" />
          </button>
        )}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="error-form">{error}</div>;
    }
  }
  render() {
    return ReactDOM.createPortal(
      <div
        onClick={() => {
          history.push("/");
        }}
        className="modal"
      >
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className="form-window"
        >
          <h3>Create new StandUp</h3>
          <form
            className="form-create"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name="teamMember"
              component={this.renderDropDown}
              label="Team Member:"
            />
            <Field
              name="project"
              component={this.renderDropDown}
              label="Project name:"
            />
            <Field
              name="workYesterday"
              component={this.renderTextArea}
              label="Work done Yesterday:"
            />
            <Field
              name="workToday"
              component={this.renderTextArea}
              label="Work for Today:"
            />
            <Field
              name="impediment"
              component={this.renderTextArea}
              label="Impediments:"
            />
            <div className="btn">
              <CancelButton />
              <button id="create-btn" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}
const formValidate = formVal => {
  const error = {};
  if (!formVal.teamMember) {
    error.teamMember = "You must enter your name";
  }
  if (!formVal.project) {
    error.project = "You must enter a project name";
  }
  if (!formVal.workYesterday) {
    error.workYesterday = "This fild cannot be empty";
  }
  if (!formVal.workToday) {
    error.workToday = "This fild cannot be empty";
  }
  if (!formVal.impediment) {
    error.impediment =
      'This fild cannot be empty. Enter "none" if you do not have any';
  }
  return error;
};
const mapDispatchToProps = {
  createStandupAction,
  fetchTeamMemberAction,
  fetchProjectsAction
};
const mapStateToProps = state => {
  return { teamMember: state.teamMembers, project: state.projects };
};

const connectWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(StandupModal);
export default reduxForm({ form: "createStandup", validate: formValidate })(
  connectWrapper
);
