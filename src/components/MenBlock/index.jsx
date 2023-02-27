import React from 'react';
import { useSelector } from 'react-redux';
import User from '../User';
import s from './style.module.css';

export default function MenBlock({title, target}) {

  const users = useSelector(state => state)

  const usersMale = users.filter(({gender}) => gender === target)
  return (
    <div className={s.block_man}>
        <p className={s.title}>{title}</p>
        <div className={s.user}>
        {   usersMale.map(user => <User key={user.id} {...user} />)
        }
    </div>
    </div>
  )
  
}
