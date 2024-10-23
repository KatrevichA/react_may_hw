import axios from "axios";
import {IForm} from "../models/IForm";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
});

export const apiService = {
    post: {
        savePost: async (data: IForm):Promise<IPost> => {
            const response = await axiosInstance.post<IPost>('posts', data);
            return response.data
        }
    }
}