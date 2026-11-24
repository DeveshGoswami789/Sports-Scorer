const express = require("express");
const router = express.Router();

// Health Check API
router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        status: "online",
        project: "Sports Scorer Backend",
        timestamp: new Date().toISOString()
    });
});

module.exports = router;