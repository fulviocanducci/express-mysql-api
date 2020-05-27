const { query, save } = require("../connection");

module.exports = {
  get: function (req, res) {
    query("SELECT * FROM todos", function (error, result, field) {
      console.log(result);
      if (error) {
        res.json(error);
      } else {
        res.json(result);
      }
    });
  },
  post: function (req, res) {
    const params = req.body;
    console.log(params);
    save(
      "INSERT INTO todos(`description`,`done`) VALUES(?,?)",
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
};
