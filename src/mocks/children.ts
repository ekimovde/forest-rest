import {SubcategoryId} from "~/constants";
import children1 from '~/assets/images/children/picture-1.jpg';
import children2 from '~/assets/images/children/picture-2.jpg';
import children3 from '~/assets/images/children/picture-3.jpg';
import children4 from '~/assets/images/children/picture-4.jpg';
import children5 from '~/assets/images/children/picture-5.jpg';

// --- Детское меню ---
export const CHILDREN_MENU = [
    {
        id: 1,
        title: 'Батат фри',
        options: ['130 гр'],
        price: 300,
        image: children1,
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 2,
        title: 'Картофель фри с томатным соусом',
        options: ['170 гр'],
        price: 260,
        image: children2,
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 3,
        title: 'Картофельное пюре с пармезаном',
        options: ['170 гр'],
        price: 220,
        image: children3,
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 4,
        title: 'Куриные наггетсы с соусом Айоли',
        options: ['170 гр'],
        price: 410,
        image: children4,
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
    {
        id: 5,
        title: 'Сырные палочки с сырным соусом',
        options: ['170 гр'],
        price: 450,
        image: children5,
        subcategoryId: SubcategoryId.CHILDREN_MENU
    },
];

export const CHILDREN_MENU_CATEGORIES = [
    ...CHILDREN_MENU,
];
