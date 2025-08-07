# Terminal-Style Portfolio Website (Simple Version)

A modern, classy developer portfolio website built with vanilla HTML, CSS, and JavaScript, featuring a terminal-style interface that mimics a hacker terminal aesthetic.

## 🚀 Features

- **Terminal-Style Homepage**: Typewriter animation with blinking cursor
- **Dark Theme**: Professional dark theme with green/blue/amber accents
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: CSS animations and JavaScript-powered effects
- **Monospace Typography**: Uses Fira Code and JetBrains Mono fonts
- **Terminal Aesthetics**: Screen flicker, glow effects, and terminal-style UI elements
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks needed!

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Fira Code, JetBrains Mono (Google Fonts)
- **Icons**: Emoji icons for simplicity
- **Animations**: CSS animations and JavaScript

## 📁 Project Structure

```
portfolio-simple/
├── index.html          # Main HTML file with all sections
├── style.css           # Terminal-style CSS with animations
├── script.js           # JavaScript for interactions and animations
└── README.md           # This file
```

## 🎨 Design Features

### Terminal Aesthetics
- Dark background (#0a0a0a) with green borders
- Monospace fonts throughout
- Blinking cursor animation
- Screen flicker effects
- Terminal window styling with rounded corners

### Color Scheme
- **Background**: `#0a0a0a` (Terminal Black)
- **Primary Green**: `#00ff00` (Terminal Green)
- **Secondary Blue**: `#00bfff` (Terminal Blue)
- **Accent Amber**: `#ffb347` (Terminal Amber)
- **Text**: `#e0e0e0` (Light Gray)

### Animations
- Typewriter effect on homepage
- Smooth page transitions
- Hover effects on interactive elements
- Terminal flicker effects

## 🚀 How to Run

### Option 1: Simple File Opening
1. **Open the file directly** in your browser:
   - Double-click `index.html`
   - Or drag `index.html` into your browser window

### Option 2: Local Server (Recommended)
1. **Using Python** (if you have Python installed):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js** (if you have Node.js installed):
   ```bash
   npx http-server
   ```

3. **Using VS Code Live Server**:
   - Install the "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

4. **Open your browser** and go to:
   - `http://localhost:8000` (Python)
   - `http://localhost:8080` (Node.js)
   - `http://localhost:5500` (VS Code Live Server)

## 📝 Customization

### Personal Information
Update the following in `index.html`:
- **Name and title**: Update "Anshul Jagtap" throughout
- **Terminal prompts**: Change the typewriter text in `script.js`
- **Projects**: Update project details, links, and descriptions
- **Experience**: Update work experience and company information
- **Contact**: Update email and phone number

### Social Links
Update the navigation section in `index.html`:
- GitHub profile URL
- LinkedIn profile URL
- Resume file path

### Styling
The terminal theme can be customized in `style.css`:
- Color variables in `:root`
- Animation timings
- Font sizes and spacing

## 🎯 Pages Overview

### Home (`/`)
- Terminal-style typewriter animation
- Personal introduction
- Social media links
- Command-style navigation hints

### Projects (`/projects`)
- Project showcase with terminal cards
- Technology stack tags
- GitHub and live demo links
- Category-based organization

### Experience (`/experience`)
- Work history timeline
- Company information and roles
- Key achievements and technologies
- Terminal log-style presentation

### Contact (`/contact`)
- Nano editor-style contact form
- Alternative contact methods
- Terminal-style form validation

## ⌨️ Keyboard Shortcuts

- **Ctrl/Cmd + 1**: Navigate to Home
- **Ctrl/Cmd + 2**: Navigate to Projects
- **Ctrl/Cmd + 3**: Navigate to Experience
- **Ctrl/Cmd + 4**: Navigate to Contact

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation

## 🎨 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload these files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your portfolio will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the folder to [Netlify](https://netlify.com)
2. Your portfolio will be deployed instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## 🔧 Troubleshooting

### Fonts Not Loading
- Check your internet connection
- The fonts are loaded from Google Fonts

### Animations Not Working
- Make sure JavaScript is enabled in your browser
- Check the browser console for any errors

### Styling Issues
- Clear your browser cache
- Make sure all files are in the same directory

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using HTML, CSS, and JavaScript** 