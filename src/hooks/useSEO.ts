import { useEffect } from 'react';

export const SITE_URL = 'https://paylancex.com';

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: object[];
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Axoryn Technology Pvt. Ltd.',
  alternateName: 'Axoryn Technology',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Axoryn Technology Pvt. Ltd. is an Indian technology company building next-generation digital products, secure financial technology, AI-powered software, and scalable platforms for the future.',
  founder: {
    '@type': 'Person',
    name: 'Aryan Gupta',
    jobTitle: 'Founder & CEO',
  },
  brand: {
    '@type': 'Brand',
    name: 'PaylanceX',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sabji Mandi Gali, Madhuban, Mau',
    addressLocality: 'Mau',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  email: 'support@paylancex.com',
  sameAs: ['https://www.linkedin.com/in/aryan-gupta-823b74252'],
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PaylanceX',
  alternateName: 'PaylanceX',
  url: SITE_URL,
  description:
    'PaylanceX is an innovative fintech startup developed by Axoryn Technology Pvt. Ltd., an Indian technology company building secure and modern digital solutions.',
  publisher: {
    '@type': 'Organization',
    name: 'Axoryn Technology Pvt. Ltd.',
  },
};

export const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aryan Gupta',
  jobTitle: 'Founder & CEO',
  url: `${SITE_URL}/founder`,
  image: `${SITE_URL}/aryan-gupta.jpg`,
  worksFor: {
    '@type': 'Organization',
    name: 'Axoryn Technology Pvt. Ltd.',
  },
  sameAs: ['https://www.linkedin.com/in/aryan-gupta-823b74252'],
};

export function useSEO({ title, description, canonical, ogType, ogImage, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'title', title);
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType || 'website');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    if (canonical) {
      upsertLink('canonical', canonical);
      upsertMeta('property', 'og:url', canonical);
    }
    if (ogImage) {
      upsertMeta('property', 'og:image', ogImage);
      upsertMeta('name', 'twitter:image', ogImage);
    }
    if (jsonLd) {
      jsonLd.forEach((schema, i) => {
        upsertJsonLd(`jsonld-${i}`, schema);
      });
    }
  }, [title, description, canonical, ogType, ogImage, jsonLd]);
}
