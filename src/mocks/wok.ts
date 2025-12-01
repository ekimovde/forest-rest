import {SubcategoryId} from "~/constants";
import wok1 from '~/assets/images/wok/picture-1.jpg';
import wok2 from '~/assets/images/wok/picture-2.jpg';
import wok3 from '~/assets/images/wok/picture-3.jpg';
import wok4 from '~/assets/images/wok/picture-4.jpg';
import wok5 from '~/assets/images/wok/picture-5.jpg';
import wok6 from '~/assets/images/wok/picture-6.jpg';
import wok7 from '~/assets/images/wok/picture-7.jpg';
import wok8 from '~/assets/images/wok/picture-8.jpg';
import wok9 from '~/assets/images/wok/picture-9.jpg';

// --- WOK ---
export const WOK = [
    {
        id: 116,
        title: 'Соба с креветкой и кальмаром',
        options: ['330 гр'],
        price: 590,
        image: wok1,
        subcategoryId: SubcategoryId.WOK
    },
    {
        id: 117,
        title: 'Соба с курицей',
        description: '(лапша соба, куриная грудка, морковь, перец, кабачок, соус вок, кунжут, зеленый лук)',
        options: ['330 гр'],
        price: 490,
        image: wok2,
        subcategoryId: SubcategoryId.WOK
    },
    {
        id: 118,
        title: 'Соба со свининой',
        description: '(лапша соба, свинина, морковь, перец, кабачок, соус вок, кунжут, зеленый лук)',
        options: ['330 гр'],
        price: 490,
        image: wok3,
        subcategoryId: SubcategoryId.WOK
    },
    {
        id: 119,
        title: 'Тяхан с креветкой и кальмаром',
        description: '(рис, тигровые креветки, кальмар, морковь, перец, кабачок, соус вок, кунжут, зеленый лук)',
        options: ['330 гр'],
        price: 590,
        image: wok4,
        subcategoryId: SubcategoryId.WOK
    },
    {
        id: 120,
        title: 'Тяхан с курицей',
        description: '(рис, куриная грудка, морковь, перец, кабачок, соус вок, кунжут, зеленый лук)',
        options: ['330 гр'],
        price: 490,
        image: wok5,
        subcategoryId: SubcategoryId.WOK
    },
    {
        id: 121,
        title: 'Тяхан со свининой',
        description: '(рис, свинина, морковь, перец, кабачок, соус вок, кунжут, зеленый лук)',
        options: ['330 гр'],
        price: 490,
        image: wok6,
        subcategoryId: SubcategoryId.WOK
    },
    {
        id: 122,
        title: 'Удон с креветкой и кальмаром',
        options: ['330 гр'],
        price: 590,
        image: wok7,
        subcategoryId: SubcategoryId.WOK
    },
    {
        id: 123,
        title: 'Удон с курицей',
        description: '(лапша удон, куриная грудка, морковь, перец, кабачок, соус вок, кунжут, зеленый лук)',
        options: ['330 гр'],
        price: 490,
        image: wok8,
        subcategoryId: SubcategoryId.WOK
    },
    {
        id: 124,
        title: 'Удон со свининой',
        description: '(лапша удон, свинина, морковь, перец, кабачок, соус вок, кунжут, зеленый лук)',
        options: ['330 гр'],
        price: 490,
        image: wok9,
        subcategoryId: SubcategoryId.WOK
    },
];

export const WOK_CATEGORIES = [
    ...WOK,
];
