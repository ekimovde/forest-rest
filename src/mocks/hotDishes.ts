import { SubcategoryId } from "~/constants";

// --- Горячие блюда ---
export const HOT_DISHES = [
    {
        id: 83,
        title: 'Жареный картофель со свининой и грибами',
        options: ['350 гр'],
        price: 480,
        image: 'https://scdn.chibbis.ru/live/products/88414b1843d5abadeacaf1b21bcbd2fe.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 84,
        title: 'Вареники с картофелем, шкварками и грибным соусом',
        options: ['300 гр'],
        price: 280,
        image: 'https://scdn.chibbis.ru/live/products/bb62e45b5b65930502137be09afc1b0e.jpeg',
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
        image: 'https://scdn.chibbis.ru/live/products/9af71730ccdc3fe9a21324e673af57ec.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 87,
        title: 'Нежный палтус на овощном соте',
        options: ['280 гр'],
        price: 1730,
        image: 'https://scdn.chibbis.ru/live/products/9b1321f5a96119dd3c9853ad693a9c99.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 88,
        title: 'Тушеная говядина с птитимом и овощами',
        options: ['390 гр'],
        price: 1560,
        image: 'https://scdn.chibbis.ru/live/products/10f2d13b8de928ad2de66d6e9246a50f.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 89,
        title: 'Буженина запеченная с пюре и соусом из грибов',
        options: ['380 гр'],
        price: 920,
        image: 'https://scdn.chibbis.ru/live/products/786e4609d3285f63b7912d12f2d3b44e.jpeg',
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
        image: 'https://scdn.chibbis.ru/live/products/4c930a92e4fd0f38119343a27cca872f.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 92,
        title: 'Утиная грудка с брусничным чатни',
        options: ['100 гр'],
        price: 300,
        image: 'https://scdn.chibbis.ru/live/products/88230d5b45837a4d6bd2cb7742ea4c32.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 93,
        title: 'Дорадо запеченная с пармезаном',
        options: ['450 гр'],
        price: 1900,
        image: 'https://scdn.chibbis.ru/live/products/95005df2ecfa8f4af4099ac0485caf6f.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 94,
        title: 'Треска в сливочно-икорном соусе',
        options: ['200 гр'],
        price: 950,
        image: 'https://scdn.chibbis.ru/live/products/59e8ea3b459aff03dd4a181dce4466af.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 95,
        title: 'Пельмени по-домашнему',
        description: '(с бульоном / без бульона)',
        options: ['300 гр'],
        price: 360,
        image: 'https://scdn.chibbis.ru/live/products/0973c53ea0166cdf12686dda6468bed9.jpeg',
        subcategoryId: SubcategoryId.HOT_DISHES
    },
];

export const HOT_DISHES_CATEGORIES = [
    ...HOT_DISHES,
];
