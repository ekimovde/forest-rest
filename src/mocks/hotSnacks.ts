import { SubcategoryId } from "~/constants";

// --- Горячие закуски ---
export const HOT_SNACKS = [
    {
        id: 96,
        title: 'Ароматные креветки на цукини гриль с хумусом',
        options: ['190 гр'],
        price: 1100,
        image: 'https://via.placeholder.com/150',
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
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 100,
        title: 'Драники с семгой',
        options: ['190 гр'],
        price: 540,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
];

export const HOT_SNACKS_CATEGORIES = [
    ...HOT_SNACKS,
];
