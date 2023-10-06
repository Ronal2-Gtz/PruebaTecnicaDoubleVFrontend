import { useForm, SubmitHandler } from "react-hook-form";
import { Error, Loading } from "../components";
import { type UserResponse } from "../services/getUser";
import { useState } from "react";
import { useUserList } from "../services/getUserList";
import { UserBox } from "../components/userBox/UserBox";

type Inputs = {
  userName: string;
};


export const UserList = (): React.ReactElement => {
  const [githubUsers, setGithubUsers] = useState<Array<UserResponse>>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const userName = watch("userName");
  const { refetch, isError, isLoading } = useUserList(userName);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    setGithubUsers([]);
    const { data } = await refetch();
    if (!data) return;
    setGithubUsers(data.items.slice(0, 10));
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
        {isError && <Error />}
      </div>
      <div className="max-w-[780px] m-auto gap-y-10 flex flex-wrap justify-center items-center ">
        {githubUsers.length > 0 &&
          !isError &&
          githubUsers.map((user) => <UserBox key={user.bio} {...user} />)}
      </div>
    </section>
  );
};
