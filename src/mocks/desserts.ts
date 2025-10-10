import { SubcategoryId } from "~/constants";

// --- Десерты ---
export const DESSERTS = [
    {
        id: 18,
        title: 'Яблочный штрудель',
        options: ['160 гр'],
        price: 300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 19,
        title: 'Жареное мороженое с вишневым конфи',
        options: ['150 гр'],
        price: 380,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 20,
        title: 'Малиновый тирамису',
        options: ['120 гр'],
        price: 440,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 21,
        title: 'Тирамису',
        options: ['120 гр'],
        price: 300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 22,
        title: 'Панна котта облепиха',
        options: ['240 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 23,
        title: 'Панна котта смородина',
        options: ['240 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 24,
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
