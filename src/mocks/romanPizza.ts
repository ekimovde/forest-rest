import {SubcategoryId} from "~/constants";

// --- Роман пицца ---
export const ROMAN_PIZZA = [
    {
        id: 119,
        title: 'С семгой и вялеными томатами',
        options: ['480 гр'],
        price: 1980,
        image: 'https://scdn.chibbis.ru/live/products/9ae2fc93712c9a0c3c0a228179e22c7c.jpeg',
        subcategoryId: SubcategoryId.ROMAN_PIZZA
    },
    {
        id: 120,
        title: 'С грушей и горгонзолой',
        options: ['480 гр'],
        price: 1400,
        image: 'https://scdn.chibbis.ru/live/products/47511eb3cf182f320f47cde8c3f635fa.jpeg',
        subcategoryId: SubcategoryId.ROMAN_PIZZA
    },
    {
        id: 121,
        title: 'С угрем и соусом терияки',
        options: ['480 гр'],
        price: 1890,
        image: 'https://scdn.chibbis.ru/live/products/06a3b46b0234e61c7e74c17b07147baf.jpeg',
        subcategoryId: SubcategoryId.ROMAN_PIZZA
    },
    {
        id: 122,
        title: 'С пармой и пармезаном',
        options: ['480 гр'],
        price: 1600,
        image: 'https://scdn.chibbis.ru/live/products/2578273f3a38ff4108d633c206bbee69.jpeg',
        subcategoryId: SubcategoryId.ROMAN_PIZZA
    },
];

export const PIZZA_CATEGORIES = [
    ...ROMAN_PIZZA,
];
