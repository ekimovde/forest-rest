import {SubcategoryId} from "~/constants";

// --- Горячие закуски ---
export const HOT_SNACKS = [
    {
        id: 96,
        title: 'Ароматные креветки на цукини гриль с хумусом',
        options: ['190 гр'],
        price: 1100,
        image: 'https://scdn.chibbis.ru/live/products/d0bddd698438151725491253781e567b.jpeg',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 97,
        title: 'Мидии в соусе блю чиз',
        options: ['270 гр'],
        price: 980,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 98,
        title: 'Крылья куриные с чесночными гренками',
        options: ['270 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 99,
        title: 'Драники с грибами',
        options: ['240 гр'],
        price: 450,
        image: 'https://scdn.chibbis.ru/live/products/da5b76f45b4d52d03d846f7e15d2a5cc.jpeg',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 100,
        title: 'Драники с семгой',
        options: ['190 гр'],
        price: 540,
        image: 'https://scdn.chibbis.ru/live/products/1d4aaa9ef90ca60f21361ee69b96d8ca.jpeg',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
];

export const HOT_SNACKS_CATEGORIES = [
    ...HOT_SNACKS,
];
