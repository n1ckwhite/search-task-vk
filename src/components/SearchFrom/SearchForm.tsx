import {ChangeEvent, FC, useContext} from "react";
import s from './SearchForm.module.css'
import { SearchDispatchContext } from "../SearchResults/helpers";
export const SearchForm: FC = () => {
    const dispatch = useContext(SearchDispatchContext)

        const search = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: 'search',
                firstName: e.target.value
            })
        }
        return (
    <div className={s.search_form}>
      <form action="#">
        <input autoFocus type="text" onChange={search} placeholder="Введите имя:" />
      </form>
    </div>
  )
}
