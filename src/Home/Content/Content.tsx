import React, { FC } from "react";
import DummyData from "../../services/DummyHomeContentData";
import ContentTop from "./ContentTop/ContentTop";
import ContentTitle from "./ContentTitle/ContentTitle";
import ContentTag from "./ContentTag/ContentTag";

const Content: FC = () => {
  return (
    <div className="flex flex-col mt-16 items-center">
      <div className="grid gap-2.5  w-2/5 ">
        {DummyData.map((hc) => (
          <div className="bg-white rounded shadow p-5" key={hc.UserID}>
            <ContentTop
              FullName={hc.FullName}
              PublicationDate={hc.PublicationDate}
            />
            <ContentTitle Title={hc.BlogTitle} />
            <ContentTag Tags={hc.BlogTags} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
