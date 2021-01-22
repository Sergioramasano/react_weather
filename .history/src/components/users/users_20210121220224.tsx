import React, { useEffect, useState } from 'react';
import classes from './users.module.scss'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'


const Users = () => {
    const [users, setUsers] = useState(any[])([])

    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        axios.get(URL).then(res=>{
        const users = res.data
        setUsers(users)
    })
      }, []);
   


        return(
            <div>
                {/* {createUserItem(users>)} */}
                {users.map(user=>{
                    return (
                        <div key={user.name}>{user.name}</div>
                    )
})}
            </div>
        )
    }
    

    // const createUserItem=(users:Array<{}>)=>{
    //     return users.map(user=><pre>{user}</pre>)
    // }
   

export default Users
