# PETE private lead register — deployment checklist

## Current state
- Lead submissions are saved first to private Vercel Blob via `app/api/leads/route.ts`.
- The Google Sheet (lead tracker) is private: https://docs.google.com/spreadsheets/d/1KQBQtk76L2ER2EI8aKh5Lk_BLOPl27olicKyZZ9XMqs/edit
- A best-effort Google Sheets mirror only writes approved lead fields (ID, type, name, company, email, source, created timestamp). It leaves status, follow-up, owner and notes intact.
- The reconciliation endpoint at `/api/internal/lead-reconcile` recovers old/missed records from private Blob storage.
- Daily reconciliation is scheduled by `vercel.json` at 02:00 UTC. Hobby Cron may start later within the hour.
- A build-only preview is not evidence the Google API connection works.

## Manual credentials setup (one-time, don't paste private keys in chat)
1. In Google Cloud Console, create/select a project for PETE leads.
2. Enable **Google Sheets API**.
3. IAM & Admin > Service Accounts > Create service account, e.g. `pete-lead-sync`.
   No project-wide IAM permissions or domain-wide delegation are needed.
4. Create a JSON key for that service account. Keep the JSON private.
   If an organisation policy forbids keys, stop and choose an approved identity approach instead.
5. Share only the PETE Lead Register Google Sheet with the service-account **email**, role **Editor**.
   Do not use 'anyone with link'.
6. In the Vercel project `tpe.website`, production environment, configure:
   - `PETE_LEADS_SHEET_ID` — already set to the Sheet ID
   - `CRON_SECRET` — already configured as a sensitive variable
   - `PETE_GOOGLE_SERVICE_ACCOUNT_EMAIL` — service account email
   - `PETE_GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` — `private_key` value from JSON; sensitive variable
7. Do not add these to `NEXT_PUBLIC_*` or commit them to the repo.
8. Confirm a draft pull-request preview builds, then merge to deploy to production only when credentials are ready.
9. Submit a clearly marked synthetic lead, check that exactly one row appears with status New. Verify the existing stored Blob record remains present.
10. Verify the cron endpoint responds 401 without authorization (it must not be public). Trigger a controlled reconciliation with proper auth and ensure it backfills missing lead rows without overwriting manually edited columns.
11. Check the Sheet dashboard formulas and filter, and ensure no phone number or problem description is included.

## Operational cautions
- Blob stays the source of truth if Google Sheets is temporarily unavailable.
- Reconciliation uses lead IDs to skip existing rows, but read-then-append is not fully atomic if a lead submission races with the daily reconciliation. Review for duplicates before relying on CRM-quality guarantees.
- Reconciliation currently scans at most 1,500 private Blob entries per execution. If business growth approaches this volume, add a persistent checkpoint or upgrade to a transactional lead table.
- For better reliability, replace the old Vercel-log-only lead alerts with Sheet/Blob-backed alerts after this is live. Keep Gmail subject lead-ID deduplication.
