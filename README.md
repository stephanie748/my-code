# Lifeline Recovery Residence — Licensing & PARR Tracker

Generated from the Lifeline Medical Group Inc. Recovery Residence Session Summary (July 7, 2026). This turns that session's notes into a working checklist app plus a set of draft PARR compliance documents.

## What's here

- **Tracker app** (`index.html`, `css/`, `js/`) — a single-page, no-build-step checklist covering:
  - Licenses Needed (DDAP, local rental license, zoning approval)
  - The One Rule (never sign a lease until zoning is confirmed for that exact address)
  - PARR Certification Steps (1–5)
  - The 12 PARR Documents, linked and checkable
  - Before You Submit reminders
  - Progress is saved locally in the browser (`localStorage`); no backend or account needed.
- **`documents/`** — the 12 PARR-required documents as Markdown templates on Lifeline letterhead, with `{{placeholders}}` for house-specific details (rent, fees, house manager, curfew, dates, insurance figures, permit numbers). See `documents/README.md` for the full index.

## Running it

No build tools required. Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- The "Check Before You Lease" checklist referenced in the session summary wasn't included in the source document — the tracker flags this so its items can be added once available.
- Document templates are starting drafts; have them reviewed against the current NARR Standard and PA-specific requirements before submitting to PARR.
