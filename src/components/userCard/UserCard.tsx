import { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import { Box } from "../index";
import { useSaveUser } from "../../services/saveUser";
import toast from "react-hot-toast";

type CardProps = {
  name: string;
  login: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  isVerify: boolean;
};

export const UserCard = (props: CardProps): React.ReactElement => {
  const { mutateAsync } = useSaveUser();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const {
    name,
    location,
    login,
    bio,
    public_repos,
    followers,
    avatar_url,
    following,
    isVerify,
  } = props;

  const handleRegister = (): void => {
    if (!isFavorite) {
      const promise = mutateAsync(props, {
        onSuccess: () => setIsFavorite(true),
      });
      toast.promise(promise, {
        loading: "Guardando...",
        success: <b>Usuario guardado en favoritos! ❤️ </b>,
        error: <b>Oops ocurrio un error inesperado.</b>,
      });
    }
  };

  useEffect(() => {
    setIsFavorite(isVerify);
  }, [isVerify]);

  return (
    <div className="max-w-[780px] w-3/5 h-auto m-auto p-5 shadow-lg shadow-blue-100 relative">
      <button
        onClick={handleRegister}
        className="text-red-600 md:absolute right-5 top-6 text-xl"
      >
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </button>
      <div className="text-center md:text-start md:flex gap-7">
        <img
          src={avatar_url}
          alt="profile"
          className="m-auto md:m-0 w-36 h-36 rounded-full"
        />
        <div className="flex flex-col gap-1 text-lg">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <a
            className=" text-blue-400 underline"
            target="_blank"
            href={`https://github.com/${login}`}
          >
            @{login}
          </a>
          <p>{location}</p>
          <p>{bio}</p>
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-5 mt-4">
            <Box title="Repositorios" label={public_repos} />
            <Box title="Seguidores" label={followers} />
            <Box title="Seguidos" label={following} />
          </div>
        </div>
      </div>
    </div>
  );
};
