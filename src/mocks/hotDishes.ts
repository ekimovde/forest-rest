import { SubcategoryId } from "~/constants";

// --- Горячие блюда ---
export const HOT_DISHES = [
    {
        id: 83,
        title: 'Жареный картофель со свининой и грибами',
        options: ['350 гр'],
        price: 480,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 84,
        title: 'Вареники с картофелем, шкварками и грибным соусом',
        options: ['300 гр'],
        price: 280,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 85,
        title: 'Вареники с творогом, полевым чесноком и сметаной',
        options: ['280 гр'],
        price: 280,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 86,
        title: 'Каре ягненка в смородинном соусе и картофельным гратеном',
        options: ['360 гр'],
        price: 1700,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 87,
        title: 'Нежный палтус на овощном соте',
        options: ['280 гр'],
        price: 1730,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 88,
        title: 'Тушеная говядина с птитимом и овощами',
        options: ['390 гр'],
        price: 1560,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 89,
        title: 'Буженина запеченная с пюре и соусом из грибов',
        options: ['380 гр'],
        price: 920,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 90,
        title: 'Говядина «Брискет» с сибирской кашей',
        options: ['280 гр'],
        price: 1080,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 91,
        title: 'Щечки в сливочном соусе с картофелем',
        options: ['370 гр'],
        price: 980,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 92,
        title: 'Утиная грудка с брусничным чатни',
        options: ['100 гр'],
        price: 300,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 93,
        title: 'Дорадо запеченная с пармезаном',
        options: ['450 гр'],
        price: 1900,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 94,
        title: 'Треска в сливочно-икорном соусе',
        options: ['200 гр'],
        price: 950,
        image: 'https://via.placeholder.com/150',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 95,
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
