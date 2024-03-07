import { FC, useContext } from "react";
import { SearchContext } from "./helpers";
import s from './SearchResults.module.css'
import { UserCard } from "../UserCard";
export const SearchResults: FC = () => {
  const {users} = useContext(SearchContext);
  return (
    <div className={s.users_list}>
      {users.map((user) => (
          <li className={s.user__li} key={user.id}>
            <UserCard {...user} />
          </li>
      ))}
    </div>
  );
}
