import { FC, useContext } from "react";
import s from './SearchResults.module.css'
import { UserCard } from "../UserCard";
import { SearchContext } from "./helpers";
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
