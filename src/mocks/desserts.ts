import { SubcategoryId } from "~/enums";

// --- Десерты ---
export const DESSERTS = [
    {
        id: 1,
        title: 'Яблочный штрудель',
        options: ['160 гр'],
        price: 300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 2,
        title: 'Жареное мороженое с вишневым конфи',
        options: ['150 гр'],
        price: 380,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 3,
        title: 'Малиновый тирамису',
        options: ['120 гр'],
        price: 440,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 4,
        title: 'Тирамису',
        options: ['120 гр'],
        price: 300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 5,
        title: 'Панна котта облепиха',
        options: ['240 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 6,
        title: 'Панна котта смородина',
        options: ['240 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 7,
        title: 'Блинчики с вареньем из шишек',
        options: ['140 гр'],
        price: 240,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
];

export const DESSERTS_CATEGORIES = [
    ...DESSERTS,
];
