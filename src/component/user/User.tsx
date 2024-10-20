import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";
type IType ={
    user:IUser
}
const User:FC<IType> = ({user}) => {
    return (
        <div>
            {user.username} <Link to={user.id.toString()}>{user.company.name}</Link>
        </div>
    );
};

export default User;