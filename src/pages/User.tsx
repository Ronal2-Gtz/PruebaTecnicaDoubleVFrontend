import { useParams } from "react-router-dom";
import { UserCard, Error, Loading } from "../components";
import { useGetUser, useVerifyUser } from "../services/getUser";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSaveUser } from "../services/saveUser";

type RouteParams = {
  user: string;
};

export const User = (): React.ReactElement => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const { user } = useParams<RouteParams>();
  const { data, isError, isLoading } = useGetUser(user);
  const { data: favoriteData, isLoading: isLoadingVerifyUser } =
    useVerifyUser(user);
  const { mutateAsync, isLoading: isLoadingSaveUser } = useSaveUser();

  const handleRegisterFavorite = (): void => {
    if (!isFavorite && data) {
      mutateAsync(data, {
        onSuccess: () => {
          setIsFavorite(true);
          toast("Usuario guardado en favoritos!", {
            icon: "❤️",
          });
        },
        onError: () => {
          toast.error("Oops ocurrio un error inesperado.");
        },
      });
    }
  };

  useEffect(() => {
    favoriteData
      ? setIsFavorite(favoriteData.isFavorite)
      : setIsFavorite(false);
  }, [favoriteData]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section className="mt-10 mb-24 md:mt-32">
      {data?.login && (
        <UserCard
          {...data}
          isFavorite={isFavorite}
          handleRegisterFavorite={handleRegisterFavorite}
          isLoading={isLoadingVerifyUser || isLoadingSaveUser}
        />
      )}
    </section>
  );
};
