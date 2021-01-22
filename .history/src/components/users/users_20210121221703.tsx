import React, { useEffect, useState } from 'react';
import classes from './users.module.scss'
import axios from 'axios'
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';

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
   

    const createUserItem=(users:Array<{}>)=>{
        return users.map((user:any)=>{
        <div key={user.name}>{user.name}</div>
        <Card variant="outlined">
        <CardContent>
            
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
        })
    }
        return(
            <div>
                {createUserItem(users)} 
            </div>
        )
    }
    


   

export default Users
