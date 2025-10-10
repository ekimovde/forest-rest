import { SubcategoryId } from "~/enums";

// --- Супы ---
export const SOUPS = [
    {
        id: 1,
        title: 'Борщ с говядиной',
        options: ['650 гр'],
        price: 490,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 2,
        title: 'Солянка мясная',
        options: ['590 гр'],
        price: 590,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 3,
        title: 'Уха сливочная с семгой',
        options: ['500 гр'],
        price: 450,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 4,
        title: 'Крем суп из белых грибов',
        options: ['200 гр'],
        price: 400,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 5,
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
