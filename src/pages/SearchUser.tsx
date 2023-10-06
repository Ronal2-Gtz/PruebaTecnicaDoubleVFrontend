import { useParams } from "react-router-dom";
import { UserCard, Error, Loading } from "../components";
import { useGetUser } from "../services/getUser";

type RouteParams = {
  user: string;
}

export const SearchUser = (): React.ReactElement => {
  const { user } = useParams<RouteParams>();
  const { data, isError, isLoading } = useGetUser(user);

  return (
    <section className="mt-32">
      <div className="flex flex-col justify-center items-center">
        {isLoading && <Loading />}
        {isError && <Error/>}
      </div>
      {data?.login && !isError && <UserCard {...data} />}
    </section>
  );
};
