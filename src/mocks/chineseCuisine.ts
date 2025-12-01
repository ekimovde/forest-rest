import {SubcategoryId} from "~/constants";
import chineseCuisine1 from '~/assets/images/chineseCuisine/picture-1.jpg';
import chineseCuisine2 from '~/assets/images/chineseCuisine/picture-2.jpg';
import chineseCuisine3 from '~/assets/images/chineseCuisine/picture-3.jpg';
import chineseCuisine4 from '~/assets/images/chineseCuisine/picture-4.jpg';
import chineseCuisine5 from '~/assets/images/chineseCuisine/picture-5.jpg';
import chineseCuisine6 from '~/assets/images/chineseCuisine/picture-6.jpg';
import chineseCuisine7 from '~/assets/images/chineseCuisine/picture-7.jpg';
import chineseCuisine8 from '~/assets/images/chineseCuisine/picture-8.jpg';
import chineseCuisine9 from '~/assets/images/chineseCuisine/picture-9.jpg';
import chineseCuisine10 from '~/assets/images/chineseCuisine/picture-10.jpg';
import chineseCuisine11 from '~/assets/images/chineseCuisine/picture-11.jpg';
import chineseCuisine12 from '~/assets/images/chineseCuisine/picture-12.jpg';
import chineseCuisine13 from '~/assets/images/chineseCuisine/picture-13.jpg';
import chineseCuisine14 from '~/assets/images/chineseCuisine/picture-14.jpg';

// --- Гриль ---
export const CHINESE_CUISINE = [
    {
        id: 6,
        title: 'Баклажаны со свининой',
        description: '(свинина, баклажаны, лук, морковь, болгарский перец, соус вок, кунжут, зеленый лук)',
        options: ['400 гр'],
        price: 690,
        image: chineseCuisine1,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 7,
        title: 'Гобаожоу в соусе',
        description: '(свинина, морковь, лук, кисло сладкий соус, кунжут, зеленый лук)',
        options: ['400 гр'],
        price: 790,
        image: chineseCuisine2,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 8,
        title: 'Гобаожоу соленый',
        description: '(свинина, морковь, лук, кунжут, зеленый лук)',
        options: ['400 гр'],
        price: 790,
        image: chineseCuisine3,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 9,
        title: 'Картофель фри по-китайски',
        description: '(картофель, морковь, лук, болгарский перец, арахис с перцем)',
        options: ['400 гр'],
        price: 440,
        image: chineseCuisine4,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 10,
        title: 'Курица гумбао',
        options: ['400 гр'],
        price: 860,
        image: chineseCuisine5,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 11,
        title: 'Мясо веревочкой',
        description: '(свинина, морковь, лук, болгарский перец, древесные грибы, соус, кунжут, зеленый лук)',
        options: ['400 гр'],
        price: 690,
        image: chineseCuisine6,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 12,
        title: 'Рис с яйцом',
        description: '(рис, яйцо, соевый соус, зеленый лук)',
        options: ['400 гр'],
        price: 360,
        image: chineseCuisine7,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 13,
        title: 'Салат китайский',
        options: ['400 гр'],
        price: 560,
        image: chineseCuisine8,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 14,
        title: 'Салат Муэр',
        description: '(свинина, древесные грибы черные и белые, огурец, морковь, лук, кунжут, заправка)',
        options: ['400 гр'],
        price: 590,
        image: chineseCuisine9,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 15,
        title: 'Салат Пекин',
        description: '(свинина, огурец, морковь, болгарский перец, древесные грибы, соус вок, кунжут)',
        options: ['400 гр'],
        price: 590,
        image: chineseCuisine10,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 16,
        title: 'Салат с брокколи',
        description: '(брокколи, помидор, яйцо, древесные грибы, лук, огурец, майонез)',
        options: ['400 гр'],
        price: 640,
        image: chineseCuisine11,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 17,
        title: 'Салат с папоротником',
        description: '(свинина, папоротник, морковь, лук, болгарский перец, кунжут, заправка)',
        options: ['320 гр'],
        price: 760,
        image: chineseCuisine12,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 18,
        title: 'Салат с языком и кунжутным маслом',
        options: ['400 гр'],
        price: 890,
        image: chineseCuisine13,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
    {
        id: 19,
        title: 'Салат с языком и майонезом',
        options: ['400 гр'],
        price: 890,
        image: chineseCuisine14,
        subcategoryId: SubcategoryId.CHINESE_CUISINE
    },
];

export const CHINESE_CUISINE_CATEGORIES = [
    ...CHINESE_CUISINE,
];
