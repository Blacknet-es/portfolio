import type { APIRoute } from 'astro';
import { getPortfolioData } from '../utils/data';

export const GET: APIRoute = async () => {
  const { home, career, projects, tech } = getPortfolioData('es');

  const siteUrl = (home.siteUrl || 'https://your-domain.com').replace(/\/$/, '');

  const techCategoriesStr = tech.categories
    ? tech.categories
        .map((cat: any) => `- **${cat.title}:** ${cat.skills.map((s: any) => s.name).join(', ')}`)
        .join('\n')
    : '';

  const careerStr = Array.isArray(career)
    ? career
        .map((item: any) => `- **${item.role}** — ${item.company} (${item.period})\n  * ${item.description}`)
        .join('\n')
    : '';

  const projectsStr = Array.isArray(projects)
    ? projects
        .map((proj: any) => `- **${proj.title}:** ${proj.description}${proj.link ? ` (${proj.link})` : ''}`)
        .join('\n')
    : '';

  const socialsStr = Array.isArray(home.socials)
    ? home.socials
        .filter((s: any) => s.url && s.url !== '#' && s.url !== '')
        .map((s: any) => `- **${s.name}:** ${s.url}`)
        .join('\n')
    : '';

  const markdown = `# ${home.name}

> ${home.description}

## Overview
${home.name} is a ${home.jobTitle || 'Ingeniero de Software'}${home.location ? ` based in ${home.location}` : ''}. ${home.description}

## Key Information
${home.location ? `- **Location:** ${home.location}` : ''}
${home.availability ? `- **Availability:** ${home.availability}` : ''}
- **Portfolio:** ${siteUrl}
- **Multilingual Support:** Spanish (es) at ${siteUrl}/ and English (en) at ${siteUrl}/en/
${home.resumeUrl ? `- **Resume:** ${home.resumeUrl}` : ''}

## Technical Skills & Categories
${techCategoriesStr}

## Experience & Education
${careerStr}

## Featured Projects
${projectsStr}

## Contact & Links
- **Website:** ${siteUrl}
${socialsStr}
`;

  return new Response(markdown.trim() + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
