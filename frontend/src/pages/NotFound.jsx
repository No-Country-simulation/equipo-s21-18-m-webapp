import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <body className="flex h-screen flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
          <p className="mb-6 text-2xl font-medium text-gray-600">
            Page Not Found
          </p>
          <Link
            to="/"
            className="rounded-md bg-primary px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:bg-indigo-600"
          >
            Go Home
          </Link>
        </div>
      </body>
    </>
  );
}
