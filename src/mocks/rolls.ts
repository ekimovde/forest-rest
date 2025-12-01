import {SubcategoryId} from "~/constants";
import friedRoll1 from '~/assets/images/friedRolls/picture-1.jpg';
import friedRoll2 from '~/assets/images/friedRolls/picture-2.jpg';
import friedRoll3 from '~/assets/images/friedRolls/picture-3.jpg';
import friedRoll4 from '~/assets/images/friedRolls/picture-4.jpg';
import friedRoll5 from '~/assets/images/friedRolls/picture-5.jpg';
import friedRoll6 from '~/assets/images/friedRolls/picture-6.jpg';
import friedRoll7 from '~/assets/images/friedRolls/picture-7.jpg';
import bakedRoll1 from '~/assets/images/bakedRolls/picture-1.jpg';
import bakedRoll2 from '~/assets/images/bakedRolls/picture-2.jpg';
import bakedRoll3 from '~/assets/images/bakedRolls/picture-3.jpg';
import bakedRoll4 from '~/assets/images/bakedRolls/picture-4.jpg';
import bakedRoll5 from '~/assets/images/bakedRolls/picture-5.jpg';
import bakedRoll6 from '~/assets/images/bakedRolls/picture-6.jpg';
import bakedRoll7 from '~/assets/images/bakedRolls/picture-7.jpg';
import bakedRoll8 from '~/assets/images/bakedRolls/picture-8.jpg';
import roll1 from '~/assets/images/rolls/picture-1.jpg';
import roll2 from '~/assets/images/rolls/picture-2.jpg';
import roll3 from '~/assets/images/rolls/picture-3.jpg';
import roll4 from '~/assets/images/rolls/picture-4.jpg';
import roll5 from '~/assets/images/rolls/picture-5.jpg';
import roll6 from '~/assets/images/rolls/picture-6.jpg';
import roll7 from '~/assets/images/rolls/picture-7.jpg';
import roll8 from '~/assets/images/rolls/picture-8.jpg';
import roll9 from '~/assets/images/rolls/picture-9.jpg';

// --- Роллы жареные ---
export const FRIED_ROLLS = [
    {
        id: 57,
        title: 'Калифорния темпура',
        description: '(рис, нори, творожный сыр, краб микс, огурец, масаго, соевый, васаби, имбирь)',
        options: ['220 гр'],
        price: 440,
        image: friedRoll1,
        subcategoryId: SubcategoryId.FRIED_ROLLS
    },
    {
        id: 58,
        title: 'С беконом',
        description: '(рис, нори, сыр чеддер, бекон, огурец, соевый, васаби, имбирь)',
        options: ['200 гр'],
        price: 560,
        image: friedRoll2,
        subcategoryId: SubcategoryId.FRIED_ROLLS
    },
    {
        id: 59,
        title: 'Сяке хот',
        description: '(рис, нори, творожный сыр, семга, огурец, соевый, васаби, имбирь)',
        options: ['230 гр'],
        price: 690,
        image: friedRoll3,
        subcategoryId: SubcategoryId.FRIED_ROLLS
    },
    {
        id: 60,
        title: 'Тортилья сырная с креветкой',
        description: '(Угорь, творожный сыр, огурец)',
        options: ['220 гр'],
        price: 590,
        image: friedRoll4,
        subcategoryId: SubcategoryId.FRIED_ROLLS
    },
    {
        id: 61,
        title: 'Три сыра',
        description: '(рис, нори, творожный сыр, чеддер, дор блю, соевый, васаби, имбирь)',
        options: ['250 гр'],
        price: 560,
        image: friedRoll5,
        subcategoryId: SubcategoryId.FRIED_ROLLS
    },
    {
        id: 62,
        title: 'Цезарь',
        description: '(рис, нори, творожный сыр, куриная грудка, салат, помидор, соевый, васаби, имбирь)',
        options: ['280 гр'],
        price: 490,
        image: friedRoll6,
        subcategoryId: SubcategoryId.FRIED_ROLLS
    },
    {
        id: 63,
        title: 'Эби хот',
        description: '(рис, нори, творожный сыр, креветка темпура, огурец, соевый, васаби, имбирь)',
        options: ['270 гр'],
        price: 690,
        image: friedRoll7,
        subcategoryId: SubcategoryId.FRIED_ROLLS
    },
];

// --- Роллы запеченые ---
export const BAKED_ROLLS = [
    {
        id: 64,
        title: 'Вулкан',
        description: '(рис, нори, творожный сыр, сырная шапка, семга, креветка, масаго, соевый, васаби, имбирь)',
        options: ['320 гр'],
        price: 690,
        image: bakedRoll1,
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 65,
        title: 'Ниндзя',
        description: '(рис, нори, творожный сыр, сырная шапка, семга, краб микс, огурец, кунжут,соевый, васаби, имбирь)',
        options: ['350 гр'],
        price: 590,
        image: bakedRoll2,
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 66,
        title: 'С гребешком',
        description: '(рис, нори, творожный сыр, сырная шапка, гребешок, огурец, соевый, васаби, имбирь',
        options: ['290 гр'],
        price: 660,
        image: bakedRoll3,
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 67,
        title: 'С креветкой',
        description: '(рис, нори, творожный сыр, сырная шапка, креветка, огурец,масаго, соевый, васаби, имбирь)',
        options: ['310 гр'],
        price: 680,
        image: bakedRoll4,
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 68,
        title: 'С угрем',
        description: '(рис, нори, творожный сыр, сырная шапка, угорь, огурец, соевый, васаби, имбирь)',
        options: ['320 гр'],
        price: 750,
        image: bakedRoll5,
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 69,
        title: 'Сяке',
        description: '(рис, нори, творожный сыр, сырная шапка, семга, огурец, кунжут, соус унаги, соевый, васаби, имбирь)',
        options: ['340 гр'],
        price: 600,
        image: bakedRoll6,
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 70,
        title: 'Цезарь',
        description: '(рис, нори, творожный сыр, сырная шапка, куриная грудка, салат, помидор, соус цезарь,соевый, васаби, имбирь)',
        options: ['340 гр'],
        price: 590,
        image: bakedRoll7,
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 71,
        title: 'Яшими',
        description: '(рис, нори, творожный сыр, сырная шапка, семга, краб микс, креветка,масаго,соус унаги, соевый, васаби, имбирь)',
        options: ['370 гр'],
        price: 790,
        image: bakedRoll8,
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
];

// --- Роллы ---
export const ROLLS = [
    {
        id: 72,
        title: 'Аляска',
        description: '(рис, нори, творожный сыр, семга, креветка, масаго, соевый, васаби, имбирь)',
        options: ['250 гр'],
        price: 600,
        image: roll1,
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 73,
        title: 'Канни капа',
        options: ['230 гр'],
        price: 460,
        image: roll2,
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 74,
        title: 'Кранч',
        description: '(рис, нори, креветка темпура, салат, лук фри, соевый, васаби, имбирь)',
        options: ['190 гр'],
        price: 560,
        image: roll3,
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 75,
        title: 'С беконом',
        description: '(рис, нори, творожный сыр, бекон, огурец, соус вок, соевый, васаби, имбирь)',
        options: ['200 гр'],
        price: 490,
        image: roll4,
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 76,
        title: 'С гребешком',
        description: '(рис, нори, творожный сыр, гребешок, масаго, помидор, салат, кунжут, соевый, васаби, имбирь)',
        options: ['200 гр'],
        price: 690,
        image: roll5,
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 77,
        title: 'С семгой и побегами бамбука',
        description: '(рис, нори, творожный сыр, семга, побеги бамбука, соус спайси, соевый, васаби, имбирь)',
        options: ['230 гр'],
        price: 990,
        image: roll6,
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 78,
        title: 'С семгой и угрем',
        options: ['200 гр'],
        price: 690,
        image: roll7,
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 79,
        title: 'Филадельфия',
        description: '(рис, нори, творожный сыр, семга, огурец, соевый, васаби, имбирь)',
        options: ['260 гр'],
        price: 880,
        image: roll8,
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 80,
        title: 'Филадельфия люкс',
        description: '(рис, нори, творожный сыр, семга, креветка темпура, масаго, соевый, васаби, имбирь)',
        options: ['220 гр'],
        price: 890,
        image: roll9,
        subcategoryId: SubcategoryId.ROLLS
    },
];

export const ROLLS_CATEGORIES = [
    ...FRIED_ROLLS,
    ...BAKED_ROLLS,
    ...ROLLS,
];
