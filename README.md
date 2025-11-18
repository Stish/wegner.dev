# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing your CV, projects, and skills.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Clean and professional design with smooth animations
- **Easy to Customize** - Simple HTML/CSS/JS structure
- **GitHub Pages Ready** - Easy deployment to GitHub Pages

## 📁 Structure

```
wegner_dev/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript for interactions
└── README.md           # This file
```

## 🎨 Customization

### 1. Update Personal Information

Edit `index.html` and replace:
- **Your Name** - Replace "Your Name" with your actual name
- **Tagline** - Update "Software Engineer | Developer | Problem Solver"
- **About Me** - Write your own introduction
- **Skills** - Add/remove skill tags in the skills section
- **Experience** - Update with your actual work experience
- **Education** - Add your educational background
- **Projects** - Update project cards with your actual projects
- **Contact Info** - Add your email, GitHub, and LinkedIn links

### 2. Update Colors

Edit `styles.css` and modify the CSS variables in `:root`:
```css
--primary-color: #2563eb;
--secondary-color: #1e40af;
--accent-color: #60a5fa;
```

### 3. Add Your CV PDF

1. Place your CV PDF in the project folder
2. Update the download link in `index.html`:
```html
<a href="your-cv-filename.pdf" class="btn btn-primary" download>Download Full CV (PDF)</a>
```

## 🌐 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it `yourusername.github.io` (replace with your actual username)
   - Make it public
   - Click "Create repository"

2. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop: `index.html`, `styles.css`, `script.js`, `README.md`
   - Add your CV PDF if you have one
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at `https://yourusername.github.io`

### Method 2: Using Git Command Line

1. **Initialize Git (if not already done)**
   ```bash
   git init
   ```

2. **Add Files**
   ```bash
   git add .
   git commit -m "Initial commit: Personal portfolio website"
   ```

3. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   ```

4. **Push to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages** (same as Method 1, step 3)

## 🛠️ Local Development

Simply open `index.html` in your web browser to preview locally.

For a better development experience with live reload, you can use:

**Python:**
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`

**VS Code:**
- Install "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

## 📝 Tips for Customization

1. **Profile Picture**: Add an `<img>` tag in the hero section to display your photo
2. **Dark Mode**: Add a dark mode toggle by creating alternate CSS variables
3. **More Projects**: Duplicate project cards and update content
4. **Blog Section**: Add a new section for blog posts or articles
5. **Contact Form**: Integrate services like Formspree or EmailJS for a working contact form

## 🎯 Next Steps

1. Replace all placeholder text with your actual information
2. Add your projects with links to GitHub repositories
3. Upload your CV PDF
4. Add professional profile picture
5. Test on different devices
6. Deploy to GitHub Pages
7. Share your portfolio link!

## 📄 License

Free to use and modify for your personal portfolio.

---

**Good luck with your portfolio! 🚀**
