# code4share

**Private, real-time code and text sharing, on any device**

Peer-to-peer sessions, QR join, mobile-first design and an AI-ready roadmap. Free to share, with extra features for subscribers.

`PEER-TO-PEER` · `PRIVATE` · `MOBILE-FIRST` · `QR JOIN` · `AI-READY`

| | |
|---|---|
| **Document** | Project Plan & Requirements |
| **Version** | 1.0 |
| **Date** | November 24, 2026 |
| **Status** | Planning |
| **Scope** | Version 1 platform, with AI features as future scope |

---

## Contents

- [1. Executive Summary](#1-executive-summary)
- [2. Problem and Vision](#2-problem-and-vision)
- [3. Competitor Analysis: Codeshare.io](#3-competitor-analysis-codeshareio)
- [4. Goals and Scope](#4-goals-and-scope)
- [5. Functional Requirements](#5-functional-requirements)
- [6. Access Model and Plans](#6-access-model-and-plans)
- [7. Save and Download](#7-save-and-download)
- [8. System Architecture](#8-system-architecture)
- [9. Technology Stack](#9-technology-stack)
- [10. Performance Strategy](#10-performance-strategy)
- [11. Security and Privacy](#11-security-and-privacy)
- [12. Risks and Challenges](#12-risks-and-challenges)
- [13. Development Roadmap](#13-development-roadmap)
- [14. Future Scope: AI Features](#14-future-scope-ai-features)
- [15. Open Decisions](#15-open-decisions)
- [16. Summary](#16-summary)
- [Appendix: Glossary](#appendix-glossary)

---

## 1. Executive Summary

code4share is a real-time code and text sharing platform. Two or more people connect with a private code or by scanning a QR code, and then edit the same document together, live, from a laptop, tablet or phone. Wherever possible, the content travels directly from one person’s device to the other’s (peer-to-peer), so the code is not stored on our servers.

Sharing is free and requires no login. A person who logs in and subscribes unlocks extra features: downloading the document to their own device, saving it on the server for 48 hours, and higher usage limits. AI assistance across the whole platform is planned as a future addition once the core product is stable.

The product is built around four ideas: it must be fast to start, private by design, reliable once connected, and usable on every kind of device.

### At a Glance

| **Item**               | **Summary**                                                                                 |
|------------------------|---------------------------------------------------------------------------------------------|
| **Product**            | code4share, a live code and text sharing web application                                    |
| **Who it is for**      | Developers, students and teachers, remote teams, and anyone who needs to share text quickly |
| **How people connect** | Private session code, join link, or QR scan                                                 |
| **Platforms**          | Browsers on desktop, laptop, tablet and mobile (installable progressive web app)            |
| **Privacy approach**   | Peer-to-peer transfer with an in-memory relay fallback. Free sessions are never stored.     |
| **Free tier**          | Full live sharing and editing, with no login                                                |
| **Paid tier**          | Download to device, 48-hour server save, higher limits and larger files                     |
| **Future**             | AI assistance for code and text, AI credits and a help assistant                            |

## 2. Problem and Vision

### 2.1 The Problem

People often need to show code or text to someone else immediately, during a call, a lesson, a debugging session or a review. The tools that exist today leave several gaps:

- **Account friction.** Many tools ask people to sign up before they can share anything, which slows down a task that should take seconds.
- **Unclear storage.** When a session runs entirely through a provider’s server, users cannot be sure the content is not kept. This matters for private or company code.
- **Weak mobile support.** Most editors are designed for large screens, so using them on a phone is awkward, and pairing a phone with a laptop is difficult.
- **Limited access control.** Sessions are often protected only by a link. Anyone who receives the link can join, and the owner has few controls.
- **Fragile connections.** A network drop can break a session or lose work, and recovery is not always automatic.
- **No intelligent help.** Users who want an explanation, a review or a conversion must copy their code into a separate tool.

### 2.2 The Vision

code4share aims to be as simple as opening a link, with privacy built into the design rather than added as a promise, and a mobile experience that works as well as the desktop one. Over time it should become the easiest place to share, discuss and improve text and code together.

### 2.3 Target Users

- **Developers.** Pair programming, quick troubleshooting, sharing snippets with colleagues, and reviewing code together.
- **Students and teachers.** Sharing examples in class, helping with assignments, and working through exercises together, including from phones.
- **Remote teams.** Short, private working sessions where the content should not be kept on a third-party server.
- **General users.** Anyone who needs to share notes, configuration text or plain words live with another person.

## 3. Competitor Analysis: Codeshare.io

Codeshare.io is a well-known free tool for sharing code in real time. Its main strength is simplicity: a person opens the page, receives a link and starts typing. The comparison below is based on general knowledge of the product and should be re-verified before it is used externally.

| **Gap in existing platforms**                                              | **code4share advantage**                                                    | **Why it matters**                                                     |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------|
| Sessions pass through the provider’s server with no strong privacy promise | Peer-to-peer connection with an in-memory relay fallback and no stored code | Builds trust with developers and companies protecting proprietary code |
| Access by link alone; anyone with the link can join                        | Private join code, room limits, expiring codes and roles                    | Gives the owner control over who joins and what they can do            |
| No QR join                                                                 | Scan a QR code to join instantly                                            | Makes phone and laptop pairing fast, and suits classrooms and meetings |
| Desktop-focused experience                                                 | Mobile-first progressive web app                                            | Reaches students and users who work mainly on phones                   |
| Limited export workflow                                                    | Paid download to device and 48-hour server save                             | Creates a clear, fair reason to subscribe                              |
| No AI assistance                                                           | AI features planned (see Future Scope)                                      | Adds help without leaving the editor                                   |
| Code-focused only                                                          | Any text or code, with no line limit                                        | Widens the audience beyond developers                                  |
| Connection can be fragile                                                  | Automatic reconnect and resync so work is not lost                          | Sessions feel dependable                                               |

### 3.1 Benefits to code4share

- **Clear positioning.** The product can be described in one line: private, peer-to-peer, AI-ready code sharing that works on any device.
- **Natural paid features.** Download, 48-hour save, larger files, higher limits and later AI credits give users concrete reasons to subscribe.
- **Low running cost for free users.** Because most data flows peer-to-peer and nothing is stored, a free session costs very little to support.
- **Trust.** A no-storage policy appeals to security-conscious users and companies.
- **Wider audience.** Mobile, QR and plain-text support reach students, writers and teams as well as developers.

### 3.2 Disadvantages and Risks for code4share

- **Established competitor.** Codeshare already has users and recognition, so code4share needs a visible reason to switch. Privacy and mobile are the strongest reasons.
- **Harder engineering.** Peer-to-peer networking, TURN costs and large rooms add complexity that a simple server-based tool avoids.
- **Copying cannot be prevented.** Anyone in a session can copy the text, so paid features must sell convenience, not protection.
- **Free alternatives.** Tools such as editor live-share extensions or shared documents cover some needs for free, so paid features must be clearly better.
- **Abuse of anonymous sharing.** Open, no-login sharing can be misused for spam or harmful content, so rate limits and reporting are needed.

## 4. Goals and Scope

### 4.1 Goals

- **Fast, real-time editing.** Changes appear on every participant’s screen almost instantly, and a session can be started in seconds.
- **Private by design.** Free live sessions never write code to a database or log, and content is not stored on the server.
- **Reliable connections.** Sessions survive network drops and recover on their own without losing work.
- **Every device.** The same experience works on desktop, laptop, tablet and mobile.
- **A clear business model.** Free sharing for everyone, with a straightforward subscription for extra features.

### 4.2 In Scope for Version 1

- **Sessions with code and QR.** Create and join a session using a private code or QR code.
- **Multi-user live editing.** Several people edit the same document at the same time.
- **Mobile-friendly interface.** A responsive progressive web app that can be installed on a phone.
- **File upload.** Upload a text or code file into the shared editor.
- **Login and subscription.** Accounts and payments for the extra features.
- **Download and 48-hour save.** Paid options to keep the work.
- **Configurable usage limits.** Plan rules that can be changed without a new release.

### 4.3 Out of Scope for Version 1

- **Interview mode.** Session replay, paste detection and candidate evaluation were removed from the plan.
- **Code execution.** Running code or test cases is not included, which also avoids the security risk of running untrusted code.
- **Binary files.** Images, PDFs and zip files are not shared; only text and code files are supported.
- **AI features.** Planned for a later phase and described under Future Scope.

## 5. Functional Requirements

### 5.1 Sessions and Connections

- **Private session code.** When a user creates a session, the system generates a random, hard-to-guess code. Only people who have the code can join.
- **Join by code, link or QR.** A joiner can type the code, open a join link, or scan the QR code. The QR code simply encodes the join link.
- **Multiple participants.** More than two people can be connected at the same time. Small rooms connect directly; larger rooms use the relay fallback.
- **Automatic reconnection.** If a connection drops, the app reconnects on its own and brings the document back up to date.
- **Roles.** The owner can assign owner, editor or view-only roles, so a host can lock editing when needed.

### 5.2 Editing

- **Simultaneous editing.** Everyone with edit rights can type at the same time. Changes merge automatically without conflicts.
- **No line limit.** There is no limit on the number of lines. The only practical limit is the memory of the device.
- **Any text or code.** Code in any language, configuration files, notes and plain words can all be shared.
- **Syntax highlighting.** Colour highlighting is applied for the chosen language and can be detected automatically.

### 5.3 File Upload (Text and Code Only)

A user can upload a text or code file. The browser reads the file locally and places its contents in the shared editor, so the file itself never reaches the server.

- **Ways to upload.** A button, drag and drop on desktop, or the file picker on mobile.
- **Language detection.** The file extension (for example .py or .js) selects the language and turns on syntax highlighting.
- **Allowed types.** A list of common text and code extensions, such as .txt, .md, .json, .csv, .py, .js, .ts, .java, .c, .cpp, .html, .css, .sql, .yaml, .xml and .sh.
- **Content check.** The file is inspected, not just named. A renamed binary file is rejected if it contains binary data.
- **Clear rejection message.** Unsupported files show the message: Only text and code files are supported.
- **Replace or append.** The user chooses whether the upload replaces the current content or is added to it, so nobody wipes the shared code by accident.
- **Owner control.** The room owner can restrict who may upload, because an upload changes what everyone sees.
- **Size cap.** A maximum file size applies. It is configurable per plan and lower on mobile to protect low-memory phones.
- **Plain text only.** Uploaded content is never executed, and uploaded HTML is never rendered, which prevents script injection.

### 5.4 Mobile and QR Access

- **Progressive web app.** One responsive app works on phones, tablets and computers, and can be installed to the home screen without an app store.
- **Mobile-friendly editor.** CodeMirror 6 is used because it handles touch input and small screens far better than heavier editors.
- **QR connection.** The host shows a QR code. A phone scans it, opens the join link in the browser, and joins the session automatically.

How QR joining works:

1.  The host creates a session and the app shows the code and a QR code.

2.  The second person scans the QR code with a phone camera.

3.  The phone opens the join link in the browser.

4.  The app joins the room and the live connection starts.

### 5.5 Reload Behavior

Because the server does not store the code, what happens on a reload depends on whether anyone else still holds a copy.

| **Situation**                                 | **Result**                                                                                       |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------|
| One person reloads while another is connected | The code returns. The reloaded browser rejoins and the document resyncs from the connected peer. |
| Everyone leaves or reloads at the same time   | The code is lost, because it only existed in browser memory and was never stored on the server.  |
| A single user alone in a room reloads         | The code is lost unless local autosave is on.                                                    |

To reduce accidental loss, three safeguards are planned:

- **Local autosave.** A copy is kept in the user’s own browser storage, never on the server, and is restored after a reload. A clear-on-exit setting protects shared or public computers.
- **Reload warning.** The browser warns the user before a tab with live content is closed or reloaded.
- **Paid save.** Download or the 48-hour server save lets a user recover work after everyone has left.

### 5.6 Reliability

- **Document lives on every device.** Each participant’s browser holds a full copy of the document, so one person dropping out does not lose it.
- **Resync on return.** A reconnecting user receives only what they missed and merges it with their own copy.
- **Connection recovery.** The app retries the connection and restarts the network negotiation when a path fails.
- **Relay fallback.** If a direct connection cannot be made, traffic goes through an in-memory relay so the session still works.

## 6. Access Model and Plans

Sharing is free and requires no login. Login is only needed for the extra features.

| **User type**     | **Capabilities**                                                                                                    |
|-------------------|---------------------------------------------------------------------------------------------------------------------|
| Guest (no login)  | Create or join sessions, multi-user live editing, QR join, mobile use, and text and code upload. Nothing is stored. |
| Logged-in, free   | Everything a guest has, plus an account that tracks usage and shows upgrade prompts when a limit is near.           |
| Subscribed (paid) | Download to device, 48-hour server save, higher limits and larger files. AI features and credits are added later.   |

### 6.1 Login at the Moment of Need

A guest is never asked to log in before sharing. Login is requested only when they use a paid feature, such as Download or Save.

1.  The guest taps Download or Save.

2.  A prompt explains that this feature needs an account and a subscription.

3.  The guest logs in or signs up in a popup, or through a redirect that returns to the same room.

4.  The session stays open the whole time, so no work or connection is lost.

5.  After subscribing, the feature works immediately.

### 6.2 Usage Limits

The exact limits are not final and will be set later. They are stored as configurable plan rules, so they can be changed without releasing a new version of the app.

- **Possible limit types.** Session duration, number of participants per room, sessions per day, file size, and saved files.
- **Warning before the limit.** A soft warning appears as a user approaches a limit, followed by the upgrade prompt when it is reached.
- **Tracking guests.** Guests are counted with a lightweight device identifier and IP address. This is a soft measure, because it can be bypassed by clearing storage or changing networks, so limits act as a nudge toward subscription and not a hard lock.
- **Tracking accounts.** Logged-in users are counted by account, which is more reliable.

## 7. Save and Download

### 7.1 Download to Device (Paid)

- **Created in the browser.** The file is generated on the user’s own device and saved to their laptop or phone.
- **Server stays out of it.** The server never sees or handles the file. Its only job is to confirm that the account has an active subscription.

### 7.2 Server Save with 48-Hour Auto-Delete (Paid Option)

Users who want to keep their work on the server can use an optional save that is erased automatically after 48 hours. Four layers make the deletion dependable:

- **Expiry timestamp.** Every saved file receives an expiry time when it is created.
- **Storage lifecycle rule.** The storage service (S3 or Cloudflare R2) is configured to delete objects after two days, independent of the application.
- **Scheduled cleanup job.** A regular job removes expired database records so that no references remain.
- **Expiry reminder.** The user is warned before the file expires and can download it first.
- **Optional browser-side encryption.** The file can be encrypted in the user’s browser before upload, so the server only stores unreadable data.
- **Privacy policy wording.** The policy must state that free live sessions are never stored and that saved files are kept for 48 hours only. It must also say how backups are handled.

> **Important limit**
>
> Anyone in a session can copy the text they see. The paywall therefore provides convenience (clean export, a server copy, more capacity) and not copy protection.

## 8. System Architecture

code4share uses a small signaling server only to introduce participants to each other. After that, their browsers talk directly.

```text
Person A  <---- WebRTC (encrypted, direct) ---->  Person B
    \                                               /
     \--- signaling server (room code only) -------/
          relay fallback (in memory, never stored)
```

### 8.1 Components

- **Peer-to-peer connection.** Direct WebRTC data channels connect small rooms. Once connected, the server is out of the data path and latency is low.
- **Relay fallback.** For larger rooms or blocked networks, an in-memory relay forwards encrypted updates. It never writes them to disk.
- **Document sync.** Yjs keeps the document consistent across all participants and handles reconnection and resync.
- **Signaling server.** It passes small connection-setup messages and keeps a short-lived, in-memory list of rooms.
- **STUN and TURN.** STUN helps devices discover how to reach each other. TURN is a relay of last resort for strict networks, and its traffic remains encrypted.

### 8.2 How a Connection Is Made

1.  Person A creates a session and the server records the room code in memory.

2.  Person B enters the code, scans the QR code, or opens the link.

3.  The signaling server passes the connection offer and answer between them.

4.  The two browsers find a route using STUN, or TURN if needed.

5.  A direct encrypted channel opens and the signaling server steps aside.

6.  Yjs synchronises the document and live editing begins.

### 8.3 What the Server Sees

| **Data**                                | **Does the server see it?**                                                                                     |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| Room code and connection setup messages | Yes, briefly and in memory, only to introduce the participants                                                  |
| The code or text being edited           | No for direct connections. For relay mode it passes through in memory, encrypted, and is never written to disk. |
| Uploaded file contents                  | No. The file is read in the browser and shared through the editor.                                              |
| Account, plan and usage data            | Yes, stored in the database for logged-in users                                                                 |
| Saved files (paid)                      | Yes, for 48 hours only, optionally encrypted in the browser                                                     |

## 9. Technology Stack

| **Layer**               | **Choice**                                                                 | **Why**                                                                       |
|-------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **Frontend**            | React (Vite), progressive web app                                          | Good for live interface state, quick to build, and installable on phones      |
| **Editor**              | CodeMirror 6                                                               | Light, works well on touch devices, and handles large documents               |
| **Sync**                | Yjs                                                                        | Merges simultaneous edits without conflicts and supports reconnection         |
| **Real-time transport** | WebRTC data channels with in-memory relay fallback, STUN and TURN          | Direct, encrypted and fast, with a fallback for strict networks               |
| **Backend**             | Node.js                                                                    | Handles many idle connections well and uses the same language as the frontend |
| **Database**            | PostgreSQL                                                                 | Reliable storage for users, plans, usage and 48-hour file records             |
| **File storage**        | S3 or Cloudflare R2 with a 48-hour lifecycle rule                          | Automatic deletion independent of the application                             |
| **Payments**            | Razorpay (India), Stripe (international)                                   | Covers local and global customers                                             |
| **Hosting**             | Vercel or Netlify for the frontend; VPS, Render or Railway for the backend | Simple, low-cost hosting that can scale                                       |

Python is not required for Version 1. It can be added later if heavy AI processing is needed.

## 10. Performance Strategy

Speed comes mainly from the peer-to-peer design. The following practices keep it fast in everyday use.

1.  **Direct transfer.** Content goes from one device to another without a server hop, so latency is usually a few tens of milliseconds.

2.  **Send changes, not files.** Each edit sends only the small change. Yjs does this automatically. Sending the whole file on each keystroke is what makes tools feel slow.

3.  **Batch rapid keystrokes.** Changes within a few milliseconds are grouped into one message to reduce overhead.

4.  **Reliable, ordered channel.** The default reliable channel is kept for code, because correctness matters more than saving a millisecond.

5.  **Compress large pastes.** Very large pastes are compressed before sending.

6.  **Light signaling.** Connection setup uses minimal messages and a server close to users, so it takes under a second.

7.  **Good STUN and TURN setup.** A missing or poor relay causes slow or failed connections for some users, which feels like slowness.

8.  **Virtualised editor and chunked loading.** Only the visible part of a large file is drawn, so big files do not freeze phones.

## 11. Security and Privacy

- **Strong room codes.** Codes are random, at least 8 characters, and generated with a secure random source, so they cannot be guessed.
- **Expiring and limited rooms.** Unused rooms expire, room size can be limited, and codes can be one-time.
- **Optional passphrase.** A shared passphrase can derive an encryption key, so even a compromised signaling server cannot impersonate a participant.
- **Encrypted transport.** All traffic uses HTTPS and WSS, and WebRTC data channels are encrypted.
- **No code in logs or databases.** Message bodies are never logged and live sessions never write to a database.
- **Safe uploads.** Uploaded files are validated and treated as inert plain text.
- **Abuse controls.** Rate limits and a report option guard against spam and misuse.

## 12. Risks and Challenges

| **Risk**                                              | **Impact**                         | **Mitigation**                                         |
|-------------------------------------------------------|------------------------------------|--------------------------------------------------------|
| Established competitor with existing users            | Slow adoption                      | Differentiate on privacy, mobile, QR and later AI      |
| Peer-to-peer complexity (NAT, TURN cost, large rooms) | Failed connections and higher cost | Relay fallback, managed TURN and a phased rollout      |
| Free users can copy text                              | Paywall seen as weak               | Sell convenience features, not copy protection         |
| Guest limits can be bypassed                          | Lost subscription revenue          | Treat limits as soft nudges and rely on account limits |
| Accidental loss on reload                             | Frustrated users                   | Local autosave, reload warning and paid save           |
| Abuse of anonymous sharing                            | Spam or harmful content            | Rate limits, expiring rooms and reporting              |
| Free alternatives for some features                   | Low conversion                     | Make paid features clearly better                      |

## 13. Development Roadmap

| **Phase**          | **Focus**    | **Key deliverables**                                                                                             |
|--------------------|--------------|------------------------------------------------------------------------------------------------------------------|
| **1. MVP**         | Core sharing | Create and join with code and QR, live two-way editing, mobile layout, auto-reconnect, text and code file upload |
| **2. Scale**       | Reliability  | Multi-user rooms, relay fallback, roles, TURN                                                                    |
| **3. Accounts**    | Monetization | Login, plans, configurable usage limits, payments, device download                                               |
| **4. Server save** | Paid storage | 48-hour save with auto-delete and expiry reminders                                                               |
| **5. Polish**      | Growth       | Analytics, team plans, native mobile app if the PWA falls short                                                  |

- **Phase 1, MVP.** Proves the core idea: two people connect and edit together on any device. Everything else builds on this.
- **Phase 2, Scale.** Makes sessions dependable for more people and harder networks, with a relay for when direct connections fail.
- **Phase 3, Accounts.** Introduces login, plans and payments, and delivers the first paid feature, download to device.
- **Phase 4, Server save.** Adds the 48-hour server save with automatic deletion and reminders.
- **Phase 5, Polish.** Improves analytics and team plans, and builds a native mobile app only if the web app proves limiting.

## 14. Future Scope: AI Features

AI is planned after the core platform is stable. It will be added across the whole product, not tied to any single mode, so every user can benefit whether they share code or plain words.

### 14.1 Editor Assistance

- **Explain code.** Describes what a selected piece of code does in plain language.
- **Find bugs and suggest improvements.** Points out likely errors and proposes fixes.
- **Code review.** Gives feedback on quality and recommends refactoring.
- **Convert between languages.** Rewrites code from one programming language to another.
- **Generate code.** Creates code from a plain-language description.
- **Comments and documentation.** Adds explanatory comments and documentation to existing code.
- **Side chat.** Lets users ask questions about the shared content and get answers in context.

### 14.2 Text Assistance

- **Writing help.** Fixes grammar, rewrites, summarises and translates plain text, since the platform supports words as well as code.

### 14.3 Room and Session Features

- **Session summary.** Summarises what changed during the session so a late joiner can catch up quickly.
- **Automatic language detection.** Detects the language of pasted text and turns on the right syntax highlighting.

### 14.4 Platform Features

- **Help assistant.** A chatbot that answers onboarding and plan questions.
- **AI credits.** Tracks AI usage and shows upgrade prompts when credits run low.

### 14.5 Rules for AI

Sending content to an AI provider takes it outside the peer-to-peer path, so AI must follow strict rules to keep user trust.

- **Opt-in per room.** AI is off by default. Every participant sees a clear notice when it is active.
- **Only on request.** Content is sent to an AI provider only when someone clicks an AI action. Nothing is sent in the background.
- **Data protection.** Choose a provider with no data retention and no training on user content, and disclose clearly that AI use sends content outside the peer-to-peer path.
- **Cost control.** Per-user rate limits and monthly AI credits tied to plans keep spending predictable.
- **Pricing decision.** AI is either limited-free with a daily cap and unlimited for paid users, or fully paid. This stays configurable.
- **Delivery.** AI calls can be made from the existing Node.js backend. Python is added only if heavier processing is needed.

## 15. Open Decisions

The following questions need an answer before or during development. Each affects design, cost or pricing.

1.  **Usage limits.** The numbers that trigger the subscription prompt, such as session time, participants and file size.

2.  **Plans and prices.** What each tier costs and which features sit in which tier.

3.  **AI access.** Whether AI is guest-limited-free or paid only.

4.  **Documents per room.** Whether a room holds a single document or several files and tabs.

5.  **Encrypted saves.** Whether browser-side encryption is enabled for 48-hour saves.

6.  **Backups.** How backups relate to the 48-hour deletion promise.

7.  **Launch regions.** The first markets, which decide the payment provider and server locations.

## 16. Summary

code4share keeps the zero-friction simplicity of existing code sharing tools and adds what they lack: privacy by design, QR and mobile support, reliable connections, and clear paid features for download and short-term server save. AI assistance follows as a future layer.

The phased roadmap lets the team ship a working MVP first, learn from real use, and then grow the product step by step.

## Appendix: Glossary

| **Term**               | **Meaning**                                                                                              |
|------------------------|----------------------------------------------------------------------------------------------------------|
| **WebRTC**             | A browser technology that lets two devices connect directly and exchange data, with encryption built in. |
| **Data channel**       | The part of WebRTC used to send text or data between peers.                                              |
| **Peer-to-peer (P2P)** | A connection directly between users’ devices instead of through a central server.                        |
| **Signaling server**   | A small server that helps two devices find each other and set up a connection, then steps aside.         |
| **STUN**               | A service that helps a device learn how it can be reached from the internet.                             |
| **TURN**               | A relay server used when a direct connection is not possible. Traffic stays encrypted.                   |
| **Relay fallback**     | Routing traffic through a server in memory when a direct connection fails.                               |
| **Yjs**                | A library that keeps a shared document identical on every device and merges simultaneous edits.          |
| **CRDT**               | The technique behind Yjs that lets edits from many people merge without conflicts.                       |
| **PWA**                | A progressive web app: a website that can be installed and used like a mobile app.                       |
| **CodeMirror 6**       | The code editor component used in the app.                                                               |
| **IndexedDB**          | Storage inside the user’s own browser, used for local autosave.                                          |
| **Lifecycle rule**     | A storage setting that automatically deletes files after a set time.                                     |
