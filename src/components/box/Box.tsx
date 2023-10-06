type BoxProps = {
  title: string;
  label: number;
};

export const Box = ({
  title,
  label,
}: BoxProps): React.ReactElement => {
  return (
    <div className=" text-center px-9 py-2 bg-blue-50 rounded-sm">
      <p>{title}</p>
      <p className="font-bold text-xl text-blue-800">{label}</p>
    </div>
  );
};
