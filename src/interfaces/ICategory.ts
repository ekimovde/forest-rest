import type { IProduct } from './IProduct';
import type { ISubcategory } from './ISubcategory';

export interface ICategory {
    title: string;
    href: string;
    subcategories: ISubcategory[];
    products: IProduct[];
}
