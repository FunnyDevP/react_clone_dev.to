export interface HomeContent {
  userId: string;
  fullName: string;
  publicationDate: string;
  blogId: string;
  blogTitle: string;
  blogTags: Array<Tag>;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Data {
  data: Array<HomeContent>
}