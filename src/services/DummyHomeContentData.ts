import { HomeContent } from "./models/HomeContent";

const dummy: Array<HomeContent> = [
  {
    UserID: "1",
    FullName: "Funny Dev",
    PublicationDate: "10 DEC",
    BlogID: "b_1",
    BlogTitle: "Clone website",
    BlogTags: [
      { ID: "t1", Name: "beginners" },
      { ID: "t2", Name: "react" },
      { ID: "t3", Name: "webdevelopment" },
    ],
  },
  {
    UserID: "2",
    FullName: "Bob Lee Swagger",
    PublicationDate: "11 DEC",
    BlogID: "b_2",
    BlogTitle: "React with Typescript 101",
    BlogTags: [
      { ID: "t4", Name: "beginners" },
      { ID: "t5", Name: "react" },
      { ID: "t6", Name: "webdev" },
    ],
  },
  {
    UserID: "3",
    FullName: "PJ",
    BlogID: "b_3",
    PublicationDate: "11 DEC",
    BlogTitle: "Build Simple RESTful service with GOLANG",
    BlogTags: [
      { ID: "t7", Name: "golang" },
      { ID: "t8", Name: "programming" },
      { ID: "t9", Name: "echo" },
      { ID: "t10", Name: "webdev" },
    ],
  },
];

export default dummy;
