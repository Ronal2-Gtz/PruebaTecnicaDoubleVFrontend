import { Link } from "react-router-dom";

type UserBoxProps = {
  login: string;
  avatar_url: string;
};

export const UserBox = ({
  login,
  avatar_url,
}: UserBoxProps): React.ReactElement => {
  return (
    <div className="p-10 m-auto shadow-lg shadow-blue-100 text-center ">
        <img
          src={avatar_url}
          alt="profile"
          className="w-36 h-36 rounded-full"
        />
        <Link
          className=" text-blue-400 underline"
          to={`/searchUser/${login}`}
        >
          @{login}
        </Link>
    </div>
  );
};
