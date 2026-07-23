import React from "react";

const Input = ({ icon: Icon, type = "text", ...props }) => {
  return (
    <div className="relative ">
      {type === "checkbox" ? (
        <div className="flex items-center justify-center h-auto">
          <input
            type="checkbox"
            {...props}
            className="form-checkbox text-green-500"
          />
          {props.label && (
            <span className="ml-2 text-gray-400">{props.label}</span>
          )}
        </div>
      ) : (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon className="size-5 text-green-500" />
          </div>
          <input
            type={type}
            {...props}
            className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200"
          />
        </>
      )}
    </div>
  );
};

export default Input;
