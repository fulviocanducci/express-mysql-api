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

const queryAsync = (sql) => {
  return new Promise((resolve, reject) => {
    query(sql, (error, result, field) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const prepareQuery = (sql, values, callBack) => {
  return connection.query(sql, values, callBack);
};

const prepareQueryAsync = (sql, values) => {
  return new Promise((resolve, reject) => {
    prepareQuery(sql, values, (error, result, field) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const save = (sql, values, callBack) => {
  return connection.query(sql, values, callBack);
};

const saveAsync = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, result, field) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  connection,
  query,
  queryAsync,
  prepareQueryAsync,
  prepareQuery,
  save,
  saveAsync,
};
