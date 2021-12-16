import {AxiosResponse} from "axios";
import {HomeContextResponse} from "../models/HomeContent";
import axios from "axios";

class HttpClient {
    public async getAll<T>(endpoint: string): Promise<AxiosResponse<T>> {
        return await axios.get<T>("https://localhost:8000/api"+endpoint)
    }
}

export const httpClient = new HttpClient();