import { Error, Loading, UserCard } from "../components";
import { MessageNotUsers } from "../components/messageNotUsers/MessageNotUsers";
import { useFavoriteUsers } from "../services/getUserList";

export const FavoriteUsers = (): React.ReactElement => {
  const { data, isLoading, isError } = useFavoriteUsers();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="flex flex-col justify-center items-center">
      {data?.length === 0 && <MessageNotUsers />}
      {data!.length > 0 && (
        <div className="w-full">
          <h1 className="font-semibold text-4xl my-12 text-center">
            Usuarios Favoritos
          </h1>
          {data?.map((user) => (
            <div key={user.id} className="mb-24 w-full">
              <UserCard {...user} isFavorite />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
