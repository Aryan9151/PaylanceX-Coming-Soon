import { useEffect } from 'react';

/* ----------------------------- Types ----------------------------- */

type SEOConfig = {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
  ogImage?: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
};

const SITE_URL = 'https://paylancex.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/WhatsApp_Image_2026-05-27_at_12.55.50_AM-removebg-preview.png`;

/* ----------------------------- Helpers ----------------------------- */

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: object | object[]) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

/* ----------------------------- Hook ----------------------------- */

export function useSEO(config: SEOConfig) {
  const { title, description, canonical, ogType = 'website', ogImage = DEFAULT_OG_IMAGE, noIndex = false, jsonLd } = config;

  useEffect(() => {
    document.title = title;

    // Standard meta
    setMeta('name', 'description', description);

    // Robots
    if (noIndex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      removeMeta('name', 'robots');
    }

    // Canonical
    setLink('canonical', canonical);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', 'PaylanceX');
    setMeta('property', 'og:locale', 'en_US');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // JSON-LD
    if (jsonLd) {
      setJsonLd('page-jsonld', jsonLd);
    }

    return () => {
      removeJsonLd('page-jsonld');
    };
  }, [title, description, canonical, ogType, ogImage, noIndex, jsonLd]);
}

/* ----------------------------- Shared JSON-LD Schemas ----------------------------- */

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PaylanceX',
  url: SITE_URL,
  logo: `${SITE_URL}/WhatsApp_Image_2026-05-27_at_12.55.50_AM-removebg-preview.png`,
  description:
    'PaylanceX is a technology company building thoughtful, reliable, and future-ready products.',
  founder: {
    '@type': 'Person',
    name: 'Aryan Gupta',
    jobTitle: 'Founder & CEO',
  },
  sameAs: ['https://www.linkedin.com/in/aryan-gupta-823b74252'],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PaylanceX',
  url: SITE_URL,
  description:
    'PaylanceX — building the future of technology. Something extraordinary is coming.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/founder`,
    'url-template': `${SITE_URL}/founder`,
  },
};

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aryan Gupta',
  jobTitle: 'Founder & CEO',
  worksFor: {
    '@type': 'Organization',
    name: 'PaylanceX',
  },
  url: `${SITE_URL}/founder`,
  image: `${SITE_URL}/WhatsApp_Image_2026-07-16_at_10.29.36_AM.jpeg`,
  sameAs: ['https://www.linkedin.com/in/aryan-gupta-823b74252'],
};

export { SITE_URL };
