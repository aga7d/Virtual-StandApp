const mongoose = require("mongoose");
const { Schema } = mongoose;
const requiredStringValidator = [
  function(val) {
    let str = val.trim();
    return str.length > 0;
  }
];
const sizeStringValidator = [
  function(val) {
    let trimer = val.trim();
    return val.length < 50 && val.length > 0;
  }
];
const standUpSchema = new Schema({
  teamMemberId: {
    type: Schema.Types.ObjectId,
    ref: "teamMember"
  },
  teamMember: { type: String, required: true, validate: sizeStringValidator },
  project: { type: String, required: true, validate: requiredStringValidator },
  workYesterday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  workToday: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  impediment: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  createdOn: { type: Date, default: Date.now }
});
module.exports = mongoose.model("StandUp", standUpSchema);
