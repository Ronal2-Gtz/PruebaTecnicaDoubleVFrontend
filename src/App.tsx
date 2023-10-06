import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { SearchUser, UserList, Statistics, FavoriteUsers } from "./pages";

import "./App.css";
import { Navbar } from "./components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): React.ReactElement {
  return (
    <section>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/searchUser/:user" element={<SearchUser />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/favoriteUser" element={<FavoriteUsers />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </section>
  );
}

export default App;
