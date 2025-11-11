import {SubcategoryId} from "~/constants";

// --- Гарниры ---
export const SIDE_DISHES = [
    {
        id: 138,
        title: 'Рис с овощами',
        options: ['150 гр'],
        price: 120,
        image: 'https://scdn.chibbis.ru/live/products/f93aceea1f3e5da9a4a8c8f990a9cb28.jpeg',
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
    {
        id: 139,
        title: 'Картофельные дольки на гриле',
        options: ['150 гр'],
        price: 120,
        image: 'https://scdn.chibbis.ru/live/products/e341b8aea2615e3c26a7938be8936b6f.jpeg',
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
    {
        id: 140,
        title: 'Овощи гриль',
        options: ['200 гр'],
        price: 390,
        image: 'https://scdn.chibbis.ru/live/products/6562f2af1b805817a3d1a527d7a754b4.jpeg',
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
    {
        id: 141,
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
