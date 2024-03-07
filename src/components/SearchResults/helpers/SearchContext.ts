import {createContext, Dispatch} from "react";
import { IUserInterface } from "../../../types";
import { IAction } from "../../../types";

export const SearchContext = createContext({ users: [] as IUserInterface[] });

export const SearchDispatchContext = createContext<Dispatch<IAction>>(() => {});
