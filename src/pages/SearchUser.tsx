import { ReactElement } from "react";
import { Card } from "../components";

export const SearchUser = ():ReactElement => {
  return (
    <section className="mt-32">
      <div className="flex flex-col justify-center items-center mb-10 ">
        <h1 className="font-semibold text-4xl">Buscar Usuario de Github</h1>
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="max-w-[780px] h-14 w-3/5 border border-gray-400 rounded-md px-4 my-7"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buscar usuario
        </button>
      </div>
      <Card />
    </section>
  );
};
