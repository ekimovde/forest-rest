import {SubcategoryId} from "~/constants";
import snack1 from '~/assets/images/snacks/picture-1.jpg';
import snack2 from '~/assets/images/snacks/picture-2.jpg';
import snack3 from '~/assets/images/snacks/picture-3.jpg';
import snack4 from '~/assets/images/snacks/picture-4.jpg';
import snack5 from '~/assets/images/snacks/picture-5.jpg';
import snack6 from '~/assets/images/snacks/picture-6.jpg';
import snack7 from '~/assets/images/snacks/picture-7.jpg';
import snack8 from '~/assets/images/snacks/picture-8.jpg';

// --- Закуски ---
export const SNACKS = [
    {
        id: 71,
        title: 'Говяжий язык с домашней горчицей',
        options: ['100 гр'],
        price: 660,
        image: snack1,
        subcategoryId: SubcategoryId.SNACKS
    },
    {
        id: 72,
        title: 'Грузди рыжики в сметане с картофелем',
        options: ['290 гр'],
        price: 980,
        image: snack2,
        subcategoryId: SubcategoryId.SNACKS
    },
    {
        id: 73,
        title: 'Домашние соленья',
        options: ['420 гр'],
        price: 480,
        image: snack3,
        subcategoryId: SubcategoryId.SNACKS
    },
    {
        id: 74,
        title: 'Драники с грибами и копченой сметаной',
        options: ['300 гр'],
        price: 760,
        image: snack4,
        subcategoryId: SubcategoryId.SNACKS
    },
    {
        id: 74,
        title: 'Драники с семгой сподкопченой семгой, красной икрой и яйцом пашот',
        options: ['280 гр'],
        price: 1180,
        image: snack5,
        subcategoryId: SubcategoryId.SNACKS
    },
    {
        id: 74,
        title: 'Ростбиф с маринованнымлуком и бальзамическим кремом',
        options: ['120 гр'],
        price: 890,
        image: snack6,
        subcategoryId: SubcategoryId.SNACKS
    },
    {
        id: 74,
        title: 'Семга малосоленая',
        options: ['90 гр'],
        price: 860,
        image: snack7,
        subcategoryId: SubcategoryId.SNACKS
    },
    {
        id: 74,
        title: 'Телятина под щучьим соусом порецепту из книги декабристов',
        options: ['200 гр'],
        price: 1560,
        image: snack8,
        subcategoryId: SubcategoryId.SNACKS
    },
];

export const SNACKS_CATEGORIES = [
    ...SNACKS,
];
