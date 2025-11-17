import express, { Application, Request, Response } from "express";
import cors from "cors";
import { config } from "./config/env";
import { connectDB } from "./config/database";
import oauthRoutes from "./routes/oauthRoutes";
import userRoutes from "./routes/userRoutes";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/health", (_req: Request, res: Response) => {
    res.status(200).json({ status: "OK", message: "Server is running" });
});

// API routes
app.get("/", (_req: Request, res: Response) => {
    res.json({
        message: "KOOMPI OAuth API",
        version: "1.0.0",
    });
});

// OAuth routes
app.use("/api/oauth", oauthRoutes);

// User routes
app.use("/api/auth", userRoutes);

// Start server
const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        // Start listening
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
            console.log(`Environment: ${config.nodeEnv}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();

export default app;
