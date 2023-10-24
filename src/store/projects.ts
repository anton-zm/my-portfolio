import { Lang, Project } from "../types"
import { useStore } from "./use-store"
import pxm from '../assets/images/projects/pointx-m.jpg'
import px from '../assets/images/projects/pointx.jpg'
import mesto_react from '../assets/images/projects/mesto-react.jpg'
import subj from '../assets/images/projects/this.jpg'
import cancer from '../assets/images/projects/cancer.jpg'
import stv34 from '../assets/images/projects/stvorka34.jpg'
import a100a from '../assets/images/projects/a100a.jpg'
import test1 from '../assets/images/projects/test1.jpg'
import test2 from '../assets/images/projects/mailfit.jpg'
import news from '../assets/images/projects/newsapi.jpg'
import s11 from '../assets/images/projects/sprint11.jpg'
import s10 from '../assets/images/projects/sprint10.jpg'
import s4 from '../assets/images/projects/sprint4.jpg'
import cars from '../assets/images/projects/cars.jpg'
import s2 from '../assets/images/projects/sprint2.jpg'
import cg from '../assets/images/projects/cg2.png'
import cable from '../assets/images/projects/cableman.webp'

type IProjects = Record<Lang, Project[]>

const projects:IProjects = {
    ru: [
      {
        title: 'Раздел сайта',
        description:
          'Один из разделов сайта телеком компании',
        stack: 'Nuxt, Pinia',
        img: cable,
        url: 'https://tvmap.cableman.ru/',
        github: '',
        nda: true
      },
      {
        title: 'Сайт компании',
        description:
          'Сайт IT компании',
        stack: 'NextJs, Typescript, MobX, Styled Components',
        img: cg,
        url: 'https://www.communigate.ru/',
        github: '',
        nda: true
      },
        {
          title: 'Мобильное приложение',
          description:
            'Мобильное приложение для прохождения маркетинговых опросов за вознаграждение',
          stack: 'React Native, Typescript, MobX',
          img: pxm,
          url: '',
          github: '',
          nda: true
        },
        {
          title: 'Личный кабинет',
          description:
            'Личный кабинет финансового вэб-приложения',
          stack: 'React, Typescript, MobX, Styled Components',
          img: px,
          url: 'https://dash.point-x.co/',
          github: '',
          nda: true
        },
        {
          title: 'Социальная сеть',
          description:
            'Учебная работа Яндекс.Практикум по дополнительному курсу React. Социальная сеть, в которой студенты Практикума могут менять свои данные, добавлять и удалять свои картинки, отмечать понравившиеся. Данные хранятся на сервере и добываются при помощи запросов в fetch.',
          stack: 'React',
          img: mesto_react,
          url: 'https://anton-zm.github.io/mesto-react/',
          github: 'https://github.com/anton-zm/mesto-react',
          nda: false
        },
        {
          title: 'Сайт-портфолио',
          description: 'Сайт портфолио вэб разработчика.',
          stack: 'React, Typescript',
          img: subj,
          url: 'http://antonzm.ru/',
          github: 'https://github.com/anton-zm/portfolio',
          nda: false
        },
        {
          title: 'Сайт фонда НКО',
          description:
            'Командная работа по созданию сайта для благотворительного фонда.',
          stack: 'Nuxt.js',
          img: cancer,
          url: 'https://raklechitsa.ru/',
          github: 'https://github.com/anton-zm/rak-lechitsa',
          nda: false
        },
        {
          title: 'Сайт оконной компании',
          description:
            'Сайт для организации по производству и установке окон и дверей. Содержит около 100 страниц. ',
          stack: 'React, Next.js, Typescript, MongoDB, Express.js',
          img: stv34,
          url: 'https://stvorka34.ru',
          github: 'https://github.com/anton-zm/stvorka34-next',
          nda: true
        },
        {
          title: 'Одностраничный сайт',
          description:
            'Работа для портфолио. Одностраничный сайт многоквартирного дома.',
          stack: 'Nuxt.js',
          img: a100a,
          url: 'https://a100a.netlify.app/',
          github: 'https://github.com/anton-zm/romanov-nuxt',
          nda: false
        },
        {
          title: 'Тестовое задание',
          description: 'Тестовое задание по вёрстке и JS',
          stack: 'Nuxt.js',
          img: test1,
          url: 'https://anton-zm.github.io/test-for-mkomov/',
          github: 'https://github.com/anton-zm/test-for-mkomov',
          nda: false
        },
        {
          title: 'Тестовое задание',
          description: 'Тестовое задание по вёрстке и JS',
          stack: 'Nuxt.js, Swiper Slider',
          img: test2,
          url: 'https://nervous-goldwasser-71f821.netlify.app/',
          github: 'https://github.com/anton-zm/test-for-mailfit',
          nda: false
        },
        {
          title: 'Портал новостей',
          description:
            'Учебная работа Яндекс.Практикум. Сервис по поиску новостей по запросу с регистрацией и авторизацией пользователей. Пользователь может сохранить понравившиеся статьи в "Избранное".',
          stack:
            'HTML, CSS, JS, Fetch API, ES6 Классы, RegExp, Webpack, Express.js, MongoDB',
          img: news,
          url: 'https://anton-zm.github.io/news-frontend/',
          github: 'https://github.com/anton-zm/news-frontend',
          nda: false
        },
        {
          title: 'Социальная сеть',
          description:
            'Учебная работа Яндекс.Практикум. Социальная сеть, в которой студенты Практикума могут менять свои данные, добавлять и удалять свои картинки, отмечать понравившиеся. Данные хранятся на сервере и добываются при помощи запросов в fetch.',
          stack: 'HTML, CSS, JS, Fetch API, ES6 Классы, RegExp, Webpack',
          img: s11,
          url: 'https://anton-zm.github.io/sprint-11/',
          github: 'https://github.com/anton-zm/sprint-11',
          nda: false
        },
        {
          title: 'Регулярные выражения',
          description:
            'Учебная работа Яндекс.Практикум. Валидация формы при помощи регулярных выражений.',
          stack: 'JS, RegExp',
          img: s10,
          url: 'https://anton-zm.github.io/sprint-10/',
          github: 'https://github.com/anton-zm/sprint-10',
          nda: false
        },
        {
          title: 'Адаптивная вёрстка',
          description:
            'Учебная работа Яндекс.Практикум. Вёрстка для ПК с использованием методологии БЭМ, Flexbox, Grid.',
          stack: 'HTML, CSS',
          img: s4,
          url: 'https://anton-zm.github.io/sprint-4/',
          github: 'https://github.com/anton-zm/sprint-4',
          nda: false
        },
        {
          title: 'Вёрстка для ПК',
          description:
            'Учебная работа для тренировки. Вёрстка для ПК с использованием методологии БЭМ, Flexbox.',
          stack: 'HTML, CSS',
          img: cars,
          url: 'https://anton-zm.github.io/training-layout/',
          github: 'https://github.com/anton-zm/training-layout',
          nda: false
        },
        {
          title: 'Вёрстка для ПК',
          description:
            'Учебная работа Яндекс.Практикум. Вёрстка для ПК с использованием методологии БЭМ, Flexbox и простых CSS анимаций.',
          stack: 'HTML, CSS',
          img: s2,
          url: 'https://anton-zm.github.io/sprint-2/',
          github: 'https://github.com/anton-zm/sprint-2',
          nda: false
        },
    ],
    en: [
      {
        title: 'Website Section',
        description:
          'Telecom company website section',
        stack: 'Nuxt, Pinia',
        img: cable,
        url: 'https://tvmap.cableman.ru/',
        github: '',
        nda: true
      },
      {
        title: 'Website',
        description:
          'IT company website',
        stack: 'NextJs, Typescript, MobX, Styled Components',
        img: cg,
        url: 'https://www.communigate.ru/',
        github: '',
        nda: true
      },
        {
          title: 'Mobile App',
          description:
            'Mobile app for passing marketing surveys for a reward',
          stack: 'React Native, Typescript, MobX',
          img: pxm,
          url: '/',
          github: '',
          nda: true
        },
        {
          title: 'Personal Area',
          description:
            'Financial Web App Personal Area ',
          stack: 'React, Typescript, MobX, Styled Components',
          img: px,
          url: 'https://dash.point-x.co/',
          github: '',
          nda: true
        },
        {
          title: 'Social Network (React)',
          description:
            'Educational extra React work in Yandex.Practicum. A social network in which the students of the Practicum can change their data, add and delete their pictures, mark their favorites. The data is stored on the server and retrieved using Fetch API requests.',
          stack: 'React',
          img: mesto_react,
          url: 'https://anton-zm.github.io/mesto-react/',
          github: 'https://github.com/anton-zm/mesto-react',
          nda: false
        },
        {
          title: 'This website',
          description: "Web developer's website portfolio ",
          stack: 'React, Typescript',
          img: subj,
          url: 'http://antonzm.ru/',
          github: 'https://github.com/anton-zm/portfolio',
          nda: false
        },
        {
          title: 'Charity foundation website',
          description: 'Teamwork to create a website for a charitable foundation.',
          stack: 'Nuxt.js',
          img: cancer,
          url: 'https://raklechitsa.ru/',
          github: 'https://github.com/anton-zm/rak-lechitsa',
          nda: false
        },
        {
          title: 'Windows ann doors company website',
          description:
            'Website for the organization for the production and installation of windows and doors. Contains about 100 pages. ',
          stack: 'React, Next.js, Typescript, MongoDB, Express.js',
          img: stv34,
          url: 'https://stvorka34.ru',
          github: 'https://github.com/anton-zm/stvorka34-next',
          nda: true
        },
        {
          title: 'One-page website',
          description:
            'Pet project for portfolio. One-page website for an apartment building.',
          stack: 'Nuxt.js',
          img: a100a,
          url: 'https://a100a.netlify.app/',
          github: 'https://github.com/anton-zm/romanov-nuxt',
          nda: false
        },
        {
          title: 'Test task',
          description: 'Layout and JS test task on Nuxt.js',
          stack: 'Nuxt.js',
          img: test1,
          url: 'https://anton-zm.github.io/test-for-mkomov/',
          github: 'https://github.com/anton-zm/test-for-mkomov',
          nda: false
        },
        {
          title: 'Test task',
          description: 'Layout and JS test task on Nuxt.js',
          stack: 'Nuxt.js, Swiper Slider',
          img: test2,
          url: 'https://nervous-goldwasser-71f821.netlify.app/',
          github: 'https://github.com/anton-zm/test-for-mailfit',
          nda: false
        },
        {
          title: 'News Search Service',
          description:
            'Educational work in Yandex.Practicum. Service for searching news on demand with registration and authorization of users. The user can save the articles he likes to "Favorites".',
          stack:
            'HTML, CSS, JS, Fetch API, ES6 Classes, RegExp, Webpack, Express.js, MongoDB',
          img: news,
          url: 'https://anton-zm.github.io/news-frontend/',
          github: 'https://github.com/anton-zm/news-frontend',
          nda: false
        },
        {
          title: 'Social Network',
          description:
            'Educational work in Yandex.Practicum. A social network in which the students of the Practicum can change their data, add and delete their pictures, mark their favorites. The data is stored on the server and retrieved using Fetch API requests.',
          stack: 'HTML, CSS, JS, Fetch API, ES6 Classes, RegExp, Webpack',
          img: s11,
          url: 'https://anton-zm.github.io/mesto-sprint11/',
          github: 'https://github.com/anton-zm//mesto-sprint11/',
          nda: false
        },
        {
          title: 'Regular Expressions',
          description:
            'Educational work in Yandex.Practicum. Form validation with regular expressions patterns.',
          stack: 'JS, RegExp',
          img: s10,
          url: 'https://anton-zm.github.io/sprint-10/',
          github: 'https://github.com/anton-zm/sprint-10',
          nda: false
        },
        {
          title: 'Adaptive Layout',
          description:
            'Educational work in Yandex.Practicum. Desktop layout using a BEM metodology, Flexbox, Grid.',
          stack: 'HTML, CSS',
          img: s4,
          url: 'https://anton-zm.github.io/sprint-4/',
          github: 'https://github.com/anton-zm/sprint-4',
          nda: false
        },
        {
          title: 'Desktop Layout',
          description:
            'Educational work for training. Desktop layout using a BEM metodology, Flexbox',
          stack: 'HTML, CSS',
          img: cars,
          url: 'https://anton-zm.github.io/training-layout/',
          github: 'https://github.com/anton-zm/training-layout',
          nda: false
        },
        {
          title: 'Desktop Layout',
          description:
            'Educational work in Yandex.Practicum. Desktop layout using a BEM metodology, Flexbox and simple CSS animations',
          stack: 'HTML, CSS',
          img: s2,
          url: 'https://anton-zm.github.io/sprint-2/',
          github: 'https://github.com/anton-zm/sprint-2',
          nda: false
        },
      ],
}

export const useProjectsData = () => {
    const store = useStore()
    return projects[store.Lang]
}