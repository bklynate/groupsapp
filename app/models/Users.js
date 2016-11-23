// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 

// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

var sqlUser = sequelize.define("User", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: Sequelize.STRING,
  facebook_id: Sequelize.STRING,
  google_id: Sequelize.STRING,
  twitter_id: Sequelize.STRING,
  linkedin_id: Sequelize.STRING,
  f_name: Sequelize.STRING,
  l_name: Sequelize.STRING,
  email: Sequelize.STRING,
  created_timestamp: Sequelize.STRING
},
{
    timestamps: false
});

// Sync with DB
sqlUser.sync();

module.exports = sqlUser;
