import { FC, useEffect } from "react";
import s from './SearchResults.module.css'
import { getUsersThunk, useAppDispatch } from "../../service";
import { Loader } from "./components/Loader";
import { SearchErrorResults } from "./components/SearchErrorResults";
import { SearchNullUsersResults } from "./components/SearchNullUsersResults";
import { SearchSuccessResults } from "./components/SearchSuccessResults";
export const SearchResults: FC = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch]);
  return (
    <ul className={s.users_list}>
      <SearchSuccessResults/>
      <SearchNullUsersResults/>
      <SearchErrorResults/>
      <Loader/>
    </ul>
  );
}
