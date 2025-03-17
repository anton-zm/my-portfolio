import pxm from '../assets/images/projects/pointx-m.jpg';
import px from '../assets/images/projects/pointx.jpg';
import gl from '../assets/images/projects/gl.webp';
import osio from '../assets/images/projects/osio.webp';
import govor from '../assets/images/projects/govor.webp';
import fastbox from '../assets/images/projects/fastbox.webp';
import subj from '../assets/images/projects/this.jpg';
import cancer from '../assets/images/projects/cancer.jpg';
import stv34 from '../assets/images/projects/stvorka34.jpg';
import a100a from '../assets/images/projects/a100a.jpg';
import cg from '../assets/images/projects/cg2.webp';
import cable from '../assets/images/projects/cableman.webp';
import { Project } from '../types';

export const projects: Project[] = [
    {
        title: {
            ru: 'Сайт провайдера',
            en: 'Website for telecom provider'
        },
        description: {
            ru: 'Сайт для регионального интернет и ТВ провайдера',
            en: 'Website for regional telecom provider'
        },
        stack: 'NextJS, MobX, Styled Components',
        img: gl,
        url: 'https://goodline.ru/',
        github: '',
        nda: true
    },
    {
        title: {
            ru: 'Сайт для маркетплейса',
            en: 'Marketplace Website'
        },
        description: {
            ru: 'Сайт крупного международного маркетплейса',
            en: 'Website for international marketplace'
        },
        stack: 'NextJS, MobX, CSS Modules, Typescript',
        img: fastbox,
        url: 'https://fastbox.su/',
        github: '',
        nda: true
    },
    {
        title: {
            ru: 'Сайт производителя',
            en: 'Website for brand'
        },
        description: {
            ru: 'Сайт для производителя ноутбуков OSiO',
            en: 'Website for OSiO'
        },
        stack: 'NextJS, MobX, Typescript',
        img: osio,
        url: 'https://osio.ru/',
        github: '',
        nda: true
    },
    {
        title: {
            ru: 'Сайт компании',
            en: 'Website'
        },
        description: {
            ru: 'Сайт для логопедического центра',
            en: 'Website for speech therapy center'
        },
        stack: 'NextJS, MobX, Anime.js, Styled Components, Typescript',
        img: govor,
        url: 'https://govorysha.ru/',
        github: '',
        nda: true
    },
    {
        title: {
            ru: 'Раздел сайта',
            en: 'Website Section'
        },
        description: {
            ru: 'Один из разделов сайта телеком компании',
            en: 'Telecom company website section'
        },
        stack: 'Nuxt, Pinia',
        img: cable,
        url: 'https://tvmap.cableman.ru/',
        github: '',
        nda: true
    },
    {
        title: {
            ru: 'Сайт компании',
            en: 'Website'
        },
        description: {
            ru: 'Сайт крупной IT компании',
            en: 'IT company website'
        },
        stack: 'NextJs, Typescript, MobX, Styled Components',
        img: cg,
        url: 'https://www.communigate.ru/',
        github: '',
        nda: true
    },
    {
        title: {
            ru: 'Мобильное приложение',
            en: 'Mobile App'
        },
        description: {
            ru: 'Мобильное приложение для прохождения маркетинговых опросов за вознаграждение',
            en: 'Mobile app for passing marketing surveys for a reward'
        },
        stack: 'React Native, Typescript, MobX',
        img: pxm,
        url: '/',
        github: '',
        nda: true
    },
    {
        title: {
            ru: 'Личный кабинет',
            en: 'Personal Area'
        },
        description: {
            ru: 'Личный кабинет финансового вэб-приложения',
            en: 'Financial Web App Personal Area'
        },
        stack: 'React, Typescript, MobX, Styled Components, Chart.js',
        img: px,
        url: 'https://dash.point-x.co/',
        github: '',
        nda: true
    },
    {
        title: {
            ru: 'Сайт-портфолио',
            en: 'This website'
        },
        description: {
            ru: 'Сайт портфолио вэб разработчика.',
            en: "Web developer's website portfolio"
        },
        stack: 'React, MobX, Typescript',
        img: subj,
        url: '/',
        github: 'https://github.com/anton-zm/portfolio',
        nda: false
    },
    {
        title: {
            ru: 'Сайт фонда НКО',
            en: 'Charity foundation website'
        },
        description: {
            ru: 'Командная работа по созданию сайта для благотворительного фонда.',
            en: 'Teamwork to create a website for a charitable foundation.'
        },
        stack: 'Nuxt.js',
        img: cancer,
        url: 'https://raklechitsa.ru/',
        github: 'https://github.com/anton-zm/rak-lechitsa',
        nda: false
    },
    {
        title: {
            ru: 'Сайт оконной компании',
            en: 'Windows ann doors company website'
        },
        description: {
            ru: 'Сайт для организации по производству и установке окон и дверей. Содержит около 100 страниц.',
            en: 'Website for the organization for the production and installation of windows and doors. Contains about 100 pages.'
        },
        stack: 'React, Next.js, Typescript, MongoDB, Express.js',
        img: stv34,
        url: 'https://stvorka34.ru',
        github: 'https://github.com/anton-zm/stvorka34-next',
        nda: true
    },
    {
        title: {
            ru: 'Одностраничный сайт',
            en: 'One-page website'
        },
        description: {
            ru: 'Работа для портфолио. Одностраничный сайт многоквартирного дома.',
            en: 'Pet project for portfolio. One-page website for an apartment building.'
        },
        stack: 'Nuxt.js',
        img: a100a,
        url: 'https://a100a.netlify.app/',
        github: 'https://github.com/anton-zm/romanov-nuxt',
        nda: false
    }
];
