import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/user/IUser";
import {getUsers} from "../../services/api.service";
import {IResUser} from "../../models/user/IResUser";
import User from "../user/User";
import './Users.css';

type IProps = {
    lift2: (id:number)=>void
}

const Users:FC<IProps> = ({lift2}) => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers()
            .then((users)=>
                // console.log(users)
                setUsers(users)
            );
    }, []);

    return (
        <div className={'Users_page'}>
            {
                users.map((value:IUser) => <User lift3={lift2} key={value.id} user={value}></User>)
            }
        </div>
    );
};

export default Users;