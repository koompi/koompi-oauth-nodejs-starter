# KOOMPI OAuth Node.js Starter

A Node.js starter template for KOOMPI OAuth authentication with TypeScript, Express, MongoDB, and JWT.

## Features

-   KOOMPI OAuth 2.0 integration with PKCE
-   JWT authentication
-   TypeScript + Express
-   MongoDB with Mongoose
-   Hot reload with nodemon + tsx
-   CORS enabled

## Prerequisites

-   Node.js (v18+)
-   MongoDB
-   KOOMPI OAuth credentials from [dash.koompi.org](https://dash.koompi.org)

## Quick Start

### 1. Install

```bash
npm install
```

### 2. Setup Environment

Copy `.env.example` to `.env` and configure:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/koompi-oauth
JWT_SECRET=your-secret-key
JWT_EXPIRATION=24h

KOOMPI_CLIENT_ID=your-client-id
KOOMPI_CLIENT_SECRET=your-client-secret
KOOMPI_REDIRECT_URI=http://localhost:3000/api/oauth/callback
```

### 3. Run

```bash
npm run dev
```

Server runs at `http://localhost:3000`

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── middleware/     # Auth middleware
├── models/         # Database models
├── routes/         # API routes
├── types/          # TypeScript types
└── utils/          # Utilities
```

## API Endpoints

### OAuth

-   `GET /api/oauth/login` - Start OAuth flow
-   `GET /api/oauth/callback` - OAuth callback

### User

-   `GET /api/auth/me` - Get current user (requires JWT)

## OAuth Flow

1. User visits `/api/oauth/login`
2. Redirects to KOOMPI OAuth
3. User authorizes
4. KOOMPI redirects to `/api/oauth/callback`
5. Server exchanges code for token
6. Server creates/updates user in DB
7. Returns JWT to client

## User Model

```typescript
{
  userId: string;         // KOOMPI user ID (unique)
  name?: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  profile?: string;
  email?: string;         // Requires scope
  phone?: string;         // Requires scope
  telegramId?: number;    // Requires scope
  walletAddress?: string; // Requires scope
}
```

## Frontend Example

```javascript
// Login
window.location.href = "http://localhost:3000/api/oauth/login";

// Get profile
const token = localStorage.getItem("token");
const response = await fetch("http://localhost:3000/api/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
});
```

## Scripts

```bash
npm run dev    # Development with hot reload
npm run build  # Build for production
npm start      # Run production build
```

## License

ISC
