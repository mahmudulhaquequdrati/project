import { Link, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Signature from "../pages/Signature";
import Preview from "../pages/Preview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signature",
    element: <Signature />,
  },
  {
    path: "/signature/preview",
    element: <Preview />,
  },
  {
    path: "*",
    element: (
      <div className="flex flex-col h-screen justify-center items-center ">
        <h1 className="">Not found the page</h1>
        <Link to="/" className="mt-4 bg-gray-300 py-2 px-8 rounded-lg">
          Home
        </Link>
      </div>
    ),
  },
]);
