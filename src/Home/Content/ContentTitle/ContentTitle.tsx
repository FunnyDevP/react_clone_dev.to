import React, { FC } from "react";

interface IContentTitle {
  Title: string;
}

const ContentTitle: FC<IContentTitle> = (props) => {
  return (
    <p className="text-2xl pl-10 font-bold hover:uppercase">{props.Title}</p>
  );
};

export default ContentTitle;
