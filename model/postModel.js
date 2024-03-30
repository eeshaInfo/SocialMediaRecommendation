"use strict";
/************* Modules ***********/
const MONGOOSE = require("mongoose");
const Schema = MONGOOSE.Schema;

/**************************************************
 ***************** POSTS MODEL ***************
 **************************************************/

 const postSchema = new Schema(
  {
    text: { type : String },
    user_id: { type : Schema.Types.ObjectId },
    sport_id:  { type : Schema.Types.ObjectId },
    event_id:  { type : Schema.Types.ObjectId },
    comments: { type : Number },
    likes: { type : Number }
  },
  { versionKey: false, timestamps: true,collection: 'posts' }
);

module.exports = MONGOOSE.model("posts", postSchema);
