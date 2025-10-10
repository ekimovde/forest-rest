import { SubcategoryId } from "~/enums";

// --- Горячие блюда ---
export const HOT_DISHES = [
    {
        id: 1,
        title: 'Жареный картофель со свининой и грибами',
        options: ['350 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 2,
        title: 'Вареники с картофелем, шкварками и грибным соусом',
        options: ['300 гр'],
        price: 280,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 3,
        title: 'Вареники с творогом, полевым чесноком и сметаной',
        options: ['280 гр'],
        price: 280,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 4,
        title: 'Каре ягненка в смородинном соусе и картофельным гратеном',
        options: ['360 гр'],
        price: 1700,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 5,
        title: 'Нежный палтус на овощном соте',
        options: ['280 гр'],
        price: 1730,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 6,
        title: 'Тушеная говядина с птитимом и овощами',
        options: ['390 гр'],
        price: 1560,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 7,
        title: 'Буженина запеченная с пюре и соусом из грибов',
        options: ['380 гр'],
        price: 920,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 8,
        title: 'Говядина «Брискет» с сибирской кашей',
        options: ['280 гр'],
        price: 1080,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 9,
        title: 'Щечки в сливочном соусе с картофелем',
        options: ['370 гр'],
        price: 980,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 10,
        title: 'Утиная грудка с брусничным чатни',
        options: ['100 гр'],
        price: 300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 11,
        title: 'Дорадо запеченная с пармезаном',
        options: ['450 гр'],
        price: 1900,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 12,
        title: 'Треска в сливочно-икорном соусе',
        options: ['200 гр'],
        price: 950,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 13,
        title: 'Пельмени по-домашнему',
        description: '(с бульоном / без бульона)',
        options: ['300 гр'],
        price: 360,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
];

export const HOT_DISHES_CATEGORIES = [
    ...HOT_DISHES,
];
