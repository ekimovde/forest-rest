import {SubcategoryId} from "~/constants";
import grill1 from '~/assets/images/grill/picture-1.jpg';
import grill2 from '~/assets/images/grill/picture-2.jpg';
import grill3 from '~/assets/images/grill/picture-3.jpg';
import grill4 from '~/assets/images/grill/picture-4.jpg';
import grill5 from '~/assets/images/grill/picture-5.jpg';
import grill6 from '~/assets/images/grill/picture-6.jpg';
import grill7 from '~/assets/images/grill/picture-7.jpg';
import grill8 from '~/assets/images/grill/picture-8.jpg';
import grill9 from '~/assets/images/grill/picture-9.jpg';

// --- Гриль ---
export const GRILL = [
    {
        id: 27,
        title: 'Каре ягненка в смородиновом соусе и картофельным гратеном',
        options: ['360 гр'],
        price: 540, //
        image: grill1,
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 28,
        title: 'Кебаб классический с домашней аджикой и печеными на мангале овощами',
        options: ['240 гр'],
        price: 640,
        image: grill2,
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 29,
        title: 'Кебаб с овощами, домашней аджикой и печеными на мангале овощами',
        options: ['240 гр'],
        price: 640,
        image: grill3,
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 30,
        title: 'Овощи гриль',
        options: ['200 гр'],
        price: 390,
        image: grill4,
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 31,
        title: 'Семга на гриле со свежими овощами ассорти',
        options: ['290 гр'],
        price: 1880,
        image: grill5,
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 32,
        title: 'Шампиньоны гриль',
        description: '(соус на выбор: сливочный том ям или деми гласс)',
        options: ['100 гр'],
        price: 380,
        image: grill6,
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 33,
        title: 'Шашлык из свинины',
        options: ['340 гр'],
        price: 690,
        image: grill7,
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 34,
        title: 'Шашлык из цыпленка',
        options: ['300 гр'],
        price: 670,
        image: grill8,
        subcategoryId: SubcategoryId.GRILL
    },
    {
        id: 35,
        title: 'Язык на гриле с картофельным пюре',
        options: ['300 гр'],
        price: 1180,
        image: grill9,
        subcategoryId: SubcategoryId.GRILL
    },
];

export const GRILL_CATEGORIES = [
    ...GRILL,
];
