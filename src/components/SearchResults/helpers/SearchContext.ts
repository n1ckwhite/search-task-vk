import { createContext } from "react";
import { IUserInterface } from "../../../types/user.interface.ts";

export const SearchContext = createContext({ users: [] as IUserInterface[] });
