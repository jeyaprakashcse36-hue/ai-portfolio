# Jeya Prakash B — Portfolio

Animated, interactive portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ParticleCanvas.jsx   # Animated particle background
│   ├── Navbar.jsx           # Sticky navigation bar
│   ├── Hero.jsx             # Hero section + photo upload
│   ├── About.jsx            # About + skills
│   ├── Experience.jsx       # Work timeline
│   ├── Projects.jsx         # Project cards
│   ├── Certifications.jsx   # Cert grid
│   ├── Publications.jsx     # IEEE papers
│   ├── Contact.jsx          # Contact links
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css                # CSS variables + global styles
```

## 📸 Adding Your Photo

On the live site, click the photo frame in the Hero section to upload your photo directly — no code change needed.

To hard-code a photo, place your image in `src/assets/photo.jpg` and update `Hero.jsx`:

```jsx
import myPhoto from '../assets/photo.jpg'
// Then set: <img src={myPhoto} ... />
```

## 🌐 Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → Deploy (zero config needed)

## 🔧 Customisation

- **Colors**: Edit CSS variables in `src/index.css`
- **Content**: Each section is its own component — just update the data arrays at the top of each file
- **GitHub link**: Update `href` in `Contact.jsx`
