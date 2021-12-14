import {atom, selector} from "recoil";
import {HomeContent} from "../services/models/HomeContent";

export const postState = atom<Array<HomeContent>>({
    key: "home_content",
    default: [],
})