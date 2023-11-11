import axios from "axios";
import { IProduct } from "../interfaces/IProduct";

const http = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
});

export const getAllProducts = async () => {
  const response = await http.get<IProduct[]>('/products')
  return response.data
}

export const getProduct = async (id: string) => {
  const response = await http.get<IProduct>(`/products/${id}`)
  return response.data
}

export const getCategories = async () => {
  const response = await http.get<string[]>(`/products/categories`)
  return response.data
}

export const getByCategory = async (category: string) => {
  const response = await http.get<IProduct[]>(`/products/category/${category}`)
  return response.data
}

export default http