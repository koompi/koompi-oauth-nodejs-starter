import jwt from "jsonwebtoken";
import { config } from "../config/env";

export interface JWTPayload {
    userId: string;
}

export const generateToken = (payload: JWTPayload): string => {
    return jwt.sign(payload, config.jwtSecret, {
        expiresIn: config.jwtExpiration,
    });
};

export const verifyToken = (token: string): JWTPayload => {
    try {
        const decoded = jwt.verify(token, config.jwtSecret) as JWTPayload;
        return decoded;
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
};

export const decodeToken = (token: string): JWTPayload | null => {
    try {
        const decoded = jwt.decode(token) as JWTPayload;
        return decoded;
    } catch (error) {
        return null;
    }
};
