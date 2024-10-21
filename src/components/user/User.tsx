import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
type IProps ={
    user:IUser
}
const User:FC<IProps> = ({user}) => {
    return (
        <div>
            <ul>
                <li>{user.firstName} - {user.lastName}</li>
            </ul>
        </div>
    );
};

export default User;