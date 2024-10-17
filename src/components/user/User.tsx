import React, {FC} from 'react';
import {IUser} from "../../models/user/IUser";
import './User.css';

type IProps = {
    user:IUser,
    lift3:(id:number)=>void
}

const User:FC<IProps> = ({user, lift3}) => {
    return (
        <div className={'User_block'}>
            <h4>{user.username}</h4>
            <div><img src={user.image} alt={user.gender}/></div>
            <span>{user.university}</span>
            <br/>
            <button onClick={()=>{
                lift3(user.id);
            }}>Post of User</button>
        </div>
    );
};

export default User;