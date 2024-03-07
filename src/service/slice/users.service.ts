import {IData} from "../../types";
import { searchUsers } from "../../helpers";

interface IUsersService {
    getUsers: (Body: string) => Promise<IData>;
}

export const usersService: IUsersService= {
     async getUsers(body) {
         const data = await searchUsers(body);
         return data as IData;
    }
}
