# Portfolio Website

Portfolio website for Worawich Yimsabai

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

## Build

```bash
npm run build
```

## Project Structure

```
├── public/
│   ├── index.html          # Main portfolio page
│   ├── biography.html      # Biography page
│   ├── assets/
│   │   ├── css/           # Stylesheets
│   │   └── js/            # JavaScript files
│   └── imgs/              # Images
├── folder-portTatoo/       # Original files (backup)
├── package.json
└── vite.config.js
```

