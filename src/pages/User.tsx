import { useParams } from "react-router-dom";
import { UserCard, Error, Loading } from "../components";
import { useGetUser, useVerifyUser } from "../services/getUser";

type RouteParams = {
  user: string;
};

export const User = (): React.ReactElement => {
  const { user } = useParams<RouteParams>();
  const { data, isError, isLoading } = useGetUser(user);
  const { data: verifyData } = useVerifyUser(user);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <section className="mt-10 mb-24 md:mt-32">
      {data?.login && (
        <UserCard
          {...data}
          isVerify={verifyData ? verifyData.isFavorite : false}
        />
      )}
    </section>
  );
};
