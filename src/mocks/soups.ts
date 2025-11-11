import {SubcategoryId} from "~/constants";

// --- Супы ---
export const SOUPS = [
    {
        id: 142,
        title: 'Борщ с говядиной',
        options: ['650 гр'],
        price: 490,
        image: 'https://scdn.chibbis.ru/live/products/353f41ea482c64eed73d5b24642cc6cd.jpeg',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 143,
        title: 'Солянка мясная',
        options: ['590 гр'],
        price: 590,
        image: 'https://scdn.chibbis.ru/live/products/6437cc2bc9872ec2a57112b2551d4033.jpeg',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 144,
        title: 'Уха сливочная с семгой',
        options: ['500 гр'],
        price: 450,
        image: 'https://scdn.chibbis.ru/live/products/cdbfc6b9412ab8d2125e3d5e4e0009c8.jpeg',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 145,
        title: 'Крем суп из белых грибов',
        options: ['200 гр'],
        price: 400,
        image: 'https://scdn.chibbis.ru/live/products/9d3235b4034700283f713cd56a64e812.jpeg',
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 146,
        title: 'Суп куриный с лапшой',
        options: ['500 гр'],
        price: 360,
        image: 'https://scdn.chibbis.ru/live/products/3d14586a802553428dc4d9c15997df24.jpeg',
        subcategoryId: SubcategoryId.SOUPS
    },
];

export const SOUPS_CATEGORIES = [
    ...SOUPS,
];
