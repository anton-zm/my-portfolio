export type Lang = 'ru' | 'en'

export interface Project {
    title: string,
    description:string,
    stack: string,
    img: string,
    url: string,
    github: string,
    nda: boolean
}