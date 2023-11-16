import { useRecoilValue } from "recoil"
import { useCart } from "../state/atom"

export const useCartState = () => {
  return useRecoilValue(useCart)
}