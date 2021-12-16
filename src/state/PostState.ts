import {atom, selector} from "recoil";
import {HomeContent} from "../services/models/HomeContent";
import {PostTag} from "../services/models/PostTag";

export const postState = atom<Array<HomeContent>>({
    key: "home_content",
    default: [],
})

export const postTagState = atom<PostTag[]>({
    key: "postTagState",
    default: []
})