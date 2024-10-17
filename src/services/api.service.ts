import axios from "axios";
import {IUser} from "../models/user/IUser";
import {IPost} from "../models/post/IPost";
import {IResUser} from "../models/user/IResUser";
import {IResPost} from "../models/post/IResPost";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});

export const getUsers = async (): Promise<IUser[]>=>{
    let axiosResponse = await axiosInstance.get<IResUser>('/users');

    return axiosResponse.data.users;
}

export const getPosts = async (id:number) => {
    let response = await axiosInstance.get<IResPost>('/posts/user/' + id);

    return response.data.posts;
}