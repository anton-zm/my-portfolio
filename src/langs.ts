import { useStore } from "./store/use-store"

const en = {
    contacts: 'Contacts',
    projects: 'Projects',
    certificates: 'Certificates',
    portfolio: 'My Portfolio',
    web_dev: 'Web Development',
    my_gh: 'My GitHub',
    stack: 'My Stack'
}

type Lingo = typeof en

const ru: Lingo = {
    contacts: 'Контакты',
    projects: 'Проекты',
    certificates: 'Сертификаты',
    portfolio: 'Портфолио',
    web_dev: 'Вэб-разработка',
    my_gh: 'Мой GitHub',
    stack: 'Умею в...'
}

const langs = { ru, en }

export const useLang = () => {
    const store = useStore()
    return langs[store.Lang]
}