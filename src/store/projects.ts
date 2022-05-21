import { useStore } from "./use-store"

const projects = {
    ru: [
        {
          title: 'Мобильное приложение',
          description:
            'Мобильное приложение для прохождения маркетинговых опросов за вознаграждение',
          stack: 'React Native, Typescript, MobX, Android Studio',
          img: '/projects/pointx-m.jpg',
          url: '',
          github: '',
          nda: true
        },
        {
          title: 'Личный кабинет',
          description:
            'Личный кабинет финансового вэб-приложения',
          stack: 'React, Typescript, MobX, Styled Components',
          img: '/projects/pointx.jpg',
          url: 'https://dash.point-x.co/',
          github: '',
          nda: true
        },
        {
          title: 'Социальная сеть',
          description:
            'Учебная работа Яндекс.Практикум по дополнительному курсу React. Социальная сеть, в которой студенты Практикума могут менять свои данные, добавлять и удалять свои картинки, отмечать понравившиеся. Данные хранятся на сервере и добываются при помощи запросов в fetch.',
          stack: 'React, React App Create, Hooks',
          img: '/projects/mesto-react.jpg',
          url: 'https://anton-zm.github.io/mesto-react/',
          github: 'https://github.com/anton-zm/mesto-react',
          nda: false
        },
        {
          title: 'Сайт-портфолио',
          description: 'Сайт портфолио вэб разработчика.',
          stack: 'Nuxt.js',
          img: '/projects/this.jpg',
          url: 'http://antonzm.ru/',
          github: 'https://github.com/anton-zm/portfolio',
          nda: false
        },
        {
          title: 'Сайт фонда НКО',
          description:
            'Командная работа по созданию сайта для благотворительного фонда.',
          stack: 'Nuxt.js',
          img: '/projects/cancer.jpg',
          url: 'https://raklechitsa.ru/',
          github: 'https://github.com/anton-zm/rak-lechitsa',
          nda: false
        },
        {
          title: 'Онлайн калькулятор стоимости',
          description:
            'Онлайн калькулятор для расчета стоимости окон для организации по производству и установке окон и дверей. ',
          stack: 'Nuxt.js, MongoDB, Express.js',
          img: '/projects/stvorka34calc.jpg',
          url: 'https://stvorka34.ru/calculation',
          github:
            'https://github.com/anton-zm/stvorka34/blob/main/pages/calculation.vue',
            nda: true
        },
        {
          title: 'Сайт оконной компании',
          description:
            'Сайт для организации по производству и установке окон и дверей. Содержит около 100 страниц. ',
          stack: 'Nuxt.js, MongoDB, Express.js',
          img: '/projects/stvorka34.jpg',
          url: 'https://stvorka34.ru',
          github: 'https://github.com/anton-zm/stvorka34',
          nda: true
        },
        {
          title: 'Одностраничный сайт',
          description:
            'Работа для портфолио. Одностраничный сайт многоквартирного дома.',
          stack: 'Nuxt.js',
          img: '/projects/a100a.jpg',
          url: 'https://a100a.netlify.app/',
          github: 'https://github.com/anton-zm/romanov-nuxt',
          nda: false
        },
        {
          title: 'Тестовое задание',
          description: 'Тестовое задание по вёрстке и JS',
          stack: 'Nuxt.js',
          img: '/projects/test1.jpg',
          url: 'https://anton-zm.github.io/test-for-mkomov/',
          github: 'https://github.com/anton-zm/test-for-mkomov',
          nda: false
        },
        {
          title: 'Тестовое задание',
          description: 'Тестовое задание по вёрстке и JS',
          stack: 'Nuxt.js, Swiper Slider',
          img: '/projects/mailfit.jpg',
          url: 'https://nervous-goldwasser-71f821.netlify.app/',
          github: 'https://github.com/anton-zm/test-for-mailfit',
          nda: false
        },
        {
          title: 'Сайт компании',
          description: 'Сайт для организации по остеклению балконов и лоджий. ',
          stack: 'Nuxt.js, Express.js',
          img: '/projects/balkony.jpg',
          url: 'https://balkony34.ru',
          github: 'https://github.com/anton-zm/balkony',
          nda: false
        },
        {
          title: 'Портал новостей',
          description:
            'Учебная работа Яндекс.Практикум. Сервис по поиску новостей по запросу с регистрацией и авторизацией пользователей. Пользователь может сохранить понравившиеся статьи в "Избранное".',
          stack:
            'HTML, CSS, JS, Fetch API, ES6 Классы, RegExp, Webpack, Express.js, MongoDB',
          img: '/projects/newsapi.jpg',
          url: 'https://anton-zm.github.io/news-frontend/',
          github: 'https://github.com/anton-zm/news-frontend',
          nda: false
        },
        {
          title: 'Социальная сеть',
          description:
            'Учебная работа Яндекс.Практикум. Социальная сеть, в которой студенты Практикума могут менять свои данные, добавлять и удалять свои картинки, отмечать понравившиеся. Данные хранятся на сервере и добываются при помощи запросов в fetch.',
          stack: 'HTML, CSS, JS, Fetch API, ES6 Классы, RegExp, Webpack',
          img: '/projects/sprint11.jpg',
          url: 'https://anton-zm.github.io/sprint-11/',
          github: 'https://github.com/anton-zm/sprint-11',
          nda: false
        },
        {
          title: 'Регулярные выражения',
          description:
            'Учебная работа Яндекс.Практикум. Валидация формы при помощи регулярных выражений.',
          stack: 'JS, RegExp',
          img: '/projects/sprint10.jpg',
          url: 'https://anton-zm.github.io/sprint-10/',
          github: 'https://github.com/anton-zm/sprint-10',
          nda: false
        },
        {
          title: 'Адаптивная вёрстка',
          description:
            'Учебная работа Яндекс.Практикум. Вёрстка для ПК с использованием методологии БЭМ, Flexbox, Grid.',
          stack: 'HTML, CSS',
          img: '/projects/sprint4.jpg',
          url: 'https://anton-zm.github.io/sprint-4/',
          github: 'https://github.com/anton-zm/sprint-4',
          nda: false
        },
        {
          title: 'Вёрстка для ПК',
          description:
            'Учебная работа для тренировки. Вёрстка для ПК с использованием методологии БЭМ, Flexbox.',
          stack: 'HTML, CSS',
          img: '/projects/cars.jpg',
          url: 'https://anton-zm.github.io/training-layout/',
          github: 'https://github.com/anton-zm/training-layout',
          nda: false
        },
        {
          title: 'Вёрстка для ПК',
          description:
            'Учебная работа Яндекс.Практикум. Вёрстка для ПК с использованием методологии БЭМ, Flexbox и простых CSS анимаций.',
          stack: 'HTML, CSS',
          img: '/projects/sprint2.jpg',
          url: 'https://anton-zm.github.io/sprint-2/',
          github: 'https://github.com/anton-zm/sprint-2',
          nda: false
        },
    ],
    en: [
        {
          title: 'Mobile App',
          description:
            'Mobile app for passing marketing surveys for a reward',
          stack: 'React Native, Typescript, MobX, Android Studio',
          img: '/projects/pointx-m.jpg',
          url: '/',
          github: '',
          nda: true
        },
        {
          title: 'Personal Area',
          description:
            'Financial Web App Personal Area ',
          stack: 'React, Typescript, MobX, Styled Components',
          img: '/projects/pointx.jpg',
          url: 'https://dash.point-x.co/',
          github: '',
          nda: true
        },
        {
          title: 'Social Network (React)',
          description:
            'Educational extra React work in Yandex.Practicum. A social network in which the students of the Practicum can change their data, add and delete their pictures, mark their favorites. The data is stored on the server and retrieved using Fetch API requests.',
          stack: 'React, React App Create, Hooks',
          img: '/projects/mesto-react.jpg',
          url: 'https://anton-zm.github.io/mesto-react/',
          github: 'https://github.com/anton-zm/mesto-react',
          nda: false
        },
        {
          title: 'This website',
          description: "Web developer's website portfolio ",
          stack: 'Nuxt.js',
          img: '/projects/this.jpg',
          url: 'http://antonzm.ru/',
          github: 'https://github.com/anton-zm/portfolio',
          nda: false
        },
        {
          title: 'Charity foundation website',
          description: 'Teamwork to create a website for a charitable foundation.',
          stack: 'Nuxt.js',
          img: '/projects/cancer.jpg',
          url: 'https://raklechitsa.ru/',
          github: 'https://github.com/anton-zm/rak-lechitsa',
          nda: false
        },
        {
          title: 'Online cost calculator',
          description:
            'Online calculator for calculating the cost of windows for an organization for the production and installation of windows and doors. ',
          stack: 'Nuxt.js, MongoDB, Express.js',
          img: '/projects/stvorka34calc.jpg',
          url: 'https://stvorka34.ru/calculation',
          github:
            'https://github.com/anton-zm/stvorka34/blob/main/pages/calculation.vue',
            nda: true
        },
        {
          title: 'Windows ann doors company website',
          description:
            'Website for the organization for the production and installation of windows and doors. Contains about 100 pages. ',
          stack: 'Nuxt.js, MongoDB, Express.js',
          img: '/projects/stvorka34.jpg',
          url: 'https://stvorka34.ru',
          github: 'https://github.com/anton-zm/stvorka34',
          nda: true
        },
        {
          title: 'One-page website',
          description:
            'Pet project for portfolio. One-page website for an apartment building.',
          stack: 'Nuxt.js',
          img: '/projects/a100a.jpg',
          url: 'https://a100a.netlify.app/',
          github: 'https://github.com/anton-zm/romanov-nuxt',
          nda: false
        },
        {
          title: 'Test task',
          description: 'Layout and JS test task on Nuxt.js',
          stack: 'Nuxt.js',
          img: '/projects/test1.jpg',
          url: 'https://anton-zm.github.io/test-for-mkomov/',
          github: 'https://github.com/anton-zm/test-for-mkomov',
          nda: false
        },
        {
          title: 'Test task',
          description: 'Layout and JS test task on Nuxt.js',
          stack: 'Nuxt.js, Swiper Slider',
          img: '/projects/mailfit.jpg',
          url: 'https://nervous-goldwasser-71f821.netlify.app/',
          github: 'https://github.com/anton-zm/test-for-mailfit',
          nda: false
        },
        {
          title: 'Website',
          description:
            'Website for the organization for the loggia and balcony glazing.',
          stack: 'Nuxt.js, Express.js',
          img: '/projects/balkony.jpg',
          url: 'https://balkony34.ru',
          github: 'https://github.com/anton-zm/balkony',
          nda: false
        },
        {
          title: 'News Search Service',
          description:
            'Educational work in Yandex.Practicum. Service for searching news on demand with registration and authorization of users. The user can save the articles he likes to "Favorites".',
          stack:
            'HTML, CSS, JS, Fetch API, ES6 Classes, RegExp, Webpack, Express.js, MongoDB',
          img: '/projects/newsapi.jpg',
          url: 'https://anton-zm.github.io/news-frontend/',
          github: 'https://github.com/anton-zm/news-frontend',
          nda: false
        },
        {
          title: 'Social Network',
          description:
            'Educational work in Yandex.Practicum. A social network in which the students of the Practicum can change their data, add and delete their pictures, mark their favorites. The data is stored on the server and retrieved using Fetch API requests.',
          stack: 'HTML, CSS, JS, Fetch API, ES6 Classes, RegExp, Webpack',
          img: '/projects/sprint11.jpg',
          url: 'https://anton-zm.github.io/mesto-sprint11/',
          github: 'https://github.com/anton-zm//mesto-sprint11/',
          nda: false
        },
        {
          title: 'Regular Expressions',
          description:
            'Educational work in Yandex.Practicum. Form validation with regular expressions patterns.',
          stack: 'JS, RegExp',
          img: '/projects/sprint10.jpg',
          url: 'https://anton-zm.github.io/sprint-10/',
          github: 'https://github.com/anton-zm/sprint-10',
          nda: false
        },
        {
          title: 'Adaptive Layout',
          description:
            'Educational work in Yandex.Practicum. Desktop layout using a BEM metodology, Flexbox, Grid.',
          stack: 'HTML, CSS',
          img: '/projects/sprint4.jpg',
          url: 'https://anton-zm.github.io/sprint-4/',
          github: 'https://github.com/anton-zm/sprint-4',
          nda: false
        },
        {
          title: 'Desktop Layout',
          description:
            'Educational work for training. Desktop layout using a BEM metodology, Flexbox',
          stack: 'HTML, CSS',
          img: '/projects/cars.jpg',
          url: 'https://anton-zm.github.io/training-layout/',
          github: 'https://github.com/anton-zm/training-layout',
          nda: false
        },
        {
          title: 'Desktop Layout',
          description:
            'Educational work in Yandex.Practicum. Desktop layout using a BEM metodology, Flexbox and simple CSS animations',
          stack: 'HTML, CSS',
          img: '/projects/sprint2.jpg',
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