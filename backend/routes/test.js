
const express = require("express");
const router = express.Router();

// Backend communication test
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Frontend and Backend communication is ready!",
        data: {
            project: "Sports Scorer",
            backend: "Express.js"
        }
    });
});

module.exports = router;
