import {PostTag, PostTagOption} from "../../../../../services/models/PostTag";
import {postTagFromAPIToOptions} from "../SelectTag";

describe('SelectTag', () => {
    it('should convert tag data from api into tag option', function () {
        const dataFromAPI: PostTag[] = [
            {id: "1", name: "tag a"},
            {id: "2", name: "tag b"}
        ]

        const expected: PostTagOption[] = [
            {label: "tag a", value: {id: "1", name: "tag a"}},
            {label: "tag b", value: {id: "2", name: "tag b"}}
        ]

        const result = postTagFromAPIToOptions(dataFromAPI)

        expect(result).toHaveLength(2)
        expect(result).toEqual(expected)
    });
});