const mongoose = require("mongoose");
const formSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    application_date: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Forms", formSchema);
module.exports = Form;
