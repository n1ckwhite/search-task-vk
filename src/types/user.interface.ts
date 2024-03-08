import { TUserIdType } from "./userId.type.ts";

export interface IUser {
  id: TUserIdType;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  };
}
