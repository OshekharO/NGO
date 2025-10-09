# Portfolio Website

A modern, responsive portfolio website built with Bootstrap 5 featuring dark/light theme toggle, GitHub API integration, and optimized for SEO and mobile devices.

## 🌟 Features

- **Modern Design**: Clean, professional layout with gradient header and card-based components
- **Dark/Light Theme**: Toggle between themes with persistent user preference
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices
- **GitHub Integration**: Automatically fetches and displays repositories with 40+ stars
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Fast Loading**: Optimized performance with minimal dependencies
- **Professional Resume**: Direct PDF download functionality

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, animations, and responsive design
- **Bootstrap 5** - Responsive framework and components
- **JavaScript ES6+** - Dynamic functionality and API integration
- **Google Fonts** - Inter font family for consistent typography
- **Bootstrap Icons** - Professional icon set
- **GitHub API** - Dynamic project loading

## 📁 File Structure

```
portfolio/
│
├── index.html              # Main portfolio website
├── resume.pdf     # Resume PDF file
├── assets/                 # Static assets folder
│   ├── images/             # Profile images and screenshots
│   └── favicon/            # Website favicon
└── README.md               # Project documentation
```

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Ensure** `resume.pdf` is in the root directory for resume download functionality
3. **Open** `index.html` in a web browser
4. **Deploy** to any web hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 📱 Sections

### 1. Header
- Professional gradient background
- Centered profile avatar
- Name and title display

### 2. About Me
- Personal introduction
- Skills overview cards
- Professional background

### 3. Resume
- Education timeline
- Work experience
- Skills with progress indicators
- Download resume button

### 4. Portfolio
- Dynamic GitHub repository display
- Filters projects with 40+ stars
- Interactive project cards with hover effects

### 5. Contact
- Contact information display
- Professional social media links

## ⚙️ Customization

### Personal Information
Update the following sections in `index.html`:

```html
<!-- Update these sections with your information -->
<h1 class="display-4 fw-bold mb-3">Your Name</h1>
<p class="lead mb-4">Your Title | Your Specialty</p>

<!-- Contact Information -->
<p class="mb-0">+91-1234567890</p>
<p class="mb-0">your-email@domain.com</p>
```

### GitHub Integration
Replace the GitHub username in the JavaScript:

```javascript
// In the loadGitHubRepos() function
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos?sort=stars&per_page=100');
```

### Resume PDF
1. Replace `resume.pdf` with your resume file
2. Ensure the filename matches in the download function:

```javascript
link.href = 'Your_Resume_Filename.pdf';
link.download = 'Your_Resume_Filename.pdf';
```

### Colors and Themes
Modify CSS custom properties in the `:root` selector:

```css
:root {
  --primary-color: #4361ee;
  --secondary-color: #3f37c9;
  --accent-color: #f72585;
  /* Add your custom colors */
}
```

## 🎨 Theme System

The website features a comprehensive theme system:

- **Light Theme**: Default professional blue color scheme
- **Dark Theme**: Optimized dark mode with proper contrast
- **Auto-detection**: Respects user's system preference
- **Persistent**: Remembers user's theme choice

### Theme Customization
Update both light and dark theme variables:

```css
[data-bs-theme="dark"] {
  --primary-color: #4cc9f0;
  --secondary-color: #4361ee;
  /* Dark theme colors */
}
```

## 🔧 API Integration

### GitHub API
- Fetches user repositories automatically
- Filters for repositories with 40+ stars
- Displays repository name, description, and star count
- Includes direct links to code and live demos

### Error Handling
- Graceful fallback for API failures
- User-friendly error messages
- Loading states for better UX

## 📊 SEO Optimization

- **Meta Tags**: Comprehensive description, keywords, and Open Graph tags
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Accessibility**: ARIA labels, alt text, and keyboard navigation
- **Performance**: Optimized images and efficient code

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- **Fast Loading**: Minimal external dependencies
- **Optimized Assets**: Efficient CSS and JavaScript
- **Responsive Images**: Proper sizing and formats
- **Smooth Animations**: CSS-based transitions

## 🚀 Deployment

### Netlify
1. Drag and drop the folder to Netlify
2. Configure custom domain (optional)
3. Enable form handling if adding contact forms

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Configure custom domain (optional)

### Vercel
1. Connect GitHub repository
2. Automatic deployments on push
3. Custom domain configuration

## 🔄 Updates and Maintenance

### Regular Updates
- Keep Bootstrap and dependencies updated
- Refresh project content regularly
- Update GitHub repositories as new projects gain stars

### Content Management
- Update resume PDF when needed
- Refresh About Me section with new achievements
- Add new skills and experiences

## 📞 Support

For issues or questions:
1. Check the browser console for errors
2. Verify GitHub username in API calls
3. Ensure resume PDF file exists in root directory
4. Test on different devices and browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Saksham Shekher**
- Email: sakshamshekher@outlook.com
- LinkedIn: [linkedin.com/in/oshekher](https://linkedin.com/in/oshekher)
- GitHub: [github.com/OshekharO](https://github.com/OshekharO)

---

**Note**: Remember to update all personal information, links, and the resume file before deploying your live portfolio website.
