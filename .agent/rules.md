# code4share: Agent Rules

Read this file before every task. These rules apply to every prompt, every session and every agent working in this repository. If a prompt conflicts with a rule here, stop and ask before continuing.

---

## 1. Project in One Minute

**code4share** is a real-time code and text sharing platform.

- Two or more people connect with a private session code or a QR scan, then edit one document together, live, on desktop and mobile.
- Sessions run peer-to-peer (WebRTC) with an in-memory relay fallback.
- **Live session content is never stored** on the server, in logs, or in the database.
- Sharing is **free and needs no login**. Login and a subscription unlock extra features only.
- Paid features: download to device, 48-hour server save (auto-deleted), higher limits and larger files.
- Only **text and code files** can be uploaded or shared.
- AI features are a **future phase**. Do not build them until asked.

Source of truth for scope: `docs/code4share_Project_Plan.md`. If the plan and a prompt disagree, ask.

---

## 2. Repository Map

```text
code4share/
  frontend/          React (Vite) PWA: editor, session UI, QR, upload, account prompts
  backend/           Node.js: signaling, relay, rooms, plan checks, billing webhooks
  packages/shared/   Code used by both sides: constants, room-code format, validators
  supabase/          Migrations, seed, config notes (database, auth, storage)
  infra/             Docker files and TURN notes
  docs/              Plan, architecture, decisions, privacy policy draft
  .github/workflows/ CI
  .agent/            This file and other agent instructions
```

Rules for the map:

1. `frontend/` and `backend/` sit in the project root. There is **no `apps/` folder**. Never create one.
2. Anything used by both frontend and backend goes in `packages/shared/`, not copied into each.
3. Do not create new top-level folders without asking.
4. Do not rename or move folders without asking. If a rename is requested, update every path that refers to the old name (README, docs, CI, Docker, comments, imports).

---

## 3. Non-Negotiable Rules

These are the product promises. Breaking one is a bug, even if the code works.

### 3.1 Privacy of live sessions
- Never write live session content (document text, edits, pasted code, uploaded file contents) to the database, files, caches or logs.
- Never log message bodies. Log only safe metadata (room id prefix, event type, counts, error codes).
- The relay fallback forwards data **in memory only** and never persists it.
- Room data lives in an in-memory map and disappears when the room closes or expires.
- Do not add analytics or error-reporting tools that capture document content.

### 3.2 Free for everyone, login only at the moment of need
- A guest (no login) must be able to create a room, join a room, edit live, join by QR, and upload a text or code file.
- Never put a login wall before sharing.
- Ask for login only when a user taps a paid feature (Download, Save). The session must stay connected while they log in.
- Login should use a popup or a redirect that returns to the **same room**.

### 3.3 Uploads: text and code only
- Accept only text and code files, from an allow-list of extensions plus a **content check** (reject files containing binary data such as null bytes, even if the name looks fine).
- Read files in the browser. The file contents go into the shared editor and sync to peers. They do not go to the server.
- Treat all uploaded content as plain text. Never execute it. Never render uploaded HTML.
- Show this exact message for rejected files: `Only text and code files are supported.`
- Ask the user whether to **replace or append** to the current content.
- The room owner can restrict who may upload.
- A size cap applies, read from plan configuration and lower on mobile.

### 3.4 Plan limits live in configuration
- Limits (session minutes, participants, sessions per day, file size, saved files) are stored in the `plans` table and read at runtime.
- Never hard-code a limit, price or plan name in application logic. Put defaults in `packages/shared/` constants only if they are fallbacks.
- Guest limits use a soft device id plus IP. They are a nudge, not a hard lock. Account limits are the reliable ones.

### 3.5 Secrets and keys
- The Supabase **service role key** and all payment secrets are used **only in `backend/`**. They must never appear in `frontend/`, in `packages/shared/`, in logs, in commits or in docs.
- The frontend may use only the public anon key and public URLs (`VITE_` variables).
- Never commit a real `.env`. Only `.env.example` with placeholder names.
- If a secret appears in the repo or in output, stop, tell the user, and recommend rotating it.

### 3.6 Supabase and Row Level Security
- Every table has Row Level Security enabled.
- Users can read and write only their own rows. Anything broader needs a written reason in the migration.
- Storage buckets are private by default. Saved files are reachable only by their owner through signed URLs.
- Saved files get an `expires_at` of `created_at + 48 hours` and are removed by a scheduled cleanup (database rows and the stored file). Confirm the exact scheduling method against current Supabase documentation before implementing.
- Migrations are plain SQL files in `supabase/migrations/`, one change per file, never edited after being applied. Add a new file instead.

### 3.7 AI is opt-in (future phase)
- When AI is built: off by default per room, visible notice to every participant when on, content sent only when a user clicks an AI action, never in the background.
- Keep AI code in `frontend/src/features/ai/` and `backend/src/ai/` only.
- Do not add an AI provider, key or dependency before the AI phase is requested.

---

## 4. Tech Stack and Conventions

| Area | Choice |
|---|---|
| Frontend | React with Vite, installable PWA |
| Editor | CodeMirror 6 (chosen for mobile) |
| Sync | Yjs |
| Real-time | WebRTC data channels, in-memory relay fallback, STUN and TURN |
| Backend | Node.js, ES modules |
| Database, auth, storage | Supabase (PostgreSQL, Supabase Auth, Supabase Storage) |
| Payments | Razorpay (India), Stripe (international) |
| Language | JavaScript (ES modules). No TypeScript unless the user asks. |

### Naming and style
- Folders and files: `kebab-case`. React components: `PascalCase.jsx`.
- Functions and variables: `camelCase`. Constants: `UPPER_SNAKE_CASE`.
- One component per file. One responsibility per module.
- Prefer small files (under about 150 lines). Split before a file grows past that.
- Comments explain **why**, not what. Remove commented-out code.
- No dead code, no unused exports, no placeholder text left behind after a feature is built.
- Use `async/await`, not nested callbacks. Handle every error path with a clear message.
- Do not add a new library when a few lines of code or an existing dependency will do.

### Dependencies
- Do not install or add a dependency unless the task needs it. State which one and why before adding.
- Prefer well-maintained packages with a clear license and recent releases.
- Pin to an exact version. Avoid brand-new releases (less than two weeks old).
- Never install packages globally, and never run install scripts from unknown sources.
- When a prompt says "no installation", do not run any install command and do not create `node_modules` or lock files.

---

## 5. Real-Time Architecture Rules

1. **Signaling** (`backend/src/signaling/`) only relays small setup messages (offer, answer, ice) and room join events. It never reads or stores document content.
2. **Rooms** (`backend/src/rooms/`) are in-memory. Each room has a random code of at least 8 characters from a secure random source, an expiry, and a participant limit read from configuration.
3. **Relay** (`backend/src/relay/`) is a fallback for blocked networks and large rooms. In memory only, encrypted transport, no persistence.
4. **Sync** uses Yjs. Send small updates, never the whole document on each keystroke. Batch rapid changes.
5. **Reconnection**: on a dropped connection, retry automatically, restart ICE if needed, and resync from peers. A reconnect must never wipe the user's content.
6. **Reload behavior**: if one person reloads while another is connected, the document resyncs from the peer. If everyone leaves, content is gone unless the user kept a local autosave or a paid save.
7. **Local autosave** stays in the user's own browser (IndexedDB), never on the server, with a clear-on-exit option for shared computers.
8. Use the default reliable, ordered data channel for document data.
9. All traffic uses HTTPS and WSS in production.
10. Room codes are never logged in full and are never reused after expiry.

---

## 6. Performance Rules

- Speed target: a session should start in seconds, and an edit should appear on a peer's screen within tens of milliseconds on a normal connection.
- No line limit for documents. Use a virtualized editor and chunked loading so large files do not freeze phones.
- Compress very large pastes before sending.
- Keep the initial frontend bundle small. Lazy-load heavy parts (QR scanner, account and billing pages).
- Do not block the main thread with heavy parsing. Move file reading and checks off the critical path where possible.
- Measure before optimizing. If you claim a speed-up, say how you measured it.

---

## 7. Mobile and PWA Rules

- Mobile is a first-class target, not an afterthought. Every screen must work at a 360 px width.
- Touch targets are at least 44 px. No hover-only controls.
- The QR flow works end to end: host shows a QR code, phone scans, opens the join link, joins automatically.
- The app is an installable PWA: manifest, icons, service worker for app shell caching only. The service worker must **not** cache document content.
- Respect safe areas on phones and keep text readable without zooming.
- Support light and dark mode.

---

## 8. Security Rules

- Validate all input on the backend, even if the frontend validates it too.
- Rate-limit room creation, joins, uploads, auth and any endpoint that costs money.
- Limit participants per room and reject extra joiners.
- Verify the Supabase JWT on the backend for every account or paid endpoint. Check plan status server-side. Never trust a client claim that a user is subscribed.
- Verify payment webhook signatures (Razorpay and Stripe) before acting on them.
- Use parameterized queries or the Supabase client. Never build SQL from user input.
- Never use `eval`, `innerHTML` with user content, or `dangerouslySetInnerHTML` with uploaded or shared text.
- Set sensible security headers and a strict CORS allow-list.
- Provide a report-abuse path for anonymous sessions.
- Do not run user-submitted code. Code execution is out of scope.

---

## 9. Accessibility and UX Rules

- Use semantic HTML and keyboard-reachable controls. Visible focus states.
- Sufficient color contrast, and never rely on color alone for status (add text or icons).
- Show connection status clearly: connecting, connected, reconnecting, offline.
- Warn before a reload or tab close when the room has live content.
- Plain, friendly error messages. Say what happened and what the user can do.
- Upgrade prompts are calm and specific, shown near a limit or at a paid feature, never as a surprise wall.

---

## 10. Skills: Which to Use and When

Read the `SKILL.md` of a skill before using it. Use a skill only when the task fits. If a skill is unavailable, continue using standard best practice and say so.

| Task | Skill |
|---|---|
| Frontend layout, PWA, web standards, performance basics | `modern-web-guidance` |
| Browser extension work (only if requested) | `chrome-extensions` |
| Inspecting pages, network and console in a real browser | `chrome-devtools` |
| Accessibility checks and fixes | `a11y-debugging` |
| Slow first load or large content paint | `debug-optimize-lcp` |
| Editor or tab slowing down over time, memory growth | `memory-leak-debugging` |
| Login or session cookie problems | `cookie-debugging` |
| General browser or tooling problems | `troubleshooting` |
| Scripting repetitive scaffolding or file moves | `automation` |
| Git commits, branches, anything touching GitHub | `permissioned-github` |
| Writing README, docs and comments in plain language | `unslop` |
| Studying how an existing product or protocol behaves | `reverse-engineer-anything` |
| Keeping project rules and agent settings organized | `antigravity-guide`, `agy-customizations` |
| Future AI features using Gemini, only when the AI phase starts | `gemini-api-dev` |

Skills **not to use** for code4share, because the project does not use those technologies:

- Firebase skills (the project uses Supabase, not Firebase).
- Flutter and Dart skills (the app is a React PWA).
- Google Cloud data and pipeline skills (BigQuery, Dataflow, Spark, Airflow, dbt and similar).
- Science, genomics and bioinformatics skills.
- Android CLI skills, unless a native Android app is requested later.

There is no Supabase skill installed. Follow current Supabase documentation and the rules in section 3.6.

---

## 11. Working Process

For every task, follow these steps in order.

1. **Read** this file, the relevant part of `docs/code4share_Project_Plan.md`, and the code you are about to change.
2. **State your plan** in a few lines before writing code: what you will change, which files, and what you will not touch.
3. **Ask** if something is unclear or conflicts with a rule here. Do not guess on privacy, money, security or data deletion.
4. **Change only what the task needs.** No drive-by refactors, no unrelated renames, no new features.
5. **Test** what you changed (see section 12).
6. **Update docs** if behavior, structure or decisions changed.
7. **Report** using the format in section 14.

### Ask before you do any of these
- Adding or upgrading a dependency.
- Creating a top-level folder or renaming a folder.
- Changing a database table, policy or migration that has already been applied.
- Touching authentication, payments, key handling or data deletion.
- Running anything that calls an external service, deploys, or costs money.
- Pushing to a remote, force-pushing, rewriting history, or deleting branches.

---

## 12. Testing and Definition of Done

A task is done only when all of these are true:

- The feature works as described, including the unhappy paths (bad input, dropped connection, rejected file, expired room, hitting a limit).
- It works on a narrow mobile viewport and on desktop.
- Tests exist for logic that can break quietly: room code generation, expiry, participant limits, file type and content checks, plan limit checks, 48-hour expiry calculation, webhook signature checks.
- No live content, secret or key appears in code, logs or output.
- No unused code, no leftover TODOs that were meant to be finished in this task, and no debug logging.
- Relevant docs are updated.
- The change is committed with a clear message.

If you could not test something, say so plainly. Never claim a test passed without running it.

---

## 13. Git Rules

- Work in small, focused commits.
- Commit message format: `type: short description`, where type is one of `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `perf`.
- Examples: `feat: add room creation with private code`, `fix: resync document after reconnect`.
- Never commit secrets, `.env`, `node_modules`, build output or logs.
- Do not push, add remotes, or open pull requests unless asked.
- Do not rewrite history on shared branches.

---

## 14. How to Report When a Task Ends

End every task with this short report:

1. **What changed:** a few plain lines.
2. **Files touched:** list with one line each.
3. **How it was checked:** tests run, manual steps, what passed.
4. **Not done or assumed:** anything skipped, guessed or left for later.
5. **Rules check:** confirm in one line that no live content is stored, no secret leaked, and plan limits were read from configuration.
6. **Suggested next step:** one sentence.

Keep the report short and honest. Do not pad it or praise the work.

---

## 15. Roadmap and Current Status

| Phase | Focus | Deliverables |
|---|---|---|
| 1. MVP | Core sharing | Create and join with code and QR, live two-way editing, mobile layout, auto-reconnect, text and code file upload |
| 2. Scale | Reliability | Multi-user rooms, relay fallback, roles, TURN |
| 3. Accounts | Monetization | Login, plans, configurable limits, payments, download to device |
| 4. Server save | Paid storage | 48-hour save with auto-delete and expiry reminders |
| 5. Polish | Growth | Analytics, team plans, native mobile app only if the PWA falls short |
| Future | AI | AI assistance across the platform, opt-in per room |

**Current status:** project structure created (`frontend/`, `backend/`, `packages/shared/`, `supabase/`, `infra/`, `docs/`). No dependencies installed yet. Phase 1 has not started.

Update this section when a phase starts or finishes.

---

## 16. Open Decisions (do not decide these on your own)

If a task depends on one of these, stop and ask.

1. Final usage limits that trigger the subscription prompt.
2. Plan prices and which features sit in which tier.
3. Whether AI is guest-limited-free or paid only.
4. Whether one room holds a single document or several files and tabs.
5. Whether files are encrypted in the browser before a 48-hour save.
6. How backups relate to the 48-hour deletion promise.
7. First launch regions (decides payment provider and server locations).
8. When to move Supabase from the Free plan to Pro (the Free plan pauses inactive projects, so Pro is needed before real users).

---

## 17. Quick Do and Don't

**Do**
- Keep sharing free and instant.
- Keep live content out of storage and logs.
- Read limits from configuration.
- Keep secrets on the backend.
- Make mobile work from the start.
- Ask when unsure, then keep the change small.

**Don't**
- Don't add a login wall before sharing.
- Don't create an `apps/` folder.
- Don't put the service role key in the frontend.
- Don't hard-code plan limits.
- Don't execute or render uploaded content.
- Don't start the AI phase early.
- Don't install dependencies without saying why.