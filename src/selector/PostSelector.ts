import {selector} from "recoil";
import {postTagState} from "../state/PostState";

export const PostSelector = selector({
    key: "PostSelector",
    get: ({get}) => {
        return get(postTagState)
    }
})