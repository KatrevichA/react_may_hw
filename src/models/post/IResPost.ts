import {IPost} from "./IPost";

export interface IResPost {
    "posts": IPost[],
    "total": number,
    "skip": number,
    "limit": number
}