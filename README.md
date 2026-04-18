# Airbnb (MERN + Vite)

## Backend
```
cd backend
npm install
npm run dev   # http://localhost:5000
```
MongoDB must be running at mongodb://127.0.0.1:27017

## Frontend
```
cd frontend
npm install
npm run dev   # http://localhost:5173
```

## Features
- Guest / Owner registration (Aadhar, PAN, age >=18)
- Owner: add/edit/delete listings with **amenities** and **bathrooms**
- Owner dashboard shows listings **with images** and **feedback per listing**
- Search & filter by location, price, bedrooms, guests, category
- Past dates disabled in booking
- "BOOKED" overlay; SweetAlert when already booked
- Guest cancel / checkout; feedback modal opens automatically after checkout
- Reviews shown on listing detail and owner dashboard
- Logo only (no website name) — real Airbnb svg
- Local image storage via multer (`/backend/uploads`)
