import { SearchForm } from "../SearchFrom";
import { SearchResults } from "../SearchResults";
import { Provider } from "react-redux";
import { store } from "../../service";
import '../../assets/styles/main.css'
export const App = () => {
  return (
          <Provider store={store}>
              <SearchForm />
              <SearchResults />
          </Provider>
  );
};
