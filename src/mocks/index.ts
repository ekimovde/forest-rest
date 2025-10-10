import { CategoryId, CategoryTitleById, SubcategoryId, SubcategoryTitleById } from '~/enums';
import type { IProduct } from '~/interfaces/IProduct';

import { ROLLS_CATEGORIES } from './rolls';

import { CHILDREN_MENU_CATEGORIES } from './childrenMenu';
import { COLD_SNACKS_CATEGORIES } from './coldSnacks';
import { DESSERTS_CATEGORIES } from './desserts';
import { DRINKS_CATEGORIES } from './drinks';
import { GRILL_CATEGORIES } from './grill';
import { HOT_DISHES_CATEGORIES } from './hotDishes';
import { HOT_SNACKS_CATEGORIES } from './hotSnacks';
import { PASTA_CATEGORIES } from './pasta';
import { PIZZA_CATEGORIES } from './romanPizza';
import { SALADS_CATEGORIES } from './salads';
import { SETS_CATEGORIES } from './sets';
import { SIDE_DISHES_CATEGORIES } from './sideDishes';
import { SOUPS_CATEGORIES } from './soups';

const getSubcategories = (products: IProduct[]) => {
    const subcategoriesIds = new Set();

    products.forEach((product) => {
        subcategoriesIds.add(product.subcategoryId);
    });

    return Array.from(subcategoriesIds).map((subcategoryId) => ({
        title: SubcategoryTitleById[subcategoryId as keyof typeof SubcategoryTitleById],
        id: subcategoryId,
    }));
};

export const CATEGORIES = {
    [CategoryId.ROLLS]: {
        title: CategoryTitleById[CategoryId.ROLLS],
        href: '/menu/rolls',
        subcategories: getSubcategories(ROLLS_CATEGORIES),
        products: ROLLS_CATEGORIES,
    },
    [CategoryId.SETS]: {
        title: CategoryTitleById[CategoryId.SETS],
        href: '/menu/sets',
        subcategories: getSubcategories(SETS_CATEGORIES),
        products: SETS_CATEGORIES,
    },
    [CategoryId.SALADS]: {
        title: CategoryTitleById[CategoryId.SALADS],
        href: '/menu/salads',
        subcategories: getSubcategories(SALADS_CATEGORIES),
        products: SALADS_CATEGORIES,
    },
    [CategoryId.SOUPS]: {
        title: CategoryTitleById[CategoryId.SOUPS],
        href: '/menu/soups',
        subcategories: getSubcategories(SOUPS_CATEGORIES),
        products: SOUPS_CATEGORIES,
    },
    [CategoryId.GRILL]: {
        title: CategoryTitleById[CategoryId.GRILL],
        href: '/menu/grill',
        subcategories: getSubcategories(GRILL_CATEGORIES),
        products: GRILL_CATEGORIES,
    },
    [CategoryId.PASTA]: {
        title: CategoryTitleById[CategoryId.PASTA],
        href: '/menu/pasta',
        subcategories: getSubcategories(PASTA_CATEGORIES),
        products: PASTA_CATEGORIES,
    },
    [CategoryId.PIZZA]: {
        title: CategoryTitleById[CategoryId.PIZZA],
        href: '/menu/pizza',
        subcategories: getSubcategories(PIZZA_CATEGORIES),
        products: PIZZA_CATEGORIES,
    },
    [CategoryId.HOT_DISHES]: {
        title: CategoryTitleById[CategoryId.HOT_DISHES],
        href: '/menu/hotDishes',
        subcategories: getSubcategories(HOT_DISHES_CATEGORIES),
        products: HOT_DISHES_CATEGORIES,
    },
    [CategoryId.DRINKS]: {
        title: CategoryTitleById[CategoryId.DRINKS],
        href: '/menu/drinks',
        subcategories: getSubcategories(DRINKS_CATEGORIES),
        products: DRINKS_CATEGORIES,
    },
    [CategoryId.DESSERTS]: {
        title: CategoryTitleById[CategoryId.DESSERTS],
        href: '/menu/desserts',
        subcategories: getSubcategories(DESSERTS_CATEGORIES),
        products: DESSERTS_CATEGORIES,
    },
    [CategoryId.CHILDREN_MENU]: {
        title: CategoryTitleById[CategoryId.CHILDREN_MENU],
        href: '/menu/childrenMenu',
        subcategories: getSubcategories(CHILDREN_MENU_CATEGORIES),
        products: CHILDREN_MENU_CATEGORIES,
    },
    [CategoryId.SNACKS]: {
        title: CategoryTitleById[CategoryId.SNACKS],
        href: '/menu/snacks',
        subcategories: getSubcategories([
            ...COLD_SNACKS_CATEGORIES,
            ...HOT_SNACKS_CATEGORIES,
        ]),
        products: [
            ...COLD_SNACKS_CATEGORIES,
            ...HOT_SNACKS_CATEGORIES,
        ],
    },
    [CategoryId.SIDE_DISHES]: {
        title: CategoryTitleById[CategoryId.SIDE_DISHES],
        href: '/menu/sideDishes',
        subcategories: getSubcategories(SIDE_DISHES_CATEGORIES),
        products: SIDE_DISHES_CATEGORIES,
    },
};
