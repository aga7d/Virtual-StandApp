const mongoose = require("mongoose");
const { Schema } = mongoose;
const sizeStringValidator = [
  function(val) {
    let trimmedVal = val.trim();
    return trimmedVal.length > 0 && trimmedVal.length < 50;
  },
  "value should be between 1 and 50 characters long"
];
const requiredStringValidator = [
  function(val) {
    let trimmedVal = val.trim();
    return trimmedVal.length > 0;
  }
];

const projectSchema = new Schema({
  name: { type: String, required: true, validate: sizeStringValidator },
  description: {
    type: String,
    required: true,
    validate: requiredStringValidator
  },
  isActive: { type: Boolean, default: true }
});
module.exports = mongoose.model("Project", projectSchema);
