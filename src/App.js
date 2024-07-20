import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Reservation from "./Pages/Reservation";
import DetaliiAnticelulitic from "./Pages/DetaliiAnticelulitic";
import DetaliiMiere from "./Pages/DetaliiMiere";
import DetaliiRelaxare from "./Pages/DetaliiRelaxare";
import DetaliiTerapeutic from "./Pages/DetaliiTerapeutic";
import Despre from "./Pages/Despre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/DetaliiAnticelulitic",
    element: <DetaliiAnticelulitic />,
  },
  {
    path: "/DetaliiMiere",
    element: <DetaliiMiere />,
  },
  {
    path: "/DetaliiRelaxare",
    element: <DetaliiRelaxare />,
  },
  {
    path: "/DetaliiTerapeutic",
    element: <DetaliiTerapeutic />,
  },
  {
    path: "/Despre",
    element: <Despre />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
