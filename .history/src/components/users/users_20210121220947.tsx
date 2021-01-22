import React, { useEffect, useState } from 'react';
import classes from './users.module.scss'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'


const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        axios.get(URL).then(res=>{
        const users = res.data
        setUsers(users)
    })
      }, []);
   

    const createUserItem=(users:any)=>{
        console.log(users);
        
        return users.map((user:any)=><li key={user.name}>{user}</li>)
    }
        return(
            <ul>
                {createUserItem(users)} 
            </ul>
        )
    }
    


   

export default Users
