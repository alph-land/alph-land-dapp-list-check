// Type-check test for DappsDirectoryItem (/api/dapps-directory) and FeaturedDapp (/api/featured-dapps), sorted by isFeatured
import type { DappsDirectoryItem, FeaturedDapp } from '@alphland/dapps';

// Simulate /api/dapps-directory response
const directoryItem: DappsDirectoryItem = {
  slug: 'alphbanx',
  isFeatured: true,
  name: 'AlphBanx',
  short_description: 'Borrowing & lending on Alephium',
  tags: ['DeFi'],
  verified: true,
  media: {
    logoUrl: 'https://raw.githubusercontent.com/example/alphbanx-logo.png',
    bannerUrl: 'https://raw.githubusercontent.com/example/alphbanx-banner.png',
    previewUrl: 'https://raw.githubusercontent.com/example/alphbanx-preview.png',
    gallery: [],
  },
};

// Simulate /api/featured-dapps response
const featuredDapp: FeaturedDapp = {
  name: 'NTV Overall Dashboard',
  short_description: 'Analytics dashboard for Alephium',
  tags: ['Analytics'],
  verified: false,
  media: {
    logoUrl: 'https://raw.githubusercontent.com/example/ntv-logo.png',
    bannerUrl: 'https://raw.githubusercontent.com/example/ntv-banner.png',
    previewUrl: 'https://raw.githubusercontent.com/example/ntv-preview.png',
    gallery: [],
  },
};

// Sort dapps-directory by isFeatured (featured on top)
const items: DappsDirectoryItem[] = [
  { slug: 'ntv-overalldashboard', isFeatured: false, name: 'NTV Overall Dashboard' },
  { slug: 'alphbanx', isFeatured: true, name: 'AlphBanx' },
];

const sorted = [...items].sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));

console.log('DappsDirectoryItem type check:', directoryItem.slug, '| isFeatured:', directoryItem.isFeatured);
console.log('FeaturedDapp type check:', featuredDapp.name);
console.log('Sorted (featured first):', sorted.map(d => `${d.name}(${d.isFeatured})`).join(', '));
