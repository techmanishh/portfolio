import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Set up __dirname since we are using ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://techmanish.com';

// Read JSON data files
const projectsPath = path.join(__dirname, 'src/data/content/projects.json');
const servicesPath = path.join(__dirname, 'src/data/content/services.json');
const blogPath = path.join(__dirname, 'src/data/content/blog.json');

const projectsData = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
const servicesData = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
const blogData = JSON.parse(fs.readFileSync(blogPath, 'utf8'));

// Define static routes
const staticPages = [
  '',
  '/projects',
  '/services',
  '/blogs',
  '/terms',
  '/privacy'
];

const urls = [];

// Add static pages
staticPages.forEach(p => {
  urls.push(`${DOMAIN}${p}`);
});

// Add dynamic project pages
projectsData.projects.forEach(p => {
  urls.push(`${DOMAIN}/project/${p.id}`);
});

// Add dynamic service pages
servicesData.services.forEach(s => {
  urls.push(`${DOMAIN}/service/${s.id}`);
});

// Add dynamic blog pages
blogData.blogs.forEach(b => {
  urls.push(`${DOMAIN}/blog/${b.id}`);
});

// Generate Sitemap XML structure
const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${url === DOMAIN ? '1.0' : url.includes('/project/') || url.includes('/service/') || url.includes('/blog/') ? '0.7' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to public/sitemap.xml
const outputPath = path.join(__dirname, 'public/sitemap.xml');
fs.writeFileSync(outputPath, xmlContent, 'utf8');

console.log(`[Sitemap] Generated successfully at public/sitemap.xml with ${urls.length} URLs!`);
