const express = require("express");

const videoCategoryController = require("../controllers/videoCategoryController");

const router = express.Router();

/**
 * TODO: add authentication wall...
 */

router.get("/", videoCategoryController.getAll);

router.post("/", videoCategoryController.post);

module.exports = router;
