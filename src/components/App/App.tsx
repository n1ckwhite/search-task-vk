import { useState } from "react";
import { SearchForm } from "../SearchFrom/SearchForm.tsx";
import { SearchContext } from "../SearchResults/helpers/SearchContext.ts";
import { SearchResults } from "../SearchResults/SearchResults.tsx";
import { mockUsers } from "../../mockUsers.ts";
import '../../assets/styles/main.css'
export default function App() {
  const [users] = useState(mockUsers);

    return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
