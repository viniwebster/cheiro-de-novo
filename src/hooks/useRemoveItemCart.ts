import { useSetRecoilState } from "recoil";
import { useCart } from "../state/atom";

export const useRemoveItemCart = () => {
  const setRemoveCartItem = useSetRecoilState(useCart);
  return (buyId: string) => {
    setRemoveCartItem(item => [...item.filter(product => product.buyId !== buyId)])
  }
}