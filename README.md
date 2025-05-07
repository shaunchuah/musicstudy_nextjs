# MUSIC IBD Study Website

A comprehensive NextJS website for the MUSIC and Mini-MUSIC (Mitochondrial DAMPs as mechanistic biomarkers of gut mucosal inflammation in adults and children) IBD research study.

**Live site:** [https://www.musicstudy.uk](https://www.musicstudy.uk)

## 📖 About the Project

This website serves as the online hub for the MUSIC and Mini-MUSIC IBD studies, providing:

- Study information for adult and pediatric participants with Inflammatory Bowel Disease (IBD)
- Latest research results and publications
- Patient-led research initiatives
- Resources for patients and researchers
- Information about participating centers across Scotland

The MUSIC study is a multi-centre, prospective, longitudinal, observational cohort study of 250 IBD patients, which has been running since 2020 in Glasgow, Edinburgh and Dundee to identify newly diagnosed patients with IBD. Participants enter the study in a state of active UC or CD and receive follow-up every 3 months for a year with clinical assessment and blood sampling. Every participant has a baseline colonoscopy and a follow-up colonoscopy at approximately 6 and 12 months to assess for mucosal healing. The Mini-MUSIC study is similar but focusing on children with IBD.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Google Fonts (Merriweather, Roboto)
- **Deployment**: [Vercel](https://vercel.com/)

## ✨ Key Features

- Responsive design for all device sizes
- PDF viewers for study documentation
- Audio players for research summaries
- Interactive UI components
- Optimized media loading
- Accessibility features

## 📁 Project Structure

- `components/` - Reusable UI components (Layout, Cards, PDF viewers, etc.)
- `pages/` - Next.js routes and page components
- `public/` - Static assets (images, PDFs, audio files)
  - `static/` - Organized media files
  - `static/audio/` - Audio recordings
  - `static/files/` - Downloadable documents
  - `static/images/` - Site imagery
- `styles/` - Global CSS and Tailwind configuration
- `design/` - Design assets and source files

## 💻 Development Setup

1. Ensure you have Node.js installed
2. Clone the repository
3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Build for Production

```sh
npm run build
npm run start
```

## 👥 Contributing

For website-related queries, please contact Dr. Shaun Chuah via email <shaun.chuah@glasgow.ac.uk>.

## ⚖️ License

All rights reserved. This project contains research information and assets specific to the MUSIC IBD studies.
