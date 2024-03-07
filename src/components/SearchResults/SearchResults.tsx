import { FC, useContext } from "react";
import { UserCard } from "../UserCard/UserCard";
import { SearchContext } from "./helpers";
import s from './SearchResults.module.css'
import { IUserInterface } from "../../types/user.interface.ts";
export const SearchResults: FC = () => {
  const { users } = useContext(SearchContext);
  return (
    <div className={s.users_list}>
      {users.map((user:IUserInterface) => (
          <li className={s.user__li} key={user.id}>
            <UserCard {...user} />
          </li>
      ))}
    </div>
  );
}
