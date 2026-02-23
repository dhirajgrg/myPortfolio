import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function NotFound() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center
                    px-5 text-center">
      <p className="font-mono text-9xl font-black text-primary-200 leading-none select-none">
        404
      </p>
      <h1 className="heading-display text-3xl sm:text-4xl text-base-900 mt-2">
        Page Not Found
      </h1>
      <p className="font-body text-sm text-base-600 mt-3 max-w-sm leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button size="lg">← Back to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
