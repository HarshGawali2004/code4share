# Architecture Overview

- **Frontend**: React PWA with CodeMirror 6 and Yjs CRDT.
- **Data Exchange**: WebRTC peer-to-peer data channels for zero-latency, private collaboration.
- **Fallback**: In-memory WebSocket relay on Node server when direct P2P connection fails.
- **Backend**: Node.js server handling signaling, room lifecycle, and billing webhooks.
- **Data & Auth**: Supabase Auth for paid accounts, PostgreSQL for plans and metadata.
- **Storage**: Ephemeral 48-hour storage for subscriber saves; live code is never persisted.
