import axios from "axios";
import {IRecipe} from "../models/IRecipe";
import {IResponseDummyType} from "../models/IResponseDummyType";

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
    }
}