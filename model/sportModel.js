"use strict";
/************* Modules ***********/
const MONGOOSE = require("mongoose");
const Schema = MONGOOSE.Schema;

/**************************************************
 ***************** SPORTS MODEL ***************
 **************************************************/

 const sportsSchema = new Schema(
  {
    name: { type : String },
    active: { type: Boolean, default: true},
  },
  { versionKey: false, timestamps: true,collection: 'sports' }
);

module.exports = MONGOOSE.model("sports", sportsSchema);
