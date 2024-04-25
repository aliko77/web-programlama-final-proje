import { useContext } from "react";
import { RouterCtx } from "../providers/RouterProvider";
import { RouterProviderProps } from "../types/RouterProviderTypes";

export const useRouter = (): RouterProviderProps =>
  useContext<RouterProviderProps>(RouterCtx);
