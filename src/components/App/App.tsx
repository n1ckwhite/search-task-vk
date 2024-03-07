import {useReducer} from "react";
import '../../assets/styles/main.css'
import { mockUsers } from "../../mockUsers.ts";
import {SearchContext, SearchDispatchContext} from "../SearchResults/helpers";
import { SearchForm } from "../SearchFrom";
import { SearchResults } from "../SearchResults";
import {tasksReducer} from "../SearchResults/helpers/";
export const App = () => {
  const [users, dispatch] = useReducer(
      tasksReducer,
      mockUsers
  );


    return (
    <SearchContext.Provider value={{ users }}>
      <SearchDispatchContext.Provider value={dispatch}>
      <SearchForm />
      </SearchDispatchContext.Provider>
      <SearchResults />
    </SearchContext.Provider>
  );
}
