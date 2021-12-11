export interface HomeContent {
  UserID: string;
  FullName: string;
  PublicationDate: string;
  BlogID: string;
  BlogTitle: string;
  BlogTags: Array<Tag>;
}

export interface Tag {
  ID: string;
  Name: string;
}
