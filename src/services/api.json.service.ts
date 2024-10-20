import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

export const getUsers = async ():Promise<IUser[]> => {
        let axiosResponse = await axiosInstance.get<IUser[]>('/users');
        return axiosResponse.data
    };

export const getUserPosts = async (id:string):Promise<IPost[] | any> =>{
    let axiosResponse = await axiosInstance.get<IPost[]>('/users/' + id + '/posts');
    return axiosResponse
};

export const getPosts = async ():Promise<IPost[]>=>{
let axiosResponse = await axiosInstance.get<IPost[]>('/posts');
return axiosResponse.data
};

export const getComments = async ():Promise<IComment[]>=>{
    const {data} = await axiosInstance.get<IComment[]>('/comments');
    return data
}

