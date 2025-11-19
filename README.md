# Portfolio Website

Portfolio website for Worawich Yimsabai - Built with React, Tailwind CSS, and Vite

## Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **React Router** - Routing

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

The server will run on port 5500. To access via domain `info.yourworldstudio.net`, you need to:

1. Add the domain to your hosts file (for local development):
   - Windows: `C:\Windows\System32\drivers\etc\hosts`
   - Add: `127.0.0.1 info.yourworldstudio.net`

2. Or configure your DNS to point `info.yourworldstudio.net` to your server IP

3. Access the site at: `http://info.yourworldstudio.net:5500`

## Build for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## Deployment

### Deploy to Vercel/Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

### Deploy to Static Hosting

The `dist` folder contains all static files ready to be served by any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any web server (nginx, Apache, etc.)

### For SPA Routing

If deploying to a static host, make sure to configure redirects so all routes point to `index.html`:
- **Vercel**: Create `vercel.json` with rewrite rules
- **Netlify**: Create `_redirects` file in `public` folder
- **Nginx**: Configure try_files directive

## Project Structure

```
├── public/
│   └── imgs/              # Images (preserved from original)
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   └── Biography.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Features

- ✅ Responsive design with mobile menu
- ✅ Smooth scrolling navigation
- ✅ Accordion skills section
- ✅ Project filtering by category
- ✅ Biography page with timeline
- ✅ All original data and images preserved

