import {IUser} from "./IUser";

export interface IResUser {
    "users": IUser [],
    "total": number,
    "skip": number,
    "limit": number
}