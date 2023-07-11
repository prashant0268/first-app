import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ShauryaHome from "./shaurya/pages/ShauryaHome/ShauryaHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/shaurya",
    element: <ShauryaHome />,
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
