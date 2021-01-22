import React from 'react';
import classes from './users.module.scss'

export default const Users = () => {


    createUserItem=(users:array)=>{
        return users.map(user=><pre>{user}</pre>)
    }
    return(
        <ul>
            {createUserItem(users)}
        </ul>
    )
}
