import { ui, defaultLang, languages, type Lang, type TranslationKey } from './ui';

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: TranslationKey): string {
    const activeLang = lang in ui ? lang : defaultLang;
    return ui[activeLang]?.[key] || ui[defaultLang][key] || key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslatedPath(lang: Lang = defaultLang) {
  return function translatePath(path: string, l: Lang = lang) {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    if (l === defaultLang) {
      return cleanPath;
    }
    return `/${l}${cleanPath.replace(/\/$/, '')}/`;
  };
}
