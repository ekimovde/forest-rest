import {SubcategoryId} from "~/constants";
import sideDishes1 from '~/assets/images/sideDishes/picture-1.jpg';
import sideDishes2 from '~/assets/images/sideDishes/picture-2.jpg';
import sideDishes3 from '~/assets/images/sideDishes/picture-3.jpg';

// --- Гарниры ---
export const SIDE_DISHES = [
    {
        id: 95,
        title: 'Картофельное пюре с пармезаном',
        options: ['170 гр'],
        price: 220,
        image: sideDishes1,
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
    {
        id: 96,
        title: 'Картофельные дольки на гриле',
        options: ['150 гр'],
        price: 120,
        image: sideDishes2,
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
    {
        id: 97,
        title: 'Рис с овощами',
        options: ['150 гр'],
        price: 120,
        image: sideDishes3,
        subcategoryId: SubcategoryId.SIDE_DISHES
    },
];

export const SIDE_DISHES_CATEGORIES = [
    ...SIDE_DISHES,
];
