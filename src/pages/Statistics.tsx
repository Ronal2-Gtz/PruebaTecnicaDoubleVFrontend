import { Error, LinesChart, Loading } from "../components";
import { useFavoriteUsers } from "../services/getUserList";

export const Statistics = () => {
  const { data, isLoading, isError } = useFavoriteUsers();

  console.log(data);

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
        <div className="w-10/12">
          <h1 className="font-semibold text-4xl my-12 text-center">
            Esdisticas de seguidores
          </h1>

          <LinesChart
            labels={data && data.map((user) => user.login)}
            data={data && data.map((user) => user.following)}
          />
        </div>
      )}
    </div>
  );
};
