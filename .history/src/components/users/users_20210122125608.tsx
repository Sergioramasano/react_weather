import React, { useEffect, useState } from 'react';
import axios from 'axios'
import classes from './users.module.scss'
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from '@material-ui/core';

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
   
      const cla = useStyles();
      const unitedCss = [cla, classes.Card]
    const createUserItem=(users:Array<{}>)=>{
        return users.map((user:any)=>{
            return(
                <Card className={unitedCss.join(' ')} key={user.name} variant="outlined">
                <CardContent>
                    <img className={classes.Photo} src="https://wisefexcapital.com/assets/images/user-default.png" alt="user"/>
                    <p>{user.name}</p>
                    <p>{user.userName}</p>
                    <p>{user.website}</p>
                    <p>{user.address.street}</p>
                
                </CardContent>
                <CardActions>
                <Link href="https://wisefexcapital.com/assets/images/user-default.png" onClick={preventDefault:any}>
                  Link
                </Link>
                </CardActions>
              </Card>
            )
       
        })
    }
        return(
            <div className={classes.Wrapper}>
                {createUserItem(users)} 
            </div>
        )
    }
    


   

export default Users
