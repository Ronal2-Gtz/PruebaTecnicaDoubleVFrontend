import { useForm, SubmitHandler } from "react-hook-form";
import { Card, Error, Loading } from "../components";
import { type UserResponse, useGetUser } from "../services/getUser";
import { useState } from "react";

type Inputs = {
  userName: string;
};

const initialState = {
  name: "",
  location: "",
  login: "",
  bio: "",
  public_repos: 0,
  followers: 0,
  avatar_url: "",
  following: 0,
};

export const SearchUser = (): React.ReactElement => {
  const [githubUser, setGithubUser] = useState<UserResponse>(initialState);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const userName = watch("userName");
  const { refetch, isError, isLoading } = useGetUser(userName);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    setGithubUser(initialState);
    const { data } = await refetch();
    if (!data) return;
    setGithubUser({
      name: data.name,
      location: data.location,
      login: data.login,
      bio: data.bio,
      public_repos: data.public_repos,
      followers: data.followers,
      avatar_url: data?.avatar_url,
      following: data.following,
    });
  };

  return (
    <section className="mt-32">
      <form
        className="flex flex-col justify-center items-center mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="font-semibold text-4xl">Buscar Usuario de Github</h1>
        <input
          type="text"
          {...register("userName", { required: true, minLength: 4 })}
          placeholder="Nombre de usuario"
          className="max-w-[780px] h-14 w-3/5 border border-gray-400 rounded-md px-4 mt-7"
        />
        {errors.userName?.type === "required" && (
          <p className="text-red-600">El usuario es requerido</p>
        )}
        {errors.userName?.type === "minLength" && (
          <p className="text-red-600">Ingresa al menos 4 caracteres.</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-7"
        >
          Buscar usuario
        </button>
      </form>
      <div className="flex flex-col justify-center items-center">
        {isLoading && <Loading />}
        {isError && <Error/>}
      </div>
      {githubUser.login && !isError && <Card {...githubUser} />}
    </section>
  );
};
