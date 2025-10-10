import { SubcategoryId } from "~/enums";

// --- Роллы запеченные ---
export const BAKED_ROLLS = [
    {
        id: 1,
        title: 'Запеченный вулкан',
        description: '(Творожный сыр, семга, креветки, икра масаго)',
        options: ['240 гр'],
        price: 720,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 2,
        title: 'Запеченный ниндзя',
        description: '(Семга, краб микс, огурец, икра мойвы, кунжут)',
        options: ['380 гр'],
        price: 720,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 3,
        title: 'Запеченный с креветкой',
        description: '(Креветка, творожный сыр, огурец, икра мойвы)',
        options: ['350 гр'],
        price: 570,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 4,
        title: 'Запеченный с угрем',
        description: '(Угорь, творожный сыр, огурец)',
        options: ['350 гр'],
        price: 780,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 5,
        title: 'Запеченный сяке',
        description: '(Семга, творожный сыр, кунжут, соус унаги)',
        options: ['350 гр'],
        price: 440,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 6,
        title: 'Запеченный цезарь',
        description: '(Куриная грудка варено-копченая, салат, помидор, соус цезарь, творожный сыр)',
        options: ['360 гр'],
        price: 490,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.BAKED_ROLLS
    },
    {
        id: 7,
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
        id: 1,
        title: 'Аляска',
        description: '(Семга, огурец, творожный сыр, кунжут)',
        options: ['300 гр'],
        price: 570,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 2,
        title: 'Калифорния с крабом',
        description: '(Краб микс, огурец, икра мойвы)',
        options: ['300 гр'],
        price: 360,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 3,
        title: 'Калифорния с лососем',
        description: '(Семга, икра мойвы, творожный сыр)',
        options: ['300 гр'],
        price: 690,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 4,
        title: 'Канада с угрем',
        description: '(Угорь, креветка, огурец, кунжут, творожный сыр, соус унаги)',
        options: ['300 гр'],
        price: 1100,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 5,
        title: 'Спайси лосось',
        description: '(Семга, огурец, соус спайси, соус шрирача)',
        options: ['340 гр'],
        price: 720,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 6,
        title: 'Сяке-наги',
        description: '(Креветка, семга, угорь, огурец, кунжут, сыр творожный, соус унаги)',
        options: ['300 гр'],
        price: 700,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 7,
        title: 'Филадельфия лайт',
        description: '(Семга, огурец, сыр творожный)',
        options: ['320 гр'],
        price: 850,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 8,
        title: 'Филадельфия люкс',
        description: '(Креветка, семга, икра мойвы, огурец, сыр творожный)',
        options: ['320 гр'],
        price: 990,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 9,
        title: 'Чука ролл',
        description: '(Салат чука, лист салата, кунжут, сыр творожный, ореховый соус)',
        options: ['280 гр'],
        price: 350,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.ROLLS
    },
    {
        id: 10,
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
