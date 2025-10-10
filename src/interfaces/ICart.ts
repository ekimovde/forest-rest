import type { IProduct } from './IProduct'

export interface ICartItem extends IProduct {
  quantity: number
}
