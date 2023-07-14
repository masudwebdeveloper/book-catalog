import { Link, useLocation } from "react-router-dom";
const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-700">404</h1>
      <p className="mt-4 text-2xl text-gray-600">Oops! Page not found</p>
      <p className="mt-2 text-gray-500">
        The requested URL <span className="font-mono">{location.pathname}</span>{" "}
        was not found.
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 text-lg text-white bg-blue-500 hover:bg-blue-600 rounded"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
