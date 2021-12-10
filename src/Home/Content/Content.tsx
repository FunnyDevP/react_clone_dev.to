import React, { FC } from "react";
import DummyData from "../../services/DummyHomeContentData";

const Content: FC = () => {
  return (
    <div className="flex flex-col mt-16 items-center">
      <div className="grid gap-2.5  w-1/2 ">
        {DummyData.map((hc) => (
          <div className="bg-white rounded shadow p-5" key={hc.UserID}>
            <div className="flex flex-row items-center mb-2">
              {/*  User Profile*/}
              <div className="bg-gray-400 rounded-full w-8 h-8 absolute" />
              {/*  */}
              <div className="flex flex-col pl-10">
                <p className="text-sm">{hc.FullName}</p>
                <p className="text-xs opacity-75">{hc.PublicationDate}</p>
              </div>
            </div>
            <p className="text-2xl pl-10 font-bold">{hc.BlogTitle}</p>
            <div className="flex flex-row pl-10">
              {hc.BlogTags.map((tagPrefix) => (
                <p
                  className="py-1 px-2 text-blog-tag opacity-60 text-xs"
                  key={tagPrefix.ID}
                >
                  #{tagPrefix.Name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
