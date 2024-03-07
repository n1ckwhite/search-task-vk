import { FC } from "react";
import { useSelector } from "react-redux";
import { dataSelector } from "../../../../service";

export const SearchNullUsersResults: FC = () => {
    const data = useSelector(dataSelector)
    const users = data.data.users
    if(data.status === 'success' && !users.length)
    return (
        <li>Пользователи не найдены!</li>
    )
}
