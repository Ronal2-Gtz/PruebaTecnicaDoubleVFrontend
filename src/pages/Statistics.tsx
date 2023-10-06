import { Error, LinesChart, Loading } from "../components";
import { MessageNotUsers } from "../components/messageNotUsers/MessageNotUsers";
import { useFavoriteUsers } from "../services/getUserList";

export const Statistics = () => {
  const { data, isLoading, isError } = useFavoriteUsers();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="flex flex-col justify-center items-center">
      {data?.length === 0 && <MessageNotUsers />}
      {data && data.length > 0 && (
        <div className="w-10/12">
          <h1 className="font-semibold text-4xl my-12 text-center">
            Estadística de seguidores
          </h1>

          <LinesChart
            labels={data && data.map((user) => user.login)}
            data={data && data.map((user) => user.followers)}
          />
        </div>
      )}
    </div>
  );
};
