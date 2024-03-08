import { IData } from "../../types";
import { searchUsers } from "../../helpers";

interface IUsersService {
    getUsers: (name: string) => Promise<IData>;
}

export const usersService: IUsersService= {
     async getUsers(name) {
         const data = await searchUsers(name);
         return data as IData;
    }
}
