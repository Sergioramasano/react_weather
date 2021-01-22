import React, { useEffect, useState } from 'react';
import classes from './users.module.scss'
import axios from 'axios'
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';

const URL = 'https://jsonplaceholder.typicode.com/users'
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // Обновляем заголовок документа с помощью API браузера
        axios.get(URL).then(res=>{
        const users = res.data;
        setUsers(users)
    })
      }, []);
   
      const classes = useStyles();
    const createUserItem=(users:Array<{}>)=>{
        return users.map((user:any)=>{
            return(
                <Card key={user.name} variant="outlined">
                <CardContent>
                {user.name}
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            )
       
        })
    }
        return(
            <div>
                {createUserItem(users)} 
            </div>
        )
    }
    


   

export default Users
