import React from "react";

function Avatar({ className }) {
  return (
    <div className={`text-lg h-9 w-9 bg-gray-700 text-white flex items-center justify-center rounded-full cursor-pointer transition duration-200 transform hover:scale-110 ${className}`} >
      <p className="cursor-pointer">A</p>
    </div>
  );
}

export default Avatar;
