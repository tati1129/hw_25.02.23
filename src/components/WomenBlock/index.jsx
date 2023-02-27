import React from 'react';
import User from '../User';
import { useSelector } from 'react-redux';
import s from './style.module.css';

export default function WomenBlock({title,target}) {
  const users = useSelector(state => state)

  const usersFemale = users.filter(({gender}) => gender === target)
  return (
    
      <div className={s.block_woman}>
        <p className={s.title}>{title}</p>
        <div className={s.user}>
          {
          usersFemale.map(user => <User key={user.id} {...user} /* delUser={delUser} *//>)
  
          }
        </div>  
      </div>  
  )
}
