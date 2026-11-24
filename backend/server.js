
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Import API routes
const healthRoutes = require("./routes/health");
const testRoutes = require("./routes/test");

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/health", healthRoutes);
app.use("/api/test", testRoutes);

// Serve frontend
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", "index.html")
    );
});

// Serve public assets
app.use(
    "/public",
    express.static(path.join(__dirname, "..", "public"))
);

// SEO files
app.get("/robots.txt", (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", "robots.txt")
    );
});

app.get("/sitemap.xml", (req, res) => {
    res.sendFile(
        path.join(__dirname, "..", "sitemap.xml")
    );
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found"
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error("Backend Error:", err);

    res.status(err.status || 500).json({
        success: false,
        message: err.status ? err.message : "Internal Server Error"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Sports Scorer Backend running on port ${PORT}`);
});
