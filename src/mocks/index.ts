import { CategoryId, CategoryTitleById, SubcategoryTitleById } from '~/constants';
import type { IProduct } from '~/interfaces';

import { ROLLS_CATEGORIES } from './rolls';

import { CHILDREN_MENU_CATEGORIES } from './childrenMenu';
import { COLD_SNACKS_CATEGORIES } from './coldSnacks';
import { DESSERTS_CATEGORIES } from './desserts';
import { GRILL_CATEGORIES } from './grill';
import { HOT_DISHES_CATEGORIES } from './hotDishes';
import { HOT_SNACKS_CATEGORIES } from './hotSnacks';
import { PASTA_CATEGORIES } from './pasta';
import { PIZZA_CATEGORIES } from './romanPizza';
import { SALADS_CATEGORIES } from './salads';
import { SETS_CATEGORIES } from './sets';
import { SIDE_DISHES_CATEGORIES } from './sideDishes';
import { SOUPS_CATEGORIES } from './soups';
import {
    DRINKS_CATEGORIES,
    TEA_IN_A_TEAPOT_CATEGORIES,
    AUTHOR_TEA_CATEGORIES,
    COFFEE_CATEGORIES,
    MATCHA_AND_COFFEE_DRINKS_CATEGORIES,
    WARMING_DRINKS_CATEGORIES,
    SMOOS_CATEGORIES,
    LEMONADE_CATEGORIES,
    MILK_COCKTAIL_CATEGORIES,
} from './drinks';

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
    [CategoryId.TEA_IN_A_TEAPOT]: {
        title: CategoryTitleById[CategoryId.TEA_IN_A_TEAPOT],
        href: '/menu/teaInATeapot',
        subcategories: getSubcategories(TEA_IN_A_TEAPOT_CATEGORIES),
        products: TEA_IN_A_TEAPOT_CATEGORIES,
    },
    [CategoryId.AUTHOR_TEA]: {
        title: CategoryTitleById[CategoryId.AUTHOR_TEA],
        href: '/menu/authorTea',
        subcategories: getSubcategories(AUTHOR_TEA_CATEGORIES),
        products: AUTHOR_TEA_CATEGORIES,
    },
    [CategoryId.COFFEE]: {
        title: CategoryTitleById[CategoryId.COFFEE],
        href: '/menu/coffee',
        subcategories: getSubcategories(COFFEE_CATEGORIES),
        products: COFFEE_CATEGORIES,
    },
    [CategoryId.MATCHA_AND_COFFEE_DRINKS]: {
        title: CategoryTitleById[CategoryId.MATCHA_AND_COFFEE_DRINKS],
        href: '/menu/matchaAndCoffeeDrinks',
        subcategories: getSubcategories(MATCHA_AND_COFFEE_DRINKS_CATEGORIES),
        products: MATCHA_AND_COFFEE_DRINKS_CATEGORIES,
    },
    [CategoryId.WARMING_DRINKS]: {
        title: CategoryTitleById[CategoryId.WARMING_DRINKS],
        href: '/menu/warmingDrinks',
        subcategories: getSubcategories(WARMING_DRINKS_CATEGORIES),
        products: WARMING_DRINKS_CATEGORIES,
    },
    [CategoryId.SMOOS]: {
        title: CategoryTitleById[CategoryId.SMOOS],
        href: '/menu/smoos',
        subcategories: getSubcategories(SMOOS_CATEGORIES),
        products: SMOOS_CATEGORIES,
    },
    [CategoryId.LEMONADE]: {
        title: CategoryTitleById[CategoryId.LEMONADE],
        href: '/menu/lemonade',
        subcategories: getSubcategories(LEMONADE_CATEGORIES),
        products: LEMONADE_CATEGORIES,
    },
    [CategoryId.MILK_COCKTAIL]: {
        title: CategoryTitleById[CategoryId.MILK_COCKTAIL],
        href: '/menu/milkCocktail',
        subcategories: getSubcategories(MILK_COCKTAIL_CATEGORIES),
        products: MILK_COCKTAIL_CATEGORIES,
    },
    [CategoryId.DRINKS]: {
        title: CategoryTitleById[CategoryId.DRINKS],
        href: '/menu/drinks',
        subcategories: getSubcategories(DRINKS_CATEGORIES),
        products: DRINKS_CATEGORIES,
    },
};
