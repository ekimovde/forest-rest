import {SubcategoryId} from "~/constants";

// --- Гриль ---
export const GRILL = [
    {
        id: 75,
        title: 'Шашлык из цыпленка',
        options: ['300 гр'],
        price: 540,
        image: 'https://scdn.chibbis.ru/live/products/f0ad6cda570e1d958c254f6ea848b19b.jpeg',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 76,
        title: 'Шашлык из свинины',
        options: ['340 гр'],
        price: 610,
        image: 'https://scdn.chibbis.ru/live/products/f10fb8a70a6758590bd3eb1ffb3ad51e.jpeg',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 77,
        title: 'Стейк Нью-Йорк',
        options: ['100 гр'],
        price: 1300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 78,
        title: 'Стейк Рибай',
        options: ['100 гр'],
        price: 1720,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 79,
        title: 'Семга на гриле со свежими овощами ассорти',
        options: ['290 гр'],
        price: 1740,
        image: 'https://scdn.chibbis.ru/live/products/0cdf4798ffa5da5f5a1a128212bda675.jpeg',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 80,
        title: 'Свиные ребра на гриле MAX с картофелем айдахо',
        description: '(соус на выбор: сливочный том ям или деми гласс)',
        options: ['600 гр'],
        price: 1480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 81,
        title: 'Колбаски на гриле с тушеной капустой',
        options: ['400 гр'],
        price: 1390,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 82,
        title: 'Язык на гриле с картофельным пюре',
        options: ['300 гр'],
        price: 1150,
        image: 'https://scdn.chibbis.ru/live/products/fd529a9b0d7a28fbd263ae7db9431356.jpeg',
        subcategoryId: SubcategoryId.GRILL
    },
];

export const GRILL_CATEGORIES = [
    ...GRILL,
];
