import { SubcategoryId } from "~/constants";

// --- Паста ---
export const PASTA = [
    {
        id: 101,
        title: 'Паста «Карбонара»',
        options: ['270 гр'],
        price: 580,
        image: 'https://scdn.chibbis.ru/live/products/979bc86c014f1766add26d332ac3cd59.jpeg',
        subcategoryId: SubcategoryId.PASTA
    },
];

export const PASTA_CATEGORIES = [
    ...PASTA,
];
