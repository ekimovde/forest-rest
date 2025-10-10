import { SubcategoryId } from "~/enums";

// --- Салаты ---
export const SALADS = [
    {
        id: 1,
        title: 'Салат из печени кролика с забайкальскими маслятами',
        options: ['200 гр'],
        price: 640,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 2,
        title: 'Салат с хрустящей говядиной и древесными грибами',
        options: ['200 гр'],
        price: 740,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 3,
        title: 'Дальневосточный салат с диким папоротником, олениной и грибной эспумой',
        options: ['250 гр'],
        price: 950,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 4,
        title: 'Салат с ростбифом и вялеными томатами',
        options: ['170 гр'],
        price: 920,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 5,
        title: 'Салат с бобами эдамаме, авокадо и слайсами цукини',
        options: ['240 гр'],
        price: 490,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 6,
        title: 'Салат с баклажаном фри с творожным сыром в соусе сладкий чили',
        options: ['230 гр'],
        price: 460,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 7,
        title: 'Нисуаз с тунцом',
        options: ['220 гр'],
        price: 650,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 8,
        title: 'Салат с морепродуктами с соусом манго-чили',
        description: '(Гребешки, мидии осьминог, кальмар)',
        options: ['230 гр'],
        price: 970,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 9,
        title: 'Винегрет с сельдью',
        options: ['250 гр'],
        price: 340,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 10,
        title: 'Цезарь с креветками',
        options: ['220 гр'],
        price: 890,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 11,
        title: 'Цезарь с курицей',
        options: ['200 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
    {
        id: 12,
        title: 'Оливье с малосоленой семгой, перепелиным яйцом и икрой лосося',
        options: ['250 гр'],
        price: 560,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.SALADS
    },
];

export const SALADS_CATEGORIES = [
    ...SALADS,
];
