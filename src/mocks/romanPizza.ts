import { SubcategoryId } from "~/enums";

// --- Роман пицца ---
export const ROMAN_PIZZA = [
    {
        id: 1,
        title: 'С семгой и вялеными томатами',
        options: ['480 гр'],
        price: 1980,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROMAN_PIZZA
    },
    {
        id: 2,
        title: 'С грушей и горгонзолой',
        options: ['480 гр'],
        price: 1400,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROMAN_PIZZA
    },
    {
        id: 3,
        title: 'С угрем и соусом терияки',
        options: ['480 гр'],
        price: 1890,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROMAN_PIZZA
    },
    {
        id: 4,
        title: 'С пармой и пармезаном',
        options: ['480 гр'],
        price: 1600,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROMAN_PIZZA
    },
];

export const PIZZA_CATEGORIES = [
    ...ROMAN_PIZZA,
];
