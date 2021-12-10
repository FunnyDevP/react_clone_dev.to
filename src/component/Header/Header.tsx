import React, { FC } from "react";

const Header: FC = () => {
  return (
    <nav className="bg-white px-5 h-14 flex items-center shadow-md justify-between">
      <div className="w-14 h-10 bg-black flex items-center justify-center rounded">
        <h1 className="text-xl font-bold text-white">DEV</h1>
      </div>
      <button className="py-2 px-4 rounded bg-transparent border border-bt-primary text-bt-primary font-medium hover:text-white hover:bg-bt-secondary ">
        Create Post
      </button>
    </nav>
  );
};

export default Header;
