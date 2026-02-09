# Profile Management Application

A full-stack Profile Management Application built using Next.js and Tailwind CSS.
The application displays student profiles and allows users to view detailed information.

This project was developed as part of an interview assignment.

---

## 🚀 Features

- Display student profile cards
- View detailed profile details
- Dynamic routing with Next.js
- REST API using Next.js API Routes
- Clean UI with Tailwind CSS
- Deployed on Vercel

---

## 🛠 Tech Stack

Frontend:
- Next.js (App Router)
- TypeScript
- Tailwind CSS

Backend:
- Next.js API Routes

Deployment:
- Vercel

---

## 📁 Project Structure

app/
- page.tsx (Home Page)
- profile/[id]/page.tsx (Profile Details)
- api/profiles (APIs)

data/
- profiles.js (Mock Data)

---

## 🔗 API Endpoints

GET /api/profiles  
GET /api/profiles/:id

---

## 💾 Why Mock Data Instead of Real Database?

This project uses mock data instead of a real database because:

- The main focus was frontend, routing, and API integration.
- It keeps the backend simple and fast.
- It reduces complexity for a time-limited assignment.
- The project structure allows easy future database integration.

A real database like MongoDB or PostgreSQL can be added later if required.

---

## 🔄 Future Improvements

- Add database integration
- Add user authentication
- Enable profile editing
- Add search and pagination
- Improve animations

---

## ⚙️ Setup Instructions

1. Clone Repository

git clone <your-repo-url>
cd profile-management-app

2. Install Dependencies

npm install

3. Add Environment Variable

Create .env.local file:

NEXT_PUBLIC_SITE_URL=http://localhost:3000

4. Run Project

npm run dev

Open:

http://localhost:3000

---

## 🌐 Live Demo

https://student-data-hq1p.vercel.app

---

## 📌 Author

Ash  
Post Graduate Student  
Aspiring Full-Stack Developer

---

## 📄 License

This project is created for educational and interview purposes.
