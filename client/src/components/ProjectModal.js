import React from "react";
import ReactDOM from "react-dom";
import { Field, reduxForm } from "redux-form";
import history from "../history";
import { connect } from "react-redux";
import CancelButton from "./CancelButton";
import { createProjectAction } from "../redux/actions";

class ProjectModal extends React.Component {
  onSubmit = formVal => {
    this.props.createProjectAction(formVal);
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
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="error-form">{error}</div>;
    }
  };
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
          <h3>Create New Project</h3>
          <form
            className="form-create"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name="name"
              component={this.renderInput}
              label="Project name:"
            />
            <Field
              name="description"
              component={this.renderTextArea}
              label="Project description:"
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
const formValidate = (formVal, { project }) => {
  const error = {};
  if (!formVal.name) {
    error.name = "You must enter a project name";
  }
  if (project.indexOf(formVal.name) !== -1) {
    error.name = "A project with that name already exists";
  }
  if (!formVal.description) {
    error.description = "You must enter a description";
  }

  return error;
};
const mapDispatchToProps = {
  createProjectAction
};
const mapStateToProps = state => {
  return {
    project: state.projects.map(obj => obj.name)
  };
};

const formWrapper = reduxForm({
  form: "createProject",
  validate: formValidate
})(ProjectModal);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(formWrapper);
