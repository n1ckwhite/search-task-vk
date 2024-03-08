import { FC } from "react";
import { UserCard } from "../../../UserCard";
import { useSelector } from "react-redux";
import { dataSelector } from "../../../../service";

export const SearchSuccessResults: FC = () => {
  const data = useSelector(dataSelector);
  const users = data.data.users;
  if (data.status === "success")
    return (
      <>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard {...user} />
          </li>
        ))}
      </>
    );
};
