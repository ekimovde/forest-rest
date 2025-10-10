import { SubcategoryId } from "~/enums";

// --- Горячие закуски ---
export const HOT_SNACKS = [
    {
        id: 1,
        title: 'Ароматные креветки на цукини гриль с хумусом',
        options: ['190 гр'],
        price: 1100,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 2,
        title: 'Мидии в соусе блю чиз',
        options: ['270 гр'],
        price: 980,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 3,
        title: 'Крылья куриные с чесночными гренками',
        options: ['270 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 4,
        title: 'Драники с грибами',
        options: ['240 гр'],
        price: 450,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_SNACKS
    },
    {
        id: 5,
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
