export type Language = 'en' | 'zh';

export interface LocalizationContext {
    currentLanguage: Language;
    setLanguage: (lang: Language) => void;
    translate: (key: string) => string;
}
