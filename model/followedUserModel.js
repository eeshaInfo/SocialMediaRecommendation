"use strict";
/************* Modules ***********/
const MONGOOSE = require("mongoose");
const Schema = MONGOOSE.Schema;

/**************************************************
 ***************** FOLLOWED USER MODEL ************
 **************************************************/

 const followedUsersSchema = new Schema(
  {
    user_id: { type : Schema.Types.ObjectId,  ref: 'Users' },
    followed_user_id:  { type : Schema.Types.ObjectId,  ref: 'Users' },
    
  },
  { versionKey: false, timestamps: true,collection: 'followedUsers' }
);

module.exports = MONGOOSE.model("followedUsers", followedUsersSchema);
