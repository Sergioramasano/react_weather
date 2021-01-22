import React, { useEffect, useState } from 'react';
import classes from './users.module.scss'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'


const Users = () => {
    const [users, setUsers] = useState([])
    axios.get(URL)
        .then(res=>{
            const users:Array<{}> = res.data
            setUsers(users)
        })
    }
    

    // const createUserItem=(users:Array<{}>)=>{
    //     return users.map(user=><pre>{user}</pre>)
    // }
    return(
        <div>
            {/* {createUserItem(users>)} */}
            <pre>{users}</pre>
        </div>
    )
}

export default Users
