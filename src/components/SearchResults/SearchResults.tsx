import { FC } from "react";
import s from './SearchResults.module.css'
import { UserCard } from "../UserCard";
import { statusSelector, usersSelector} from "../../service";
import { useSelector } from "react-redux";
import { Loader } from "../Loader";
export const SearchResults: FC = () => {
  const users = useSelector(usersSelector)
  const status = useSelector(statusSelector)
  return (
    <div className={s.users_list}>
      { status === 'pending' && <Loader/> }
      { status === 'success' &&
          <>
            {users.map((user) => (
                <li className={s.user__li} key={user.id}>
                  <UserCard {...user} />
                </li>
        )
      )}
          </> }
    </div>
  );
}
