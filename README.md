# 🏆 Leaderboard Backend API

This is the Node.js/Express backend API for the Leaderboard project, using MongoDB Atlas for storage.

**Live API Base URL:**  
`https://leaderbackend-22ds.onrender.com/api`

---

## 🚀 Features

- **User CRUD:** Add users, fetch all users
- **Random Points Claim:** Claim random (1–10) points per user, records claim history
- **Leaderboard:** Returns leaderboard sorted by points
- **Point Claim History:** All previous claims, user + timestamp
- **CORS enabled** for frontend consumption

---

## 📦 Getting Started

### 1. Clone This Repo


### 2. Install Dependencies


### 3. Create `.env` File

At the project root:

MONGODB_URI=your_mongodb_atlas_connection_string
PORT=5000




**Do NOT share your `.env` or commit it to GitHub!**

### 4. Start the Server


Server runs at `http://localhost:5000`.

---
npm start

## 🌐 API Endpoints

| Method | Endpoint                     | Description                                                 |
|--------|------------------------------|-------------------------------------------------------------|
| GET    | `/api/users`                 | Get all users (sorted leaderboard)                          |
| POST   | `/api/users`                 | Add new user `{ name }`                                     |
| POST   | `/api/users/:id/claim`       | Claim random points for user with `id`                      |
| GET    | `/api/history`               | Get all claim history (user, points, timestamp)             |

---

## 📂 Project Structure
models/
User.js
ClaimHistory.js
routes/
userRoutes.js
server.js


---

## 🛡️ Security & Deployment Notes

- Add `.env` to `.gitignore`
- For deployment (Render/Railway): set `MONGODB_URI` and `PORT` in the host dashboard, **not** in your repo
- CORS is enabled for API access from the frontend

---

## 📝 License

MIT – Use freely for learning and non-commercial use.

---

## 🧑‍💻 Author

[Manohar K] – [k3manohar@gmail.com]



