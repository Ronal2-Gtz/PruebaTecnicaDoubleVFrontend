import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { SearchUser } from "./pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchUser />,
  },
  {
    path: "/userList",
    element: <SearchUser />,
  },
  {
    path: "/statistics",
    element: <SearchUser />,
  },
]);

function App(): React.ReactElement {
  return (
    <section className="mt-32">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
