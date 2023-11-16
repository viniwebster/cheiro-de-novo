import { useSetRecoilState } from "recoil";
import { userState } from "../state/atom"

export const useSetUserState = () => {
  const setUserState = useSetRecoilState<boolean>(userState);
  return (state: boolean) => {
    setUserState(() => state)
  };
};
