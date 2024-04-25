import { useContext } from "react";
import { DataCtx } from "../providers/DataProvider";

export const useData = () => useContext(DataCtx);
