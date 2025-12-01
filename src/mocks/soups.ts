import {SubcategoryId} from "~/constants";
import soup1 from '~/assets/images/soups/picture-1.jpg';
import soup2 from '~/assets/images/soups/picture-2.jpg';
import soup3 from '~/assets/images/soups/picture-3.jpg';
import soup4 from '~/assets/images/soups/picture-4.jpg';
import soup5 from '~/assets/images/soups/picture-5.jpg';
import soup6 from '~/assets/images/soups/picture-6.jpg';
import soup7 from '~/assets/images/soups/picture-7.jpg';

// --- Супы ---
export const SOUPS = [
    {
        id: 142,
        title: 'Борщ с говядиной',
        options: ['650 гр'],
        price: 690,
        image: soup1,
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 143,
        title: 'Крем суп из белых грибов',
        options: ['200 гр'],
        price: 400,
        image: soup2,
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 144,
        title: 'Пельмени из оленины в соусе Демиглас (без бульона)',
        options: ['180 гр'],
        price: 790,
        image: soup3,
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 145,
        title: 'Пельмени по домашнему',
        options: ['300 гр'],
        price: 390,
        image: soup4,
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 146,
        title: 'Солянка мясная',
        options: ['590 гр'],
        price: 690,
        image: soup5,
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 146,
        title: 'Суп куриный с лапшой',
        options: ['500 гр'],
        price: 360,
        image: soup6,
        subcategoryId: SubcategoryId.SOUPS
    },
    {
        id: 146,
        title: 'Уха сливочная с семгой',
        options: ['500 гр'],
        price: 590,
        image: soup7,
        subcategoryId: SubcategoryId.SOUPS
    },
];

export const SOUPS_CATEGORIES = [
    ...SOUPS,
];
