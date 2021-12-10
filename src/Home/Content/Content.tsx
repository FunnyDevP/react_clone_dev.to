import React, { FC } from "react";

const Content: FC = () => {
  return (
    <div className="flex flex-col mt-16 items-center">
      <div className="grid gap-2  w-1/2 bg-white rounded shadow p-5">
        <div className="flex flex-row items-center mb-2">
          <div className="bg-gray-400 rounded-full w-8 h-8 absolute" />
          <div className="flex flex-col pl-10">
            <p className="text-sm">Funny Dev</p>
            <p className="text-xs opacity-75">10 DEC</p>
          </div>
        </div>
        <p className="text-2xl pl-10 font-bold">Blog Title</p>
        <div className="flex flex-row pl-10">
          <p className="py-1 px-2 text-blog-tag opacity-60">#tag1</p>
          <p className="py-1 px-2 text-blog-tag opacity-60">#tag2</p>
          <p className="py-1 px-2 text-blog-tag opacity-60">#tag3</p>
          <p className="py-1 px-2 text-blog-tag opacity-60">#tag4</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
