import { FC } from "react";
import { useSelector } from "react-redux";
import { dataSelector } from "../../../../service";

export const SearchErrorResults: FC = () => {
    const data = useSelector(dataSelector)
    if(data.status === 'error')
    return (
        <li>{data.error}</li>
    )
}
