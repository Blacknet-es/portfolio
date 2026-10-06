import { defaultLang, type Lang } from '../i18n/ui';

const homeModules = import.meta.glob<Record<string, any>>('../data/*/home.json', { eager: true });
const careerModules = import.meta.glob<Record<string, any>>('../data/*/career.json', { eager: true });
const projectsModules = import.meta.glob<Record<string, any>>('../data/*/projects.json', { eager: true });
const techModules = import.meta.glob<Record<string, any>>('../data/*/tech.json', { eager: true });

function getModuleData(modules: Record<string, any>, lang: string, filename: string) {
  const specificPath = `../data/${lang}/${filename}`;
  const defaultPath = `../data/${defaultLang}/${filename}`;

  if (modules[specificPath]) {
    return modules[specificPath].default ?? modules[specificPath];
  }
  if (modules[defaultPath]) {
    return modules[defaultPath].default ?? modules[defaultPath];
  }
  const firstKey = Object.keys(modules)[0];
  return firstKey ? (modules[firstKey].default ?? modules[firstKey]) : null;
}

export function getPortfolioData(lang: Lang | string = defaultLang) {
  return {
    home: getModuleData(homeModules, lang, 'home.json'),
    career: getModuleData(careerModules, lang, 'career.json'),
    projects: getModuleData(projectsModules, lang, 'projects.json'),
    tech: getModuleData(techModules, lang, 'tech.json'),
  };
}
