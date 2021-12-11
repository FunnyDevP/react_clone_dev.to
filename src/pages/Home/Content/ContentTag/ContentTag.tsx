import React, { FC } from "react";
import { Tag } from "../../../../services/models/HomeContent";

interface IContentTag {
  Tags: Array<Tag>;
}

const ContentTag: FC<IContentTag> = (props) => {
  return (
    <div className="flex flex-row pl-10">
      {props.Tags.map((tagPrefix) => (
        <p
          className="py-1 px-2 text-blog-tag opacity-60 text-xs"
          key={tagPrefix.ID}
        >
          #{tagPrefix.Name}
        </p>
      ))}
    </div>
  );
};

export default ContentTag;
