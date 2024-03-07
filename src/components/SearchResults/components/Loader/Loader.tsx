import { FC } from "react";
import s from './Loader.module.css'
import { useSelector } from "react-redux";
import { dataSelector } from "../../../../service";
export const Loader: FC = () => {
    const data = useSelector(dataSelector)
    if(data.status === 'pending')
        return (
            <div className={s.lds_dual_ring}></div>
        )
}
