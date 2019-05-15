const mongoose = require("mongoose");
const { Schema } = mongoose;
const sizeStringValidator = [
  function(val) {
    let trimmedVal = val.trim();
    return trimmedVal.length > 0 && trimmedVal.length < 50;
  },
  "Value should be between 1 and 50 characters long"
];
const teamMemberSchema = new Schema({
  name: { type: String, required: true, validate: sizeStringValidator }
});
module.exports = mongoose.model("TeamMember", teamMemberSchema);
