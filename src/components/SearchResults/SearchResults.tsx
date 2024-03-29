import { FC } from "react";
import s from "./SearchResults.module.css";
import { Loader } from "./components/Loader";
import { SearchErrorResults } from "./components/SearchErrorResults";
import { SearchNullUsersResults } from "./components/SearchNullUsersResults";
import { SearchSuccessResults } from "./components/SearchSuccessResults";
export const SearchResults: FC = () => {
  return (
    <ul className={s.users_list}>
      <SearchSuccessResults />
      <SearchNullUsersResults />
      <SearchErrorResults />
      <Loader />
    </ul>
  );
};
