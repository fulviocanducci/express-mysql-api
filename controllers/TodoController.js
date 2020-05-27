const { query, save } = require("../connection");

module.exports = {
  get: function (req, res) {
    query("SELECT * FROM todos", function (error, result, field) {
      if (error) {
        res.json(error);
      } else {
        res.json(result);
      }
    });
  },
  post: function (req, res) {
    const params = req.body;
    save("INSERT INTO todos SET ?", params, function (error, result, field) {
      if (error) {
        res.json(error);
      } else {
        res.json(result);
      }
    });
  },
  put: function (req, res) {
    const { description, done } = req.body;
    const { id } = req.params;
    const params = [description, done, id];
    save(
      "UPDATE todos SET description = ?, done = ? WHERE id=?",
      params,
      function (error, result, field) {
        if (error) {
          res.json(error);
        } else {
          res.json(result);
        }
      }
    );
  },
  delete: function (req, res) {
    const { id } = req.params;
    const params = [id];
    save("DELETE FROM todos WHERE id=?", params, function (
      error,
      result,
      field
    ) {
      if (error) {
        res.json(error);
      } else {
        res.json(result);
      }
    });
  },
};
