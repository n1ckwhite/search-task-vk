import { ChangeEvent, FC } from "react";
import s from './SearchForm.module.css'
import { getUsersThunk, useAppDispatch } from "../../service";
export const SearchForm: FC = () => {
    const dispatch = useAppDispatch()
    const searchNewUsers = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(getUsersThunk(e.target.value))
    }
    return (
        <div className={s.search_form}>
            <form action="#">
                <input autoFocus onChange={searchNewUsers} type="text" placeholder="Введите имя:" />
            </form>
        </div>
  )
}
