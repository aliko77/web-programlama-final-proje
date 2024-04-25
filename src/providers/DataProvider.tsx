import React, { createContext } from "react";
import { DataContextProps } from "../types/DataProviderTypes";
import { useRouter } from "../hooks/useRouter";

export const DataCtx = createContext<DataContextProps>({} as DataContextProps);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setRouter } = useRouter();

  const changePage = (router: string) => {
    setRouter(router);
  };

  const value = {
    changePage,
  };

  return <DataCtx.Provider value={value}>{children}</DataCtx.Provider>;
};
