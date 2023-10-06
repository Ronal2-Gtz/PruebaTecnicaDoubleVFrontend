import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
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

const queryClient = new QueryClient();

function App(): React.ReactElement {
  return (
    <section className="mt-32">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </section>
  );
}

export default App;
