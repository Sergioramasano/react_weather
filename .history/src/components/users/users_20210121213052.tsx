import React from 'react';
import classes from './users.module.scss'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'
export const Users = () => {


    const users =async () => {
        const response = await axios.get<Array<{}>>(URL)
        .then(res=>{
            return res.data;
        })
    }

    const createUserItem=(users:Array<{}>)=>{
        return users.map(user=><pre>{user}</pre>)
    }
    return(
        <ul>
            {createUserItem(users>)}
        </ul>
    )
}
