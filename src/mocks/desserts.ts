import {SubcategoryId} from "~/constants";
import dessert1 from '~/assets/images/desserts/picture-1.jpg';
import dessert2 from '~/assets/images/desserts/picture-2.jpg';

// --- Десерты ---
export const DESSERTS = [
    {
        id: 20,
        title: 'Блинчики с вареньем из шишек',
        options: ['140 гр'],
        price: 240,
        image: dessert1,
        subcategoryId: SubcategoryId.DESSERTS
    },
    {
        id: 21,
        title: 'Яблочный штрудель',
        options: ['160 гр'],
        price: 330,
        image: dessert2,
        subcategoryId: SubcategoryId.DESSERTS
    },
];

export const DESSERTS_CATEGORIES = [
    ...DESSERTS,
];
