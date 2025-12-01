import {SubcategoryId} from "~/constants";
import hotDishe1 from '~/assets/images/hotDishes/picture-1.jpg';
import hotDishe2 from '~/assets/images/hotDishes/picture-2.jpg';
import hotDishe3 from '~/assets/images/hotDishes/picture-3.jpg';
import hotDishe4 from '~/assets/images/hotDishes/picture-4.jpg';
import hotDishe5 from '~/assets/images/hotDishes/picture-5.jpg';
import hotDishe6 from '~/assets/images/hotDishes/picture-6.jpg';
import hotDishe7 from '~/assets/images/hotDishes/picture-7.jpg';
import hotDishe8 from '~/assets/images/hotDishes/picture-8.jpg';
import hotDishe9 from '~/assets/images/hotDishes/picture-9.jpg';
import hotDishe10 from '~/assets/images/hotDishes/picture-10.jpg';
import hotDishe11 from '~/assets/images/hotDishes/picture-11.jpg';
import hotDishe12 from '~/assets/images/hotDishes/picture-12.jpg';
import hotDishe13 from '~/assets/images/hotDishes/picture-13.jpg';


// --- Горячие блюда ---
export const HOT_DISHES = [
    {
        id: 83,
        title: 'Ароматные креветки на цукини гриль с хумусом',
        options: ['190 гр'],
        price: 1100,
        image: hotDishe1,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 84,
        title: 'Буженина запеченая с пюре и соусом из грибов',
        options: ['360 гр'],
        price: 980,
        image: hotDishe2,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 85,
        title: 'Вареники с картофелем, шкварками и грибным соусом',
        options: ['300 гр'],
        price: 440,
        image: hotDishe3,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 86,
        title: 'Вареники с творогом, полевым чесноком и сметаной',
        options: ['280 гр'],
        price: 340,
        image: hotDishe4,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 87,
        title: 'Говядина Брискет с Сибирской кашей',
        options: ['280 гр'],
        price: 1080,
        image: hotDishe5,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 88,
        title: 'Дорадо запеченная с пармезаном',
        options: ['450 гр'],
        price: 1940,
        image: hotDishe6,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 89,
        title: 'Жареный картофель со свининой и грибами',
        options: ['350 гр'],
        price: 540,
        image: hotDishe7,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 90,
        title: 'Колбаски на гриле с тушеной капустой',
        options: ['300 гр'],
        price: 1390,
        image: hotDishe8,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 91,
        title: 'Мидии в соусе блю чиз',
        options: ['270 гр'],
        price: 990,
        image: hotDishe9,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 92,
        title: 'Нежный палтус на овощном соте',
        options: ['280 гр'],
        price: 1730,
        image: hotDishe10,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 92,
        title: 'Свиные ребра на гриле MAX м картофелем айдахо',
        options: ['600 гр'],
        price: 1580,
        image: hotDishe11,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 92,
        title: 'Утиная грудка с брусничным чатни',
        options: ['100 гр'],
        price: 340,
        image: hotDishe12,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
    {
        id: 92,
        title: 'Щеки в сливочном соусе с картофелем',
        options: ['370 гр'],
        price: 1280,
        image: hotDishe13,
        subcategoryId: SubcategoryId.HOT_DISHES
    },
];

export const HOT_DISHES_CATEGORIES = [
    ...HOT_DISHES,
];
