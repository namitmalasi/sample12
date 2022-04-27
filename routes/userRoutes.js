const express = require("express");
const { getUser, getPost } = require("../controllers/mainController");

const router = express.Router();

router.route("/users").get(getUser);
router.route("/posts").get(getPost);

module.exports = router;
