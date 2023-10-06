import { Error, Loading, UserCard } from "../components";
import { useFavoriteUsers } from "../services/getUserList";

export const FavoriteUsers = (): React.ReactElement => {
  const { data, isLoading, isError } = useFavoriteUsers();

  return (
    <div className="flex flex-col justify-center items-center">
      {isLoading && (
        <div className="mt-56">
          <Loading />
        </div>
      )}
      {isError && (
        <div className="mt-56">
          <Error />
        </div>
      )}
      {data && data.length > 0 && (
        <div className="w-full">
          <h1 className="font-semibold text-4xl my-12 text-center">
            Usuarios Favoritos
          </h1>
          {data?.map((user) => (
            <div  key={user.id}  className="mb-24 w-full">
              <UserCard {...user} isVerify />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
