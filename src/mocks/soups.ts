import { SubcategoryId } from "~/constants";

// --- Супы ---
export const SOUPS = [
    {
        id: 142,
        title: 'Борщ с говядиной',
        options: ['650 гр'],
        price: 490,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 143,
        title: 'Солянка мясная',
        options: ['590 гр'],
        price: 590,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 144,
        title: 'Уха сливочная с семгой',
        options: ['500 гр'],
        price: 450,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 145,
        title: 'Крем суп из белых грибов',
        options: ['200 гр'],
        price: 400,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 146,
        title: 'Суп куриный с лапшой',
        options: ['500 гр'],
        price: 360,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
];

export const SOUPS_CATEGORIES = [
    ...SOUPS,
];
