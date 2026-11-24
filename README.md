# code4share

Real-time code and text sharing platform over WebRTC with in-memory relay fallback.

## Project Structure

- `frontend/`: React (Vite) PWA with CodeMirror 6 and Yjs.
- `backend/`: Node.js signaling, fallback relay, plan checks, and billing webhooks.
- `packages/shared`: Shared constants, validation, and room utilities.
- `supabase/`: Database migrations, seed data, and storage configuration.
- `infra/`: Docker and TURN deployment configuration.
- `docs/`: Architecture, decisions, and project documentation.

## Getting Started

Prerequisites: Node.js 20+, npm 10+.

1. Copy `.env.example` to `.env`.
2. Dependencies and setup instructions will be configured in future steps.
