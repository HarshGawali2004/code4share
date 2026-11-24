# code4share Agent Rules

- Never store live session code on the server, in logs, or in the database.
- Guests can share without login; login is requested only at paid features.
- Uploads accept text and code files only, checked by content, treated as plain text.
- Plan limits live in configuration (the plans table), not in code.
- The Supabase service role key is used only in backend/ and never reaches the browser.
- Row Level Security is on for every table.
- AI is opt-in per room and only runs when a user clicks an AI action.
