# 📰 Live News App

This is a full-stack web application that provides live news updates from various categories using the [NewsAPI](https://newsapi.org/). The frontend is built with **React**, and the backend is developed using **Node.js** with **MongoDB** for basic data operations.

---

## 📌 Features

- Live news fetched from NewsAPI
- News from multiple categories (business, entertainment, technology, sports, health, etc.)
- Responsive and clean UI built with React
- Backend setup using Node.js and Express
- MongoDB for potential user tracking or data logs (if extended)
- Real-time experience with no user input required

---

## 🧱 Tech Stack

**Frontend:**

- React.js
- Axios
- CSS

**Backend:**

- Node.js
- Express
- MongoDB
- dotenv (for managing API keys)

---

## 🔧 How to Run

### 🔹 Prerequisites

- Node.js installed
- MongoDB running locally or accessible via cloud (e.g. MongoDB Atlas)
- NewsAPI key (you can get one from [newsapi.org](https://newsapi.org/))

---

### 🔹 Clone the repository

```bash
git clone https://github.com/yourusername/news-app.git
cd news-app
```

---

### 🔹 Run Backend

```bash
cd backend
npm install
# Create a .env file and add your NewsAPI key and MongoDB URI:
# NEWS_API_KEY=your_api_key
# MONGO_URI=your_mongodb_uri
npm start
```

Backend will typically run on `http://localhost:5000`.

---

### 🔹 Run Frontend

```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`.

---

## 📌 Note

- This app is a **read-only** platform — users cannot submit or interact with the content.
- It simply fetches and displays live news from the API based on categories.
- Ideal for educational use or as a base project to extend with features like user login, saving favorites, etc.

---
