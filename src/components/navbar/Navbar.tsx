import { Link, NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

export const Navbar = () => {
  return (
    <body className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <Link className="text-5xl font-bold leading-none" to="/">
          <AiFillGithub />
        </Link>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <NavLink className={({isActive}) => `${isActive ? 'text-blue-600 font-bold': 'text-gray-400'}  hover:text-gray-500`} to="/statistics">
              Estadisticas
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink className={({isActive}) => `${isActive ? 'text-blue-600 font-bold': 'text-gray-400'}  hover:text-gray-500`} to="/favoriteUser">
              Usuarios favoritos
            </NavLink>
          </li>
        </ul>
        <Link
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600  text-white font-bold rounded-xl transition duration-200"
          to="/"
        >
          Buscar usuario
        </Link>
      </nav>
    </body>
  );
};
