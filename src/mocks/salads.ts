import {SubcategoryId} from "~/constants";
import salads1 from '~/assets/images/salads/picture-1.jpg';
import salads2 from '~/assets/images/salads/picture-2.jpg';
import salads3 from '~/assets/images/salads/picture-3.jpg';
import salads4 from '~/assets/images/salads/picture-4.jpg';
import salads5 from '~/assets/images/salads/picture-5.jpg';
import salads6 from '~/assets/images/salads/picture-6.jpg';
import salads7 from '~/assets/images/salads/picture-7.jpg';
import salads8 from '~/assets/images/salads/picture-8.jpg';
import salads9 from '~/assets/images/salads/picture-9.jpg';
import salads10 from '~/assets/images/salads/picture-10.jpg';
import salads11 from '~/assets/images/salads/picture-11.jpg';

// --- Салаты ---
export const SALADS = [
    {
        id: 81,
        title: 'Винегрет с сельдью',
        options: ['250 гр'],
        price: 360,
        image: salads1,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 82,
        title: 'Дальневосточный салат с диким папоротником, олениной и грибной эспумой',
        options: ['250 гр'],
        price: 980,
        image: salads2,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 83,
        title: 'Нисуаз с тунцом',
        options: ['220 гр'],
        price: 690,
        image: salads3,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 84,
        title: 'Оливье с малосоленой семгой, перепелинным яйцом и икрой лосося',
        options: ['250 гр'],
        price: 680,
        image: salads4,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 85,
        title: 'Салат из печени кролика с Забайкальскими маслятами',
        options: ['200 гр'],
        price: 660,
        image: salads5,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 86,
        title: 'Салат с баклажанами фри с творожным сыром в соусе сладкий чили',
        options: ['230 гр'],
        price: 480,
        image: salads6,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 87,
        title: 'Салат с бобами Эдамами, авокадо и слайсами цукини',
        options: ['240 гр'],
        price: 640,
        image: salads7,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 88,
        title: 'Салат с ростбифом и вяленными томатами',
        options: ['170 гр'],
        price: 1100,
        image: salads8,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 89,
        title: 'Салат с хрустящей говядиной и древесными грибами',
        options: ['200 гр'],
        price: 740,
        image: salads9,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 90,
        title: 'Цезарь с креветками',
        options: ['220 гр'],
        price: 890,
        image: salads10,
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 91,
        title: 'Цезарь с курицей',
        options: ['200 гр'],
        price: 560,
        image: salads11,
        subcategoryId: SubcategoryId.SALADS
    },
];

export const SALADS_CATEGORIES = [
    ...SALADS,
];
