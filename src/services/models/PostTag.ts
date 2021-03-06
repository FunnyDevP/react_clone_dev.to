export interface PostTag {
    id: string,
    name: string
}

export interface PostTagOption {
    label: string,
    value: PostTag
}

export interface PostTagResponse {
    data: PostTag[]
}