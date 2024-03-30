"use strict";
/************* Modules ***********/
const MONGOOSE = require("mongoose");
const Schema = MONGOOSE.Schema;

/**************************************************
 ***************** USER MODEL ***************
 **************************************************/

 const userSchema = new Schema(
  {
    username: { type : String },
    email: { type : String }
  },
  { versionKey: false, timestamps: true,collection: 'users' }
);

module.exports = MONGOOSE.model("users", userSchema);
