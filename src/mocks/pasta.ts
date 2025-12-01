import {SubcategoryId} from "~/constants";
import pasta1 from '~/assets/images/pasta/picture-1.jpg';

// --- Паста ---
export const PASTA = [
    {
        id: 49,
        title: 'Паста Карбонара',
        options: ['270 гр'],
        price: 580,
        image: pasta1,
        subcategoryId: SubcategoryId.PASTA
    },
];

export const PASTA_CATEGORIES = [
    ...PASTA,
];
