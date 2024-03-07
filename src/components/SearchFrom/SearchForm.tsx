import { FC } from "react";
import s from './SearchForm.module.css'
export const SearchForm: FC = () => (
    <div className={s.search_form}>
      <form>
        <input autoFocus type="text" placeholder="Введите имя:" />
      </form>
    </div>
  );
