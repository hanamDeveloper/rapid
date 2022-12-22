import { QueryClient, QueryClientProvider } from "react-query";
import { useRoutes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Main from "pages/Main";
import { getCookie } from "./utils/cookie";

function App() {
  const isHasToken = getCookie("AccessToken")?.length ? true : false;
  const emptyToken = useRoutes([{ path: "/", element: <Login /> }]);
  const hasToken = useRoutes([{ path: "/", element: <Main /> }]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {isHasToken ? hasToken : emptyToken}
    </QueryClientProvider>
  );
}

export default App;
