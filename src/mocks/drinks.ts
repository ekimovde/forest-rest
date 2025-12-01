import {SubcategoryId} from "~/constants";
import drink1 from '~/assets/images/drinks/picture-1.jpg';
import drink2 from '~/assets/images/drinks/picture-2.jpg';

// --- Напитки ---
export const DRINKS = [
    {
        id: 71,
        title: 'Пиво Бад БЕЗАЛКОГОЛЬНОЕ',
        options: ['450 мл'],
        price: 350,
        image: drink1,
        subcategoryId: SubcategoryId.DRINKS
    },
    {
        id: 72,
        title: 'Сок Вишня',
        options: ['200 мл'],
        price: 150,
        image: drink2,
        subcategoryId: SubcategoryId.DRINKS
    },
    {
        id: 73,
        title: 'Сок Манго',
        options: ['200 мл'],
        price: 150,
        image: drink2,
        subcategoryId: SubcategoryId.DRINKS
    },
    {
        id: 74,
        title: 'Сок Мультифрукт',
        options: ['200 мл'],
        price: 150,
        image: drink2,
        subcategoryId: SubcategoryId.DRINKS
    },
    {
        id: 74,
        title: 'Сок Яблоко',
        options: ['200 мл'],
        price: 150,
        image: drink2,
        subcategoryId: SubcategoryId.DRINKS
    },
];

export const DRINKS_CATEGORIES = [
    ...DRINKS,
];
