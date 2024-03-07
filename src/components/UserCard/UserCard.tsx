import { FC } from "react";
import s from './UserCard.module.css'
interface IUserCard {
    image: string;
    firstName: string;
    lastName: string;
    address: {
        city: string;
    };
}
export const UserCard: FC<IUserCard> = (props) => {
    const {
        image,
        firstName,
        lastName,
        address
    } = props
  return (
    <div className={s.user_card}>
      <img className={s.user_pic} src={image} />
      <div className={s.user_info}>
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
}
