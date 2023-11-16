import { atom } from "recoil"
import { IProduct } from "../interfaces/IProduct"

export const userState = atom({
  key: 'userState',
  default: false
})

export const useCart = atom<IProduct[]>({
  key: 'useCart',
  default: []
})