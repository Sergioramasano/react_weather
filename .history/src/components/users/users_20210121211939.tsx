import React from 'react';
import classes from './users.module.scss'
import axios from 'axios'

export default const Users = () => {


    const users =async () =>{

    }

    const createUserItem=(users: [])=>{
        return users.map(user=><pre>{user}</pre>)
    }
    return(
        <ul>
            {createUserItem(users)}
        </ul>
    )
}
