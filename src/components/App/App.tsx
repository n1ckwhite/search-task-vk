import { SearchForm } from "../SearchFrom";
import { SearchResults } from "../SearchResults";
import { Provider } from "react-redux";
import { store } from "../../service";
export const App = () => {
  return (
          <Provider store={store}>
              <SearchForm />
              <SearchResults />
          </Provider>
  );
};
