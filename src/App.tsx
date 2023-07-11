import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShauryaHome from "./shaurya/pages/ShauryaHome/ShauryaHome";
import RidhamHome from "./ridham/pages/RidhamHome/RidhamHome";
import VaradHome from "./varad/pages/VaradHome/VaradHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/shaurya",
    element: <ShauryaHome />,
  },
  {
    path: "/varad",
    element: <VaradHome />,
  },
  {
    path: "/ridham",
    element: <RidhamHome />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href={`/shaurya`}>Shaurya</a>
            </li>
            <li>
              <a href={`/varad`}>Varad</a>
            </li>
            <li>
              <a href={`/ridham`}>Ridham</a>
            </li>
          </ul>
        </nav>
      </header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
