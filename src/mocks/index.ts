import type {IProduct} from '~/interfaces';
import {CategoryId, CategoryTitleById, SubcategoryTitleById} from '~/constants';
import {WOK_CATEGORIES} from './wok';
import {POKKE_CATEGORIES} from './pokke';
import {ROLLS_CATEGORIES} from './rolls';
import {CHILDREN_MENU_CATEGORIES} from './children';
import {DESSERTS_CATEGORIES} from './desserts';
import {GRILL_CATEGORIES} from './grill';
import {HOT_DISHES_CATEGORIES} from './hotDishes';
import {SNACKS_CATEGORIES} from './snacks';
import {PASTA_CATEGORIES} from './pasta';
import {PIZZA_CATEGORIES} from './pizza';
import {SALADS_CATEGORIES} from './salads';
import {SETS_CATEGORIES} from './sets';
import {SIDE_DISHES_CATEGORIES} from './sideDishes';
import {SOUPS_CATEGORIES} from './soups';
import {SOUPS_ASIAN_CATEGORIES} from './soupsAsian';
import {CHINESE_CUISINE_CATEGORIES} from './chineseCuisine';
import {DRINKS_CATEGORIES} from './drinks';

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
    [CategoryId.WOK]: {
        title: CategoryTitleById[CategoryId.WOK],
        href: '/menu/wok',
        subcategories: getSubcategories(WOK_CATEGORIES),
        products: WOK_CATEGORIES,
    },
    [CategoryId.POKKE]: {
        title: CategoryTitleById[CategoryId.POKKE],
        href: '/menu/pokke',
        subcategories: getSubcategories(POKKE_CATEGORIES),
        products: POKKE_CATEGORIES,
    },
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
    [CategoryId.SOUPS_ASIAN]: {
        title: CategoryTitleById[CategoryId.SOUPS_ASIAN],
        href: '/menu/asian',
        subcategories: getSubcategories(SOUPS_ASIAN_CATEGORIES),
        products: SOUPS_ASIAN_CATEGORIES,
    },
    [CategoryId.CHINESE_CUISINE]: {
        title: CategoryTitleById[CategoryId.CHINESE_CUISINE],
        href: '/menu/chineseCuisine',
        subcategories: getSubcategories(CHINESE_CUISINE_CATEGORIES),
        products: CHINESE_CUISINE_CATEGORIES,
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
    [CategoryId.SNACKS]: {
        title: CategoryTitleById[CategoryId.SNACKS],
        href: '/menu/snacks',
        subcategories: getSubcategories(SNACKS_CATEGORIES),
        products: SNACKS_CATEGORIES,
    },
    [CategoryId.SIDE_DISHES]: {
        title: CategoryTitleById[CategoryId.SIDE_DISHES],
        href: '/menu/sideDishes',
        subcategories: getSubcategories(SIDE_DISHES_CATEGORIES),
        products: SIDE_DISHES_CATEGORIES,
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
    [CategoryId.DRINKS]: {
        title: CategoryTitleById[CategoryId.DRINKS],
        href: '/menu/drinks',
        subcategories: getSubcategories(DRINKS_CATEGORIES),
        products: DRINKS_CATEGORIES,
    },
};
