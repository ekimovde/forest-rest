import {SubcategoryId} from "~/constants";

// --- Детское меню ---
export const CHILDREN_MENU = [
    {
        id: 1,
        title: 'Картофель фри с томатным соусом',
        options: ['170 гр'],
        price: 250,
        image: 'https://scdn.chibbis.ru/live/products/70336035a72404646e255a1d3645930b.jpeg',
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 2,
        title: 'Куриные наггетсы с соусом «Айоли»',
        options: ['170 гр'],
        price: 410,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 3,
        title: 'Сырные палочки с сырным соусом',
        options: ['170 гр'],
        price: 430,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 4,
        title: 'Картофельное пюре с пармезаном',
        options: ['170 гр'],
        price: 180,
        image: 'https://scdn.chibbis.ru/live/products/2d34a6915630e34a42ce3495e8c41c3b.jpeg',
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 5,
        title: 'Батат фри',
        options: ['130 гр'],
        price: 300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 6,
        title: 'Лимонад клубничный со сгущенкой',
        options: ['500 мл'],
        price: 330,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 7,
        title: 'Какао с маршмеллоу',
        options: ['350/400 мл'],
        price: 370, // TODO: change price
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 8,
        title: 'Горячий шоколад',
        options: ['180 мл'],
        price: 300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
];

export const CHILDREN_MENU_CATEGORIES = [
    ...CHILDREN_MENU,
];
