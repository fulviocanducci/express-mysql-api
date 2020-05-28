const { queryAsync, saveAsync, prepareQueryAsync } = require("../connection");

require("../utils");

module.exports = {
  get: async (req, res) => {
    try {
      const result = await queryAsync("SELECT * FROM todos");
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  post: async (req, res) => {
    const params = req.body;
    try {
      const result = await saveAsync("INSERT INTO todos SET ?", params);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  put: async (req, res) => {
    const { description, done } = req.body;
    const { id } = req.params;
    const params = [description, done, id];
    try {
      const result = await saveAsync(
        "UPDATE todos SET description = ?, done = ? WHERE id=?",
        params
      );
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const params = [id];
    try {
      const result = await prepareQueryAsync(
        "DELETE FROM todos WHERE id=?",
        params
      );
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    const params = [id];
    try {
      const result = await prepareQueryAsync(
        "SELECT * FROM todos WHERE id=?",
        params
      );
      res.json(result.firstOrDefault());
    } catch (error) {
      res.json(error);
    }
  },
};
