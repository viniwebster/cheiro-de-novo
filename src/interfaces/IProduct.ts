export interface IProduct {
  id?: number,
  title: string,
  price: number,
  category?: string,
  image: string,
  description?: string
  rating?: {},
  buyId?: string
}

interface IRating {
  rate: number,
  count: number
}