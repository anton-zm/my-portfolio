export type Lang = 'ru' | 'en';

interface LangText {
    ru: string;
    en: string;
}
export interface Project {
    title: LangText;
    description: LangText;
    stack: string;
    img: string;
    url: string;
    github: string;
    nda: boolean;
}
