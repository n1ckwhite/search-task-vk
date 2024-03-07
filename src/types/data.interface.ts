import { IUser } from "./user.interface.ts";


export interface IData {
    limit: number;
    skip: number;
    total: number;
    users: IUser[]
}
