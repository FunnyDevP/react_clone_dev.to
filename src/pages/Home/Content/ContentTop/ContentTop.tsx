import React, { FC } from "react";
import {toDateStr} from "../../../../utils/DateTimeConverter";

interface IContentTop {
  FullName: string;
  PublicationDate: string;
}
const ContentTop: FC<IContentTop> = (prop) => {
  return (
    <div className="flex flex-row items-center mb-2">
      {/*  User Profile*/}
      <div className="bg-gray-400 rounded-full w-8 h-8 absolute" />
      {/*  */}
      <div className="flex flex-col pl-10">
        <p className="text-sm">{prop.FullName}</p>
        <p className="text-xs opacity-75">{toDateStr(prop.PublicationDate)}</p>
      </div>
    </div>
  );
};

export default ContentTop;
