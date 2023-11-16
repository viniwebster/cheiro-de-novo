import { useSetRecoilState } from "recoil";
import { useCart } from "../state/atom";
import { IProduct } from "../interfaces/IProduct";

export const useSetCart = () => {
  const setCartList = useSetRecoilState<IProduct[]>(useCart);
  return (product: IProduct) => {
    setCartList((items) => [...items, product]);
  };
};
