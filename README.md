# Professional Career & Academic Portfolio

This project is a high-performance, professional React portfolio designed for senior professionals. It is optimized for hosting on **GitHub Pages**.

## Features
- **Modern Design**: Midnight professional theme with gold and blue accents.
- **Interactive Layers**: Smooth animations using Framer Motion.
- **Fully Responsive**: Mobile, tablet, and desktop ready.
- **Sections**:
  - Hero Profile (Customizable Photo)
  - Academic Background (UG/PG details)
  - Career Timeline (2009 – Present)
  - Photo Gallery
  - Achievements
  - Works Done

## How to Customize
1. **Personal Information**: Open `src/components/Hero.jsx`, `Education.jsx`, `Experience.jsx`, etc., and replace the placeholder text with your actual details.
2. **Profile Photo**: Replace `public/profile.png` with your professional headshot.
3. **Gallery Images**: Replace `public/gallery1.png` and `public/gallery2.png` with your own project or lifestyle photos.

## Deployment to GitHub Pages

1. **GitHub Repository**: Create a new repository on GitHub.
2. **Push Code**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```
3. **First-Time Setup**:
   - Update `vite.config.js` with your repository name if you aren't using a custom domain:
     `base: '/your-repo-name/'` (or keep `./` if you want it to be path-agnostic).
4. **Deploy**:
   ```bash
   npm run deploy
   ```
   This will build the project and push the `dist` folder to a `gh-pages` branch on your GitHub repository.

## Hosting Verification
This setup satisfies all GitHub Pages requirements:
- Uses `index.html` as the entry point.
- Assets are linked relatively via `base: './'`.
- Production build is generated into `dist` and handled by `gh-pages` tool.
