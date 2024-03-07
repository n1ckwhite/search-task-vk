import { useState } from "react";
import '../../assets/styles/main.css'
import { mockUsers } from "../../mockUsers.ts";
import { SearchContext } from "../SearchResults/helpers";
import { SearchForm } from "../SearchFrom";
import { SearchResults } from "../SearchResults";
export const App = () => {
  const [users] = useState(mockUsers);

    return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
