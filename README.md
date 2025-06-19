# 🏡 ALX Listing App
A responsive, scalable property listing platform built with Next.js, TypeScript, and Tailwind CSS. This project showcases the transformation of mockups into a maintainable layout with dynamic routing and reusable components.

🚀 Milestone Objectives
📍 Phase 00: Listing Page
Break down the homepage mockup into reusable layout components.

Render property listings from sample data.

Ensure responsive design and scalable structure.

📍 Phase 01: Property Detail Page
Implement dynamic routing using property id as route param.

Display detailed property information, including reviews and booking functionality.

Break down the page into meaningful sections for reusability.

🧱 Tech Stack
Category	Tools Used
Framework	Next.js, TypeScript
Styling	Tailwind CSS
Utilities	ESLint for code linting
State	TBD (Context API or Redux planned)

📁 Project Structure Overview
bash
alx-listing-app-01/
├── components/
│   ├── layout/              # Header, Footer, Layout wrapper
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   └── property/            # Detail page sections
│       ├── PropertyDetail.tsx
│       ├── BookingSection.tsx
│       └── ReviewSection.tsx
├── constants/
│   └── index.ts             # PROPERTYLISTINGSAMPLE
├── interfaces/
│   └── index.ts             # TypeScript interfaces
├── pages/
│   ├── index.tsx            # Listing page
│   └── property/
│       └── [id].tsx         # Dynamic route for detail page
├── public/
├── styles/
│   └── globals.css
├── tailwind.config.js
└── tsconfig.json

📸 Features
📋 Listing Page: Displays a gallery of properties using reusable card components.

🏷️ Property Detail: Dynamic [id] route shows name, rating, description, images, amenities, etc.

🧾 Tabs Section: Description broken into "What we offer", "Reviews", "About host" (to be implemented).

💬 Review Section: User reviews rendered with names, avatars, and star ratings.

🏦 Booking Section: Price calculator and date pickers for a mock reservation experience.
