// You can add more languages here!
export const languages = {
  es: {
    name: 'Español',
    code: 'es',
    label: 'ES',
  },
  en: {
    name: 'English',
    code: 'en',
    label: 'EN',
  },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.career': 'Trayectoria',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',

    // Hero / Home
    'home.greeting': "Hola, soy",
    'home.viewResume': 'Ver CV',
    'home.resumeSubtext': 'Abre en Google Docs',

    // Career
    'career.title': 'Trayectoria',
    'career.subtitle': 'Línea de tiempo de mi trayectoria profesional, roles, educación e hitos.',
    'career.filter.all': 'Todos',
    'career.filter.work': 'Trabajo',
    'career.filter.education': 'Educación',
    'career.seeMore': 'Ver más',
    'career.badge.fullTime': 'Tiempo Completo',
    'career.badge.internship': 'Pasantía',
    'career.badge.student': 'Estudiante',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Una muestra de mis proyectos destacados, aplicaciones y contribuciones.',
    'projects.viewProject': 'Ver Proyecto',

    // Skills & Tech
    'tech.title': 'Habilidades y Herramientas',
    'tech.subtitle': 'Desglose de mis habilidades y herramientas, categorizadas por dominio y nivel de dominio.',
    'tech.expert': 'Experto',
    'tech.proficient': 'Competente',
    'tech.beginner': 'Principiante',

    // Contact
    'contact.title': 'Contáctame',
    'contact.subtitle': 'No dudes en escribirme. Siempre estoy abierto a discutir nuevos proyectos y oportunidades.',
    'contact.preferred': 'Preferencia:',
    'contact.or': 'o',
    'contact.responseTime': '— suelo responder en 24 horas.',

    // Footer
    'footer.builtWith': 'Construido con',

    // Language Toggle
    'lang.switch': 'Cambiar idioma',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.career': 'Career',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero / Home
    'home.greeting': "Hello, I'm",
    'home.viewResume': 'View Resume',
    'home.resumeSubtext': 'Opens in Google Docs',

    // Career
    'career.title': 'Career',
    'career.subtitle': 'A timeline of my professional journey, roles, education, and milestones.',
    'career.filter.all': 'All',
    'career.filter.work': 'Work',
    'career.filter.education': 'Education',
    'career.seeMore': 'See More',
    'career.badge.fullTime': 'Full time job',
    'career.badge.internship': 'Internship',
    'career.badge.student': 'Student',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'A showcase of my featured projects, applications, and technical work.',
    'projects.viewProject': 'View Project',

    // Skills & Tech
    'tech.title': 'Skills & Tools',
    'tech.subtitle': 'Breakdown of my skills and tools, categorized by domain and proficiency',
    'tech.expert': 'Expert',
    'tech.proficient': 'Proficient',
    'tech.beginner': 'Beginner',

    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': "Feel free to reach out. I'm always open to discussing new projects and opportunities.",
    'contact.preferred': 'Preferred:',
    'contact.or': 'or',
    'contact.responseTime': '— I typically respond within 24 hours.',

    // Footer
    'footer.builtWith': 'Built using',

    // Language Toggle
    'lang.switch': 'Switch language',
  },
} as const;

export type TranslationKey = keyof typeof ui[typeof defaultLang];
