# RINDA Initiative — Deployment Guide

This document walks you through deploying the RINDA full-stack application to production using **MongoDB Atlas** (database) and **Vercel** (hosting).

---

## Prerequisites

- A [GitHub](https://github.com) account with the `rinda-initiative` repo pushed
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account (free tier works)
- A [Vercel](https://vercel.com) account (free tier works)

---

## Step 1 — Create a MongoDB Atlas Database

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com) → **Create a free cluster** (M0 tier)
2. Choose **AWS** → **ap-southeast-1** (Singapore — closest to Rwanda)
3. Under **Database Access** → **Add New Database User**:
   - Username: `rinda-app`
   - Password: generate a strong password, **save it**
   - Role: `Read and write to any database`
4. Under **Network Access** → **Add IP Address** → `0.0.0.0/0` (allow all — required for Vercel serverless IPs)
5. Under **Databases** → **Connect** → **Connect your application** → Copy the connection string

   It looks like:
   ```
   mongodb+srv://rinda-app:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
   ```

6. Replace `<password>` with the password you saved, and append `/rinda` as the database name:
   ```
   mongodb+srv://rinda-app:YOUR_PASS@cluster0.abcde.mongodb.net/rinda?retryWrites=true&w=majority
   ```
   > This is your `MONGODB_URI`.

---

## Step 2 — Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → select `rinda-initiative`
2. Framework Preset: **Other** (it's not Next.js)
3. Under **Environment Variables**, add:

   | Variable | Value |
   |---|---|
   | `MONGODB_URI` | The connection string from Step 1 |
   | `ADMIN_SECRET` | A strong password of your choice |
   | `NODE_ENV` | `production` |

4. Click **Deploy** — Vercel will build and deploy in ~60 seconds.

---

## Step 3 — Verify the Deployment

Once deployed, open your Vercel URL (e.g., `https://rinda-initiative.vercel.app`) and run these checks:

### API Health Check
```bash
# Should return: {"success":true,"sessionId":"...","user":{...}}
curl -X POST https://YOUR-VERCEL-URL.vercel.app/api/auth \
  -H "Content-Type: application/json" \
  -d '{}'
```

### Admin Dashboard
1. Open `/app/admin.html`
2. Enter your `ADMIN_SECRET` password
3. You should see live metrics (all zeros initially — that's correct)

### Rewards Store
1. Open `/app/rewards.html`
2. The balance should show "✓ Points synced with server" 
3. Complete a quiz → points should update in real-time on the rewards page

---

## Step 4 — (Optional) Connect Africa's Talking for USSD

1. Sign up at [africastalking.com](https://africastalking.com)
2. Request a USSD service code from MTN Rwanda
3. In your AT dashboard, under **USSD** → set the callback URL to:
   ```
   https://YOUR-VERCEL-URL.vercel.app/api/ussd
   ```
4. Add your AT credentials to Vercel environment variables:
   - `AT_USERNAME`
   - `AT_API_KEY`

---

## Architecture Overview

```
[User Device (PWA)]
       │
       │ HTTPS
       ▼
[Vercel Edge Network]
  ├── Static assets (HTML, CSS, JS) → served from CDN
  └── /api/* routes → Serverless Functions (Node.js)
              │
              │ mongoose connection pooling
              ▼
        [MongoDB Atlas]
        (rinda database)
        ├── users collection
        └── analyticsevents collection (90-day TTL)
```

---

## Troubleshooting

| Issue | Fix |
|---|---|
| `/api/auth` returns 404 | Check `vercel.json` has the routes block — it was already fixed in this version |
| `MongoServerSelectionError` | Check Atlas Network Access includes `0.0.0.0/0` |
| Admin login says "not configured" | `ADMIN_SECRET` env var is missing from Vercel settings |
| Points not syncing | Check browser console for CORS errors; check `api/utils/cors.js` |
| Mongoose deprecation warnings | Fixed in `api/utils/db.js` — do not add `useNewUrlParser` back |
