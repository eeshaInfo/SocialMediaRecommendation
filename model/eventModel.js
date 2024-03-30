"use strict";
/************* Modules ***********/
const MONGOOSE = require("mongoose");
const Schema = MONGOOSE.Schema;

/**************************************************
 ***************** EVENT MODEL ***************
 **************************************************/

 const eventsSchema = new Schema(
  {
    name: { type : String },
    active: { type: Boolean, default: true},
  },
  { versionKey: false, timestamps: true,collection: 'events' }
);

module.exports = MONGOOSE.model("events", eventsSchema);
