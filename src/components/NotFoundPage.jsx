import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white">
      <h1 className="text-9xl font-bold mb-6">404</h1>
      <p className="text-5xl mb-6">Page Not Found</p>
      <Link
        to="/"
        className="text-lg chat-bubble-success text-green-900 p-2 rounded-2xl hover:underline transition-colors duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
