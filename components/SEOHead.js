import Head from 'next/head';

export default function SEOHead({ 
  title = "",
  description = "The MUSIC and Mini-MUSIC studies are working with adults and children across Scotland to better understand inflammatory bowel disease (IBD). By exploring what causes the disease and how it behaves over time, the studies aim to improve how IBD is diagnosed, treated, and managed.",
  canonical,
  ogImage = "https://www.musicstudy.uk/static/images/ogimage.png"
}) {
  const siteTitle = title ? `${title} | MUSIC IBD Study` : "MUSIC IBD Study";
  const url = canonical || (typeof window !== "undefined" ? window.location.href : "");
  
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="IBD, inflammatory bowel disease, Crohn's disease, ulcerative colitis, research, Scotland, gut health, MUSIC study, Mini-MUSIC" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="MUSIC IBD Study" />
      <meta property="og:image:type" content="image/png" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}