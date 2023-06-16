// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "sqldatabase",
//   password: "Aishwary26@",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqldatabase", "root", "Aishwary26@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
