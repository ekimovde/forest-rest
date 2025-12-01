import {SubcategoryId} from "~/constants";
import soupsAsian1 from '~/assets/images/soupsAsian/picture-1.jpg';
import soupsAsian2 from '~/assets/images/soupsAsian/picture-2.jpg';
import soupsAsian3 from '~/assets/images/soupsAsian/picture-3.jpg';

// --- Супы Азия ---
export const SOUPS_ASIAN = [
    {
        id: 18,
        title: 'Ромен',
        description: '(бульон ромен, буженина, лапша удон, яйцо, кинза, зеленый лук, кунжут)',
        options: ['500 гр'],
        price: 490,
        image: soupsAsian1,
        subcategoryId: SubcategoryId.SOUPS_ASIAN
    },
    {
        id: 19,
        title: 'Том Сом Пла',
        description: '(бульон том ям, лапша рисовая, тилапия, морковь, лук, кинза, зеленый лук)',
        options: ['500 гр'],
        price: 390,
        image: soupsAsian2,
        subcategoryId: SubcategoryId.SOUPS_ASIAN
    },
    {
        id: 19,
        title: 'Том Ям',
        options: ['500 гр'],
        price: 790,
        image: soupsAsian3,
        subcategoryId: SubcategoryId.SOUPS_ASIAN
    },
];

export const SOUPS_ASIAN_CATEGORIES = [
    ...SOUPS_ASIAN,
];
