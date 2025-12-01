import {SubcategoryId} from "~/constants";
import pizza1 from '~/assets/images/pizza/picture-1.jpg';
import pizza2 from '~/assets/images/pizza/picture-2.jpg';
import pizza3 from '~/assets/images/pizza/picture-3.jpg';
import pizza4 from '~/assets/images/pizza/picture-4.jpg';

// --- Роман пицца ---
export const PIZZA = [
    {
        id: 119,
        title: 'С грушей и горгонзолой',
        options: ['480 гр'],
        price: 1400,
        image: pizza1,
        subcategoryId: SubcategoryId.PIZZA
    },
    {
        id: 120,
        title: 'С пармой и пармезаном',
        options: ['480 гр'],
        price: 1600,
        image: pizza2,
        subcategoryId: SubcategoryId.PIZZA
    },
    {
        id: 121,
        title: 'С семгой и вялеными томатами',
        options: ['480 гр'],
        price: 1980,
        image: pizza3,
        subcategoryId: SubcategoryId.PIZZA
    },
    {
        id: 122,
        title: 'С угрем и соусом терияки',
        options: ['480 гр'],
        price: 1890,
        image: pizza4,
        subcategoryId: SubcategoryId.PIZZA
    },
];

export const PIZZA_CATEGORIES = [
    ...PIZZA,
];
