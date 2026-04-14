# 🚀 NomadCore (Transit0) - Command Center

Welcome to the NomadCore project! This repository currently holds the **Frontend Dashboard** and the **AI Insights Logic**.

## 🛠️ What is currently done (Phase 1)
I have built the visual framework and the "brain" of the dashboard so we have something to demo to the judges.
* **`src/app/page.tsx`**: The futuristic Command Center UI. It is fully styled but currently "Read-Only".
* **`src/lib/mockData.ts`**: A fake local database of routes and bookings. *(We will delete this once Supabase is ready).*
* **`src/lib/analytics.ts`**: The logic engine that calculates total revenue, popular routes, and generates the **AI Alert** text.

## 🤝 Next Steps for the Team (How to link your work)

### 1. For the Backend / USSD Lead
Your job is to get data *into* the database.
* Set up our **Supabase** project and give us all the URL/API keys for our `.env` files.
* Build the `POST /api/ussd` route to handle Africa's Talking requests.
* When a user books via USSD, just write a simple `INSERT` into the Supabase `bookings` table.

### 2. For the Admin / Dashboard Lead
Your job is to make the dashboard interactive and live.
* Replace my `mockData.ts` imports with actual **Supabase fetches**.
* Use **Supabase Realtime** so that when the USSD backend adds a booking, the numbers on the dashboard update instantly.
* **Add the Controls:** Build the input fields and "Update Price" button so the Admin can actually act on the AI's advice and change the route fees in the database.

---
**Note:** The AI does *not* change the prices automatically. It only gives advice on the screen. The Admin must click the buttons you build to actually change the price! Let's win this! 🏆
