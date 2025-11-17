import dotenv from "dotenv";

dotenv.config({ debug: false });

export const config = {
    port: process.env.PORT || 3000,
    mongodbURI:
        process.env.MONGODB_URI || "mongodb://localhost:27017/koompi-oauth",
    jwtSecret: process.env.JWT_SECRET || "your-secret-key-change-in-production",
    jwtExpiration: process.env.JWT_EXPIRATION || "365d",
    nodeEnv: process.env.NODE_ENV || "development",

    // Koompi OAuth Configuration
    koompi: {
        clientId: process.env.KOOMPI_CLIENT_ID || "",
        clientSecret: process.env.KOOMPI_CLIENT_SECRET || "",
        redirectUri:
            process.env.KOOMPI_REDIRECT_URI ||
            "http://localhost:3000/api/oauth/callback",
    },
};
