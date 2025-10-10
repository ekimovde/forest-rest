import { SubcategoryId } from "~/enums";

// --- Сеты ---
export const SETS = [
    {
        id: 1,
        title: 'Вечеринка',
        description: '(Калифорния с лососем, филадельфия лайт, чука ролл, аляска, сакура)',
        options: ['1600 гр'],
        price: 3200,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SETS
    },
    {
        id: 2,
        title: 'Фараон',
        description: '(Филадельфия люкс, калифорния с крабом, спайси лосось, якудза)',
        options: ['1400 гр'],
        price: 2500,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SETS
    },
    {
        id: 3,
        title: 'Теплый',
        description: '(Цезарь, яшими с угрем, вулкан)',
        options: ['1600 гр'],
        price: 2760,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SETS
    },
];

export const SETS_CATEGORIES = [
    ...SETS,
];
