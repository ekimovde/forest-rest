import { SubcategoryId } from "~/constants";

// --- Холодные закуски ---
export const COLD_SNACKS = [
    {
        id: 9,
        title: 'Сугудай из байкальского омуля',
        options: ['260 гр'],
        price: 760,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
    {
        id: 10,
        title: 'Семга малосольная',
        options: ['90 гр'],
        price: 860,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
    {
        id: 11,
        title: 'Соленая грудинка с домашней горчицей',
        options: ['150 гр'],
        price: 320,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
    {
        id: 12,
        title: 'Ростбиф с маринованным луком и бальзамическим кремом',
        options: ['120 гр'],
        price: 780,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
    {
        id: 13,
        title: 'Говяжий язык с дижонской горчицей',
        options: ['100 гр'],
        price: 660,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
    {
        id: 14,
        title: 'Грузди / рыжики соленые с картофелем',
        options: ['260 гр'],
        price: 660,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
    {
        id: 15,
        title: 'Домашние соленья',
        description: '(Маринованная капуста, малосольные огурцы, помидоры черри в томатном соусе, маринованный лук)',
        options: ['420 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
    {
        id: 16,
        title: 'Доска с сырами',
        options: ['210 гр'],
        price: 1090,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
    {
        id: 17,
        title: 'Хлебная корзина',
        options: ['120 гр'],
        price: 220,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.COLD_SNACKS
    },
];

export const COLD_SNACKS_CATEGORIES = [
    ...COLD_SNACKS,
];
