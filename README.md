# SmileBright Dental Website

A modern, responsive dental practice website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🦷 Complete dental practice website
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS and shadcn/ui
- 📅 Appointment booking system
- 📝 Blog section for dental health tips
- 🖼️ Gallery showcase
- 💰 Transparent pricing page
- 📞 Contact and emergency care information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd smilebrightdental
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
smilebrightdental/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── book-appointment/  # Booking page
│   ├── gallery/           # Gallery page
│   ├── pricing/           # Pricing page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   └── footer.tsx        # Footer component
├── lib/                  # Utility functions
└── public/               # Static assets
\`\`\`

## Customization

### Colors
The website uses a sky blue color scheme. To change colors, update the Tailwind config:

\`\`\`typescript
// tailwind.config.ts
colors: {
  primary: '#6EC1E4', // Sky blue
  // Add your custom colors
}
\`\`\`

### Content
- Update practice information in `components/footer.tsx`
- Modify services in `app/services/page.tsx`
- Change pricing in `app/pricing/page.tsx`
- Update team information in `app/about/page.tsx`

### Images
Replace placeholder images in the `public/` directory with your actual photos:
- Practice photos
- Team headshots
- Before/after treatment photos
- Facility images

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Environment Variables

Create a `.env.local` file for environment variables:

\`\`\`bash
# Contact form email service
NEXT_PUBLIC_CONTACT_EMAIL=info@smilebrightdental.co.uk

# Google Maps API (optional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
\`\`\`

## Features to Add

- [ ] Contact form email integration
- [ ] Google Maps integration
- [ ] Calendar booking system (Calendly)
- [ ] WhatsApp chat widget
- [ ] Google Analytics
- [ ] SEO optimization
- [ ] Blog CMS integration
- [ ] Patient portal
- [ ] Online payment system

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)



