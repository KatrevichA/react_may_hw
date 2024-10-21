import axios from "axios";
import {IRecipe} from "../models/IRecipe";
import {IResponseDummyType} from "../models/IResponseDummyType";
import {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{ "Content-Type": "application/json" }
});

export const apiDummy=  {
    recipes: {

        getAll: async (page:number):Promise<IResponseDummyType & {recipes:IRecipe[]}> => {
            const skip = (page - 1) * 30;
            const {data} = await axiosInstance.get<IResponseDummyType & {recipes:IRecipe[]}>('/recipes',
                {params:{skip:skip}}
                );
            return data
        }
    },
    users: {
        getAll: async (page:number):Promise<IResponseDummyType & {users: IUser[]}> => {
            const skip = (page - 1) * 30;

            const {data} = await axiosInstance.get<IResponseDummyType & {users: IUser[]}>('users',
                {params:{skip:skip}}
                );

            console.log(data);
            return data
        }
    }
}

////                   const lastID = value.recipes[29].id;
//                     // or
//                     const lastID = value.recipes[value.recipes.length - 1].id;
//                     if (lastID >= value.total){
//                         setFlag(true)
//                     } else {
//                         setFlag(false)
//                     }