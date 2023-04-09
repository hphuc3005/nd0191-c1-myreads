import { Main } from "./pages/Main.jsx";
import { Route } from "react-router-dom";
import { Search } from "./pages/Search.jsx";

const routes = [
    {
        path: "/search",
        exact: false,
        main: (props) => <Search {...props} />,
    },
    {
        path: "",
        exact: true,
        main: (props) => <Main {...props} />,
    },
];

export const renderRoutes = (props) => {
    return routes && routes.map((route, index) => {
        return (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.main(props)}
                {...props}
            />
        );
    });
}

export default routes;