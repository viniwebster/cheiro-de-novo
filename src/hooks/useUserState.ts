import { useRecoilState } from "recoil"
import { userState } from "../state/atom"

export const useUserState = () => {
  return useRecoilState(userState)
}