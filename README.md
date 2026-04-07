# Dhiraj Kumar — Portfolio

Personal portfolio built with React + Vite. Dark purple theme.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

## Build for Production

```bash
npm run build
```
The output will be in the `dist/` folder — deploy it to Vercel, Netlify, or GitHub Pages.

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project → Import your repo
3. Click Deploy — done!

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── components/
        ├── Navbar.jsx / .css
        ├── Hero.jsx / .css
        ├── About.jsx / .css
        ├── Skills.jsx / .css
        ├── Experience.jsx / .css
        ├── Projects.jsx / .css
        ├── Education.jsx / .css
        ├── Certificates.jsx / .css
        ├── Contact.jsx / .css
        └── Footer.jsx / .css
```

## Customisation

- Edit personal info in each component's data array at the top of the file
- Colors are all in `src/App.css` under `:root` CSS variables
- Add your real photo by replacing the emoji in `Hero.jsx` with an `<img>` tag
