import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`w-full px-3 py-4 text-sm text-gray-700 outline-none placeholder:text-gray-400 ${className}`}
    />
  );
};

export default Input;
