import React, { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="bg-white px-5 h-14 flex items-center shadow-md">
      <div className="w-14 h-10 bg-black flex items-center justify-center rounded">
        <h1 className="text-xl font-bold text-white">DEV</h1>
      </div>
    </nav>
  );
};

export default Header;
