import React, {useEffect} from 'react';
import {login} from "../services/api.services";

const LoginPage = () => {
    useEffect(() => {
        login({username:'michaelw',
            password: 'michaelwpass',
            expiresInMins: 5})
            .then(value => console.log(value))
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default LoginPage;