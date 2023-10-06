import { Box } from "../index";

type CardProps = {
  name: string;
  login: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number
  following: number
  avatar_url: string
}

export const Card = ({
  name,
  location,
  login,
  bio,
  public_repos,
  followers,
  avatar_url,
  following
}:CardProps): React.ReactElement => {
  return (
    <div className="max-w-[780px] w-3/5 h-auto m-auto p-5 shadow-lg shadow-blue-100">
      <div className="flex gap-7">
        <img src={avatar_url} alt="profile" className=" w-36 h-36 rounded-full" />
        <div className="flex flex-col gap-1 text-lg">
          <h2 className="font-semibold text-2xl">{name}</h2>
          <a
            className=" text-blue-400 underline"
            target="_blank"
            href={`https://github.com/${login}`}
          >
            @{login}
          </a>
          <p>{location}</p>
          <p>{bio}</p>
          <div className="flex items-center gap-5 mt-4">
            <Box title="Repositorios" label={public_repos} />
            <Box title="Seguidores" label={following} />
            <Box title="Seguidos" label={followers} />
          </div>
        </div>
      </div>
    </div>
  );
};
