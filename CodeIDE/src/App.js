import React from "react";
import { store } from "./redux";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Results from "./pages/results/Results";
import Login from "./components/auth/Login";
import NotFound from "./shared/NotFound";
import Unauthorized from "./shared/Unauthorized";
import Faculty from "./pages/Faculty/Home";

// Context
import { MenuContextProvider } from "./context/menuContext";

// Components
import PrivateRoute from "./components/PrivateRoute";
import MyPerformance from "./pages/home/MyPerformance";
import Test from "./pages/Test";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/test", element: <Test /> },
    { path: "/program-results", element: <Results /> },
    { path: "/login", element: <Login /> },
    { path: "/student/my-performance", element: <MyPerformance /> },
    {
      path: "/attendance-tracker",
      element: (
        <PrivateRoute
          element={Faculty}
          allowedRoles={["faculty", "admin"]}
          exceptions={[
            "murthy@nareshit.com",
            "satyanarayanakrv111@gmail.com",
            "rudrarajubarathsaivyaas@gmail.com",
            "gangadharpola9182@gmail.com",
            "asd@gmail.com",
          ]}
        />
      ),
    },
    { path: "*", element: <NotFound /> },
    { path: "/unauthorized", element: <Unauthorized /> },
  ]);

  const theme = createTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuContextProvider>
          <RouterProvider router={router} />
        </MenuContextProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
