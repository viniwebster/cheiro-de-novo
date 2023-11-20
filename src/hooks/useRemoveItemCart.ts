import { useSetRecoilState } from "recoil";
import { useCart } from "../state/atom";

export const useRemoveItemCart = () => {
  const setRemoveCartItem = useSetRecoilState(useCart);
  return (id: number) => {
    setRemoveCartItem(item => [...item.filter(product => product.id !== id)])
  }
}