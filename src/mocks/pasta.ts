import { SubcategoryId } from "~/enums";

// --- Паста ---
export const PASTA = [
    {
        id: 1,
        title: 'Паста «Карбонара»',
        options: ['270 гр'],
        price: 580,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.PASTA
    },
];

export const PASTA_CATEGORIES = [
    ...PASTA,
];
