export const Error = (): React.ReactElement => {
  return (
    <main className=" h-4/5 w-full flex flex-col justify-center items-center ">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-[#58585888] tracking-widest">
          404
        </h1>
        <div className="bg-blue-500 text-white px-2 text-sm rounded rotate-12 absolute top-20 left-[50px]">
          usuario no encontrado
        </div>
      </div>
      <p className="text-2xl text-[#58585888] font-semibold md:text-3xl">
        Oops.. parece que tenemos un error
      </p>
    </main>
  );
};
