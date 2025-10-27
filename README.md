# Instantly Frontend

This is the **frontend** for the Instantly project, built with **React**, **Vite**, and **Tailwind CSS**.  
It demonstrates how developers and marketing teams can collaborate to analyze campaign performance.  
This project can also serve as a **starter template** for developers who want to quickly set up and build upon a modern React + Vite frontend.

---

## 🛠️ Tech Stack

- **React 19** – UI library for building interactive interfaces
- **Vite** – Lightning-fast build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework
- **Axios** – For making API requests
- **Recharts** – For data visualization

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/instantly-frontend.git
cd instantly-frontend
```

### 2. Install Dependencies

Make sure you have Node.js (v18 or higher) installed.

```
npm install
```

### 3 Start the Development Server

```
npm run dev
```

This will start the app in development mode.
Open http://localhost:5173
in your browser to view it.

## 🎨 Tailwind Setup

If you haven’t already set up Tailwind, initialize it with:

```
npm run tailwind:init
```

Then ensure your tailwind.config.js includes the following content paths:

```
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

And add the Tailwind directives in your main CSS file (e.g., index.css):

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
