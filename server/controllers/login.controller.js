var loginService = require("../services/login.service");

exports.postuser = async function (req, res) {
    try {
      var data = req.body.data;
      var query = await loginService.postuser(data);
      return res
        .status(200)
        .json({ status: 200, data: query, message: "successfully" });
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  };