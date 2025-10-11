import { SubcategoryId } from "~/constants";

// --- Сеты ---
export const SETS = [
    {
        id: 135,
        title: 'Вечеринка',
        description: '(Калифорния с лососем, филадельфия лайт, чука ролл, аляска, сакура)',
        options: ['1600 гр'],
        price: 3200,
        image: 'https://scdn.chibbis.ru/live/products/64f93d34630de53dc234428c14a0453e.jpeg',
        subcategoryId: SubcategoryId.SETS
    },
    {
        id: 136,
        title: 'Фараон',
        description: '(Филадельфия люкс, калифорния с крабом, спайси лосось, якудза)',
        options: ['1400 гр'],
        price: 2500,
        image: 'https://scdn.chibbis.ru/live/products/72b4c7cb1e590feee3a01f1c97fa7dfa.jpeg',
        subcategoryId: SubcategoryId.SETS
    },
    {
        id: 137,
        title: 'Теплый',
        description: '(Цезарь, яшими с угрем, вулкан)',
        options: ['1600 гр'],
        price: 2760,
        image: 'https://scdn.chibbis.ru/live/products/c3eb3d02a9364dd6777a49b565d696e9.jpeg',
        subcategoryId: SubcategoryId.SETS
    },
];

export const SETS_CATEGORIES = [
    ...SETS,
];
