import { SubcategoryId } from "~/enums";

// --- Гарниры ---
export const SIDE_DISHES = [
    {
        id: 1,
        title: 'Рис с овощами',
        options: ['150 гр'],
        price: 120,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
    {
        id: 2,
        title: 'Картофельные дольки на гриле',
        options: ['150 гр'],
        price: 120,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
    {
        id: 3,
        title: 'Овощи гриль',
        options: ['200 гр'],
        price: 390,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
    {
        id: 4,
        title: 'Шампиньоны гриль',
        options: ['100 гр'],
        price: 380,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
];

export const SIDE_DISHES_CATEGORIES = [
    ...SIDE_DISHES,
];
