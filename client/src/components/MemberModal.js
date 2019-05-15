import React from "react";
import ReactDOM from "react-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import history from "../history";
import CancelButton from "./CancelButton";
import { createMemberAction } from "../redux/actions";

class MemberModal extends React.Component {
  onSubmit = formVal => {
    this.props.createMemberAction(formVal);
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
          <h3>Add New Team Member</h3>
          <form
            className="form-create"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field name="name" component={this.renderInput} label="name:" />
            <div className="btn">
              <CancelButton />
              <button id="create-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}
const formValidate = (formVal, { teamMembers }) => {
  const error = {};
  if (!formVal.name) {
    error.name = "You must enter a Team Member name";
  }
  if (teamMembers.indexOf(formVal.name) !== -1) {
    error.name = "A user with that name already exists";
  }

  return error;
};
const mapDispatchToProps = {
  createMemberAction
};
const mapStateToProps = state => {
  return { teamMembers: state.teamMembers.map(obj => obj.name) };
};

const formWrapper = reduxForm({
  form: "createMember",
  validate: formValidate
})(MemberModal);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(formWrapper);
