import {SubcategoryId} from "~/constants";
import set1 from '~/assets/images/sets/picture-1.jpg';
import set2 from '~/assets/images/sets/picture-2.jpg';
import set3 from '~/assets/images/sets/picture-3.jpg';

// --- Сеты ---
export const SETS = [
    {
        id: 135,
        title: 'Америка',
        description: '(калифорния с крабом, канада с угрем, филадельфиялайт, соевый, васаби, имбирь)',
        options: ['790 гр'],
        price: 2290,
        image: set1,
        subcategoryId: SubcategoryId.SETS
    },
    {
        id: 136,
        title: 'На компанию',
        description: '(Филадельфия люкс, калифорния с крабом, спайси лосось, якудза)',
        options: ['1750 гр'],
        price: 3990,
        image: set2,
        subcategoryId: SubcategoryId.SETS
    },
    {
        id: 137,
        title: 'Трио',
        description: '(филадельфия лайт, запеченный цезарь, жареная калифорния, соевый, васаби, имбирь)',
        options: ['830 гр'],
        price: 1790,
        image: set3,
        subcategoryId: SubcategoryId.SETS
    },
];

export const SETS_CATEGORIES = [
    ...SETS,
];
