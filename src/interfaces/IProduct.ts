export interface IProduct {
  id?: number,
  title: string,
  price: number,
  category?: string,
  image: string,
  description?: string
  rating?: {}
}

interface IRating {
  rate: number,
  count: number
}