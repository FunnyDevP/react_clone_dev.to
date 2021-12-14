import {AxiosResponse} from "axios";
import {Data} from "../models/HomeContent";
import axios from "axios";

class HttpClient {
    public async getAll(): Promise<AxiosResponse<Data>> {
        return await axios.get<Data>("https://localhost:8000/api/posts")
    }
}

const client = new HttpClient();
export default client