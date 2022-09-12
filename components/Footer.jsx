import React from "react";

function Footer() {
  return (
    <footer className="grid w-full  bg-gray-200">
      <div className="px-8 py-3">
        <p>Canada</p>
      </div>
      <div className="grid grid-cols-1 w-screen py-3 px-10 border border-t-gray-400 md:flex">
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="link">Advertising</p>
          <p className="link">Business</p>
          <p className="link">How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
