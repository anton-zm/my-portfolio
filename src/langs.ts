import { store } from './store';

const en = {
    contacts: 'Contacts',
    projects: 'Projects',
    certificates: 'Certificates',
    portfolio: 'My Portfolio',
    web_dev: 'Web Development',
    my_gh: 'My GitHub',
    stack: 'My Stack',
    watch: 'Watch in browser',
    nda: 'Sorry, NDA project'
};

type Lingo = typeof en;

const ru: Lingo = {
    contacts: 'Контакты',
    projects: 'Проекты',
    certificates: 'Сертификаты',
    portfolio: 'Портфолио',
    web_dev: 'Вэб-разработка',
    my_gh: 'Мой GitHub',
    stack: 'Умею в...',
    watch: 'Смотреть в браузере',
    nda: 'Сожалеем, NDA проект'
};

const langs = { ru, en };

export const useLang = () => {
    return langs[store.Lang];
};
