import axios from "axios";
import HttpClient from "../API";

jest.mock("axios");
describe("Http Client", () => {
    describe("GET_ALL", () => {
        it('should fetches successfully data from an API', async () => {
            const data = {
                data: [
                    {
                        userId: "68a580be-eacd-4551-bfb1-e45efbc44062",
                        fullName: "Hello World",
                        publicationDate: "2021-12-13T11:59:58.225179+07:00",
                        blogId: "b9a63f60-3d58-41b4-811b-10887b7ef000",
                        blogTitle: "test_title_03",
                        blogDetail: "test_detail_03",
                        blogTags: [
                            {
                                id: "b3ce1341-d10c-429f-954b-854f55aef90b",
                                name: "webdev"
                            },
                            {
                                id: "b3d9e7a8-3c31-4aed-9984-c65c14ef0795",
                                name: "javascript"
                            },
                            {
                                id: "d6b1de80-e44e-412e-957e-8a7e64d494f9",
                                name: "beginners"
                            }
                        ]
                    },
                ]
            }
            const mockedAxios = axios as jest.Mocked<typeof axios>
            mockedAxios.get.mockResolvedValue({
                data: data,
                status: 200
            })

            const response = await HttpClient.getAll()

            expect(axios.get).toHaveBeenCalledWith(
                "https://localhost:8000/api/posts"
            );
            expect(response.data).toEqual(data);
            expect(response.status).toEqual(200);
        });
    })
})