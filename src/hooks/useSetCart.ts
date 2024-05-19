import { useSetRecoilState } from "recoil";
import { useCart } from "../state/atom";
import { IProduct } from "../interfaces/IProduct";
import {v4 as uuidv4} from "uuid";

export const useSetCart = () => {
  const setCartList = useSetRecoilState<IProduct[]>(useCart);
  return (product: IProduct) => {
    setCartList((items) => [...items, {...product, buyId: uuidv4()}]);
  };
};
