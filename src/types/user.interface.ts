import {TUserIdType} from "./userId.type.ts";

export interface IUserInterface {
    id: TUserIdType,
    firstName: string,
    lastName: string,
    image: string,
    address: {
    city: string,
},
}

export const mockUsers: IUserInterface[] = [
    {
        id: 1,
        firstName: "Terry",
        lastName: "Medhurst",
        image: "https://robohash.org/Terry.png?set=set4",
        address: {
            city: "Washington",
        },
    },
    {
        id: 2,
        firstName: "Terry",
        lastName: "Medhurst",
        image: "https://robohash.org/Terry.png?set=set4",
        address: {
            city: "Washington",
        },
    },
    {
        id: 3,
        firstName: "Terry",
        lastName: "Medhurst",
        image: "https://robohash.org/Terry.png?set=set4",
        address: {
            city: "Washington",
        },
    },
];
