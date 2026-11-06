import React from "react";
import { FiLoader } from "react-icons/fi";

const Loader: React.FC = () => {
  return (
    <div className="flex min-h-[300px] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <FiLoader className="animate-spin text-4xl text-orange-500" />

        <p className="text-sm font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
