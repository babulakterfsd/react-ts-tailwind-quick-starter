import { Link } from '@tanstack/react-router';

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-red-700 text-3xl">Page Not Found !</h1>
      <p className="text-center text-sm lg:w-96 mt-2">
        This page is not found. Please go back to home page.
      </p>
      <Link
        to="/"
        className="py-2 px-3 bg-red-300 rounded-md text-white mt-4"
        aria-current="page"
      >
        Home
      </Link>
    </div>
  );
};

export default NotFound;
