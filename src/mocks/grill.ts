import { SubcategoryId } from "~/enums";

// --- Гриль ---
export const GRILL = [
    {
        id: 1,
        title: 'Шашлык из цыпленка',
        options: ['300 гр'],
        price: 540,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 2,
        title: 'Шашлык из свинины',
        options: ['340 гр'],
        price: 610,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 3,
        title: 'Стейк Нью-Йорк',
        options: ['100 гр'],
        price: 1300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 4,
        title: 'Стейк Рибай',
        options: ['100 гр'],
        price: 1720,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 5,
        title: 'Семга на гриле со свежими овощами ассорти',
        options: ['290 гр'],
        price: 1740,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 6,
        title: 'Свиные ребра на гриле MAX с картофелем айдахо',
        description: '(соус на выбор: сливочный том ям или деми гласс)',
        options: ['600 гр'],
        price: 1480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 7,
        title: 'Колбаски на гриле с тушеной капустой',
        options: ['400 гр'],
        price: 1390,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 8,
        title: 'Язык на гриле с картофельным пюре',
        options: ['300 гр'],
        price: 1150,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.GRILL
    },
];

export const GRILL_CATEGORIES = [
    ...GRILL,
];
