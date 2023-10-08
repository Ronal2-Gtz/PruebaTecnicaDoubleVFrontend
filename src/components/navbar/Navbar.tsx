import { Link, NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const Routes = (): React.ReactElement => (
  <ul className=" flex gap-y-1 md:gap-y-0 flex-col md:flex-row md:absolute md:top-1/2 md:left-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2  md:mx-auto md:items-center md:w-auto md:space-x-6">
    <li>
      <NavLink
        className={({ isActive }) =>
          `${ 
            isActive ? "text-blue-600 font-bold" : "text-gray-400"
          }  hover:text-gray-500`
        }
        to="/statistics"
      >
        Estadisticas
      </NavLink>
    </li>
    <li className="text-gray-300 hidden md:block">
      <svg
        fill="none"
        stroke="currentColor"
        className="w-4 h-4 current-fill"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </li>
    <li>
      <NavLink
        className={({ isActive }) =>
          `${
            isActive ? "text-blue-600 font-bold" : "text-gray-400"
          }  hover:text-gray-500`
        }
        to="/favoriteUser"
      >
        Usuarios favoritos
      </NavLink>
    </li>
  </ul>
);

export const Navbar = () => {
  return (
      <nav className="relative px-4 py-4 flex justify-between items-start md:items-center bg-white">
        <Link className="text-5xl font-bold leading-none" to="/">
          <AiFillGithub />
        </Link>
        <div className="hidden md:block">
          <Routes />
        </div>
        <div>
          <div className=" md:hidden">
            <Routes />
          </div>
          <Link
            className="inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600  text-white font-bold rounded-xl transition duration-200 mt-2 "
            to="/"
          >
            Buscar usuario
          </Link>
        </div>
      </nav>
  );
};
