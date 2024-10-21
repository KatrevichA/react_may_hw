import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {apiDummy} from "../../services/api.DummyJSON";
import Pagination from "../pagination/Pagination";
import {IUser} from "../../models/IUser";
import User from "../user/User";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [query, setQuery]=useSearchParams({page: '1'});
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        const page = query.get('page')
        if (page){
            apiDummy.users.getAll(+page).then(value => {
                    setUsers(value.users);
                // disable next button
                // const lastID = value.users[29].id;
                // or
                const lastID = value.users[value.users.length - 1].id;
                if (lastID >= value.total){
                    setFlag(true)
                } else {
                    setFlag(false)
                }
                }
            )
        }

    }, [query]);

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }

            <Pagination flag={flag}/>
        </div>
    );
};

export default Users;