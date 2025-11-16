# Anurag Dangi - Portfolio Website

An advanced, premium portfolio website showcasing DevOps engineering excellence from an IIT Patna graduate.

## 🚀 Advanced Features

### 🎨 **Visual Excellence**
- **Particle.js Animation**: Interactive particle system in hero section with dynamic hover effects
- **Dark Mode Toggle**: Seamless theme switching with localStorage persistence
- **Custom Cursor**: Advanced cursor with follower effect (desktop only)
- **Gradient Color Scheme**: Sophisticated navy blue with gold accents
- **Glassmorphism Effects**: Modern frosted glass aesthetics

### 🎬 **Advanced Animations**
- **Counter Animations**: Animated statistics with Intersection Observer
- **Progress Bars**: Animated skill proficiency indicators with shimmer effects
- **Multi-phrase Typing Effect**: Dynamic text rotation in hero section
- **Scroll-triggered Animations**: Elements fade in as you scroll
- **Parallax Scrolling**: Smooth depth effect on hero section
- **Micro-interactions**: Subtle hover and click animations throughout

### 💎 **Premium Design Elements**
- **IIT Badge**: Highlighted educational achievement
- **Skill Proficiency Bars**: Detailed percentage-based skill indicators
- **Timeline Visualization**: Elegant career progression display
- **Responsive Grid Layouts**: Optimized for all screen sizes
- **Custom Typography**: Playfair Display for elegant headings

### ⚡ **Technical Sophistication**
- **Intersection Observer API**: Efficient scroll-based animations
- **requestAnimationFrame**: Smooth 60fps animations
- **LocalStorage Integration**: Theme preference persistence
- **Performance Optimized**: Lazy loading and efficient rendering
- **Modular JavaScript**: Clean, maintainable code structure

## 📋 Sections

- **Hero**: Eye-catching introduction with animated floating icons
- **About**: Professional summary with key statistics
- **Skills**: Comprehensive technical skills organized by category
- **Experience**: Detailed work history with timeline visualization
- **Education**: Academic background
- **Certifications**: Professional certifications with icons
- **Contact**: Multiple ways to get in touch

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better structure
- **CSS3**: Modern styling with custom properties, flexbox, and grid
- **JavaScript**: Vanilla JS for interactivity and animations
- **Font Awesome**: Icons for visual enhancement
- **Google Fonts**: Inter font family for beautiful typography

## 📦 Project Structure

```
portfolio_website/
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # Documentation
```

## 🐳 Docker Deployment (Production Ready)

### Quick Start

```bash
# Using Docker Compose (Recommended)
docker-compose up -d

# Access at http://localhost:8080
```

### Manual Docker Build

```bash
# Build the image
docker build -t anurag-portfolio:latest .

# Run the container
docker run -d -p 8080:80 --name anurag-portfolio anurag-portfolio:latest

# Check status
docker ps
docker logs anurag-portfolio
```

### Features
- ✅ Nginx web server (Alpine Linux)
- ✅ Optimized for production
- ✅ Gzip compression enabled
- ✅ Security headers configured
- ✅ Health checks included
- ✅ Multi-stage build
- ✅ Minimal image size

## 🚀 Alternative Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Option 2: Netlify

1. Visit [netlify.com](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop your project folder
4. Your site will be live instantly with a custom URL
5. Optional: Connect to GitHub for automatic deployments

### Option 3: Vercel

1. Visit [vercel.com](https://vercel.com/)
2. Sign up or log in
3. Import your GitHub repository or drag and drop files
4. Deploy with one click
5. Get automatic HTTPS and global CDN

### Option 4: Traditional Web Hosting

1. Upload all files to your web server via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Access via your domain name

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... other variables */
}
```

### Content

Update the content in `index.html`:
- Personal information in the Hero section
- Summary in the About section
- Skills, experience, education, and certifications sections
- Contact information

### Animations

Modify animation settings in `script.js`:
- Typing speed
- Scroll effects
- Fade-in timings

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Local Development

1. Clone or download the repository
2. Open `index.html` in your browser
3. That's it! No build process required

For live reload during development, you can use:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📝 Performance Tips

- All resources load from CDN for faster access
- Minimal JavaScript for better performance
- CSS is optimized for rendering speed
- Images should be optimized before adding

## 🤝 Contact

- **Email**: anurag.dangi2025@gmail.com
- **Phone**: +91 9522850905
- **LinkedIn**: [linkedin.com/in/anurag-dangi](https://linkedin.com/in/anurag-dangi)

## 📄 License

This project is open source and available for personal use. Feel free to use it as a template for your own portfolio!

## 🎯 Advanced Features Implemented

- [x] Dark mode toggle with localStorage
- [x] Particle.js interactive background
- [x] Animated counter statistics
- [x] Skill proficiency progress bars
- [x] Multi-phrase typing effect
- [x] Custom cursor with follower
- [x] Advanced scroll animations
- [x] Parallax effects
- [x] IIT Patna graduate badge

## 🔮 Future Enhancements

- [ ] Include blog section
- [ ] Add project portfolio showcase with GitHub integration
- [ ] Integrate contact form with backend API
- [ ] Add testimonials section
- [ ] Include downloadable resume PDF
- [ ] Add Google Analytics tracking
- [ ] Create case studies section

---

**Built with ❤️ by Anurag Dangi**

