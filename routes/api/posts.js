const express = require("express");
const router = express.Router();

//  @route GET request api/posts/test
//  @desc Tests post route
//  @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

module.exports = router;
