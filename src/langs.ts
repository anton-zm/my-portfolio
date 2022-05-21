import { useStore } from "./store/use-store"

const en = {
    contacts: 'Contacts',
    projects: 'Projects',
    certificates: 'Certificates',
    portfolio: 'My portfolio',
    web_dev: 'Web development',
    my_gh: 'My GitHub'
}

type Lingo = typeof en

const ru: Lingo = {
    contacts: 'Контакты',
    projects: 'Проекты',
    certificates: 'Сертификаты',
    portfolio: 'Портфолио',
    web_dev: 'Вэб-разработка',
    my_gh: 'Мой GitHub'
}

const langs = { ru, en }

export const useLang = () => {
    const store = useStore()
    return langs[store.Lang]
}