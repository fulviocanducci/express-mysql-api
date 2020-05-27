const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  database: "db",
  password: "senha",
  user: "root",
});

const query = (sql, callBack) => {
  return connection.query(sql, callBack);
};

const save = (sql, values, callBack) => {
  return connection.query(sql, values, callBack);
};

module.exports = {
  connection,
  query,
  save,
};
