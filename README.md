## 🏡 ALX Listing App
A responsive, scalable property listing platform built with Next.js, TypeScript, and Tailwind CSS, designed to showcase dynamic property listings, booking functionality, and user reviews. This app evolves from static mockups into a fully integrated experience using RESTful APIs and best practices in scalable frontend architecture.

# 🚀 Project Highlights
Transforms design mockups into reusable layout components.

Implements dynamic routing via [id] for individual property views.

Integrates REST APIs using Axios for property data, bookings, and reviews.

Handles form submissions with validation and error states.

Ensures maintainability, responsiveness, and dynamic rendering throughout.

# 🧱 Tech Stack
Category	Tools Used
Framework	Next.js, React, TypeScript
Styling	Tailwind CSS
State	TBD (Context API or Redux planned)
Utilities	Axios (API calls), ESLint (Linting)
Mobile	Expo (for future React Native styling)

# 📁 Project Structure Overview
bash
alx-listing-app/
├── components/
│   ├── layout/                  # Header, Footer, Layout wrapper
│   └── property/                # Detail page sections
│       ├── PropertyDetail.tsx
│       ├── BookingSection.tsx
│       └── ReviewSection.tsx
├── constants/
│   └── index.ts                # PROPERTYLISTINGSAMPLE or config
├── interfaces/
│   └── index.ts                # TypeScript interfaces
├── pages/
│   ├── index.tsx               # Listing page
│   └── property/
│       └── [id].tsx            # Dynamic route for detail view
│   └── booking/
│       └── index.tsx           # Booking form submission
├── public/
├── styles/
│   └── globals.css
├── tailwind.config.js
└── tsconfig.json

# 🧩 Feature Summary
📋 Listing Page (pages/index.tsx)
Renders gallery of properties using reusable card components.

Fetches dynamic data from the property listing API.

Handles loading and error states.

# 🏷️ Property Detail (pages/property/[id].tsx)
Displays name, rating, amenities, host info, and more.

Uses useEffect to fetch property details via Axios.

Gracefully handles broken or missing API responses.

## 🧾 Tabbed Description Section (To be implemented)
Tabs: What we offer | Reviews | About host

## 💬 Review Section (ReviewSection.tsx)
Fetches and renders user reviews with avatars and star ratings.

Maps dynamic data into visual components with error handling.

## 🏦 Booking Section (BookingSection.tsx)
Price calculator and date picker for mock reservations.

Validates form and submits booking data via POST request.

# 📦 Installation & Setup
bash
# Clone the repository
git clone https://github.com/your-username/alx-listing-app.git

# Navigate into the project directory
cd alx-listing-app

# Install dependencies
npm install

# Start development server
npm run dev