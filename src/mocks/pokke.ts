import {SubcategoryId} from "~/constants";
import pokke1 from '~/assets/images/pokke/picture-1.jpg';
import pokke2 from '~/assets/images/pokke/picture-2.jpg';
import pokke3 from '~/assets/images/pokke/picture-3.jpg';

// --- Десерты ---
export const POKKE = [
    {
        id: 18,
        title: 'С креветкой',
        options: ['250 гр'],
        price: 690,
        image: pokke1,
        subcategoryId: SubcategoryId.POKKE
    },
    {
        id: 19,
        title: 'С лососем',
        description: '(семга, рис, бобы эдамами, салат чука, огурец, нори, арахис, кунжут, ореховый соус, соус вок)',
        options: ['250 гр'],
        price: 690,
        image: pokke2,
        subcategoryId: SubcategoryId.POKKE
    },
    {
        id: 19,
        title: 'С масляной рыбой',
        options: ['250 гр'],
        price: 690,
        image: pokke3,
        subcategoryId: SubcategoryId.POKKE
    },
];

export const POKKE_CATEGORIES = [
    ...POKKE,
];
