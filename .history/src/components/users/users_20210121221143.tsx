import React, { useEffect, useState } from 'react';
import classes from './users.module.scss'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'


const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        axios.get(URL).then(res=>{
        const users = res.data;
        setUsers(users)
    })
      }, []);
   

    const createUserItem=(users:any)=>{
        return users.map((user:any)=><div key={user.name}>{user.name}</div>)
    }
        return(
            <div>
                {createUserItem(users)} 
            </div>
        )
    }
    


   

export default Users
