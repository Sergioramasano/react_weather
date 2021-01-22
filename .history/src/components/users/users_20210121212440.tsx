import React from 'react';
import classes from './users.module.scss'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'
export default const Users = () => {


    const users =async () => Promise<array>{
        const response = await axios.get(URL)
        .then(res=>{
            return res.data;
        })
    }

    const createUserItem=(users:array)=>{
        return users.map(user=><pre>{user}</pre>)
    }
    return(
        <ul>
            {createUserItem(users)}
        </ul>
    )
}
