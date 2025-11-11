import {SubcategoryId} from "~/constants";

// --- Роллы запеченные ---
export const BAKED_ROLLS = [
    {
        id: 102,
        title: 'Запеченный вулкан',
        description: '(Творожный сыр, семга, креветки, икра масаго)',
        options: ['240 гр'],
        price: 720,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 103,
        title: 'Запеченный ниндзя',
        description: '(Семга, краб микс, огурец, икра мойвы, кунжут)',
        options: ['380 гр'],
        price: 720,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 104,
        title: 'Запеченный с креветкой',
        description: '(Креветка, творожный сыр, огурец, икра мойвы)',
        options: ['350 гр'],
        price: 570,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 105,
        title: 'Запеченный с угрем',
        description: '(Угорь, творожный сыр, огурец)',
        options: ['350 гр'],
        price: 780,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 106,
        title: 'Запеченный сяке',
        description: '(Семга, творожный сыр, кунжут, соус унаги)',
        options: ['350 гр'],
        price: 440,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 107,
        title: 'Запеченный цезарь',
        description: '(Куриная грудка варено-копченая, салат, помидор, соус цезарь, творожный сыр)',
        options: ['360 гр'],
        price: 490,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 108,
        title: 'Запеченный яшими',
        description: '(Краб микс, семга, креветка, икра мойвы, творожный сыр, соус унаги)',
        options: ['400 гр'],
        price: 800,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
];

// --- Роллы ---
export const ROLLS = [
    {
        id: 109,
        title: 'Аляска',
        description: '(Семга, огурец, творожный сыр, кунжут)',
        options: ['300 гр'],
        price: 570,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 110,
        title: 'Калифорния с крабом',
        description: '(Краб микс, огурец, икра мойвы)',
        options: ['300 гр'],
        price: 360,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 111,
        title: 'Калифорния с лососем',
        description: '(Семга, икра мойвы, творожный сыр)',
        options: ['300 гр'],
        price: 690,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 112,
        title: 'Канада с угрем',
        description: '(Угорь, креветка, огурец, кунжут, творожный сыр, соус унаги)',
        options: ['300 гр'],
        price: 1100,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 113,
        title: 'Спайси лосось',
        description: '(Семга, огурец, соус спайси, соус шрирача)',
        options: ['340 гр'],
        price: 720,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 114,
        title: 'Сяке-наги',
        description: '(Креветка, семга, угорь, огурец, кунжут, сыр творожный, соус унаги)',
        options: ['300 гр'],
        price: 700,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 115,
        title: 'Филадельфия лайт',
        description: '(Семга, огурец, сыр творожный)',
        options: ['320 гр'],
        price: 850,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 116,
        title: 'Филадельфия люкс',
        description: '(Креветка, семга, икра мойвы, огурец, сыр творожный)',
        options: ['320 гр'],
        price: 990,
        image: 'https://scdn.chibbis.ru/live/products/4c32ca056aafb44534e1ca8893dee4b2.jpeg',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 117,
        title: 'Чука ролл',
        description: '(Салат чука, лист салата, кунжут, сыр творожный, ореховый соус)',
        options: ['280 гр'],
        price: 350,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 118,
        title: 'Якудза',
        description: '(Краб микс, семга, творожный сыр, огурец, соус спайси)',
        options: ['320 гр'],
        price: 680,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
];

export const ROLLS_CATEGORIES = [
    ...BAKED_ROLLS,
    ...ROLLS,
];
