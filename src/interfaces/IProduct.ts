export interface IProduct {
    id: number;
    title: string;
    description?: string;
    options: string[];
    price: number;
    image: string;
    subcategoryId: number;
}
