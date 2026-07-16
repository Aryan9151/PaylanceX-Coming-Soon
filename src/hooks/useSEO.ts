import { useEffect } from 'react';

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
const DEFAULT_OG = `${SITE_URL}/logo.png`;

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

export function useSEO(config: SEOConfig) {
  const {
    title,
    description,
    canonical,
    ogType = 'website',
    ogImage = DEFAULT_OG,
    noIndex = false,
    jsonLd,
  } = config;

  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);

    if (noIndex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      removeMeta('name', 'robots');
    }

    setLink('canonical', canonical);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', 'PaylanceX');
    setMeta('property', 'og:locale', 'en_US');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    if (jsonLd) {
      setJsonLd('page-jsonld', jsonLd);
    }

    return () => {
      removeJsonLd('page-jsonld');
    };
  }, [title, description, canonical, ogType, ogImage, noIndex, jsonLd]);
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PaylanceX',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
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
  alternateName: 'PaylanceX',
  url: SITE_URL,
  description:
    'PaylanceX — building the future of technology. Something extraordinary is coming.',
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
  image: `${SITE_URL}/aryan-gupta.jpg`,
  sameAs: ['https://www.linkedin.com/in/aryan-gupta-823b74252'],
};

export const CONTACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact PaylanceX',
  url: `${SITE_URL}/contact`,
};

export { SITE_URL };
