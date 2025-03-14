# Khatib Family Practice Website

A professional website for Khatib Family Practice, a family medicine clinic. This is a static HTML/CSS website that can be hosted for free on platforms like GitHub Pages, Netlify, or Vercel.

## Features

- Responsive design for all devices (mobile, tablet, desktop)
- Professional medical practice layout and design
- Modern, clean UI with emphasis on usability
- Contact and appointment request forms
- Patient resources and educational information
- Accessible design following web standards

## Pages

1. **Home**: Main landing page with overview and key features
2. **About Us**: Information about the practice and team
3. **Services**: Detailed information about medical services offered
4. **Patient Resources**: Forms, FAQs, and educational resources
5. **Contact**: Contact information and inquiry form
6. **Appointment Request**: Form to request appointments

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript (vanilla, no frameworks)
- Font Awesome for icons
- Google Fonts for typography

## Deployment Instructions

### Option 1: GitHub Pages (Free)

1. Create a GitHub account if you don't have one
2. Create a new repository named `khatibfamilypractice.github.io`
3. Upload all the files from this project to the repository
4. Go to the repository settings, scroll down to "GitHub Pages" section
5. Set the source to "main" branch and click "Save"
6. Your site will be published at `https://khatibfamilypractice.github.io`

### Option 2: Netlify (Free)

1. Create a Netlify account at [netlify.com](https://www.netlify.com/)
2. Click "New site from Git" or drag and drop the project folder to the Netlify dashboard
3. Configure your deployment settings (no special configuration needed)
4. Your site will be published with a Netlify subdomain
5. You can connect your custom domain `khatibfamilypractice.com` in the site settings

### Option 3: Vercel (Free)

1. Create a Vercel account at [vercel.com](https://vercel.com/)
2. Click "New Project" and import your project from Git or upload the files
3. Configure your deployment settings (no special configuration needed)
4. Your site will be published with a Vercel subdomain
5. You can connect your custom domain `khatibfamilypractice.com` in the project settings

## Custom Domain Setup

To use your custom domain `khatibfamilypractice.com`:

1. Purchase the domain from a domain registrar (e.g., GoDaddy, Namecheap, Google Domains)
2. Follow the instructions from your hosting platform (GitHub Pages, Netlify, or Vercel) to connect your custom domain
3. Update your domain's DNS settings according to the hosting platform's instructions
4. Wait for DNS propagation (may take up to 48 hours)

## Maintenance

This is a static website with no database or server-side code, so maintenance is minimal:

- To update content, simply edit the HTML files
- For design changes, modify the CSS files
- The contact and appointment forms are set up to use Formspree, a free form service. You'll need to replace the placeholder endpoint in the forms with your actual Formspree endpoint.

## Form Setup

The contact and appointment forms use [Formspree](https://formspree.io/), a free service for static websites:

1. Create a free Formspree account
2. Create a new form in your Formspree dashboard
3. Replace the placeholder Formspree endpoint in the HTML forms:
   - In `contact.html`, update the form action attribute
   - In `appointment.html`, update the form action attribute

## Local Development

To work on this site locally:

1. Clone or download this repository
2. Open the files in your favorite code editor
3. Use a local server to preview changes (VS Code Live Server extension works well)
4. Make your desired changes
5. Deploy using one of the options above

## Image Placeholders

This template uses placeholder images that should be replaced with actual images before deployment:

- Replace all `.placeholder-img` images with actual photos of the clinic, doctors, and staff
- Recommended image sizes:
  - Hero image: 1920x1080px
  - Doctor/staff photos: 600x800px or similar portrait ratio
  - Service/feature icons: 200x200px or SVG files

## License

This website is provided for the exclusive use of Khatib Family Practice. 