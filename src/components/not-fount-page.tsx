import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[71vh] bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
      <p className="text-lg mt-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-900"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
