import {IAction, IUserInterface} from "../../../types";

export const tasksReducer = (users: IUserInterface[], action: IAction) => {
    switch (action.type) {
        case 'search': {
            return users.filter((user) => user.firstName === action.firstName);
        }
        default: {
            throw Error('Нет такого типа: ' + action.type);
        }
    }
}
