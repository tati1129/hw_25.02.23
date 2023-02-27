import React from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.css';

export default function User({id,name, avatar}) {

  const dispatch = useDispatch();

  return (
    <div className={s.block_item}>
        <div className={s.user_item}>
          <button className={s.btn_del} onClick={()=> dispatch({type: 'DEL', payload: id})} >x</button>
          <img className={s.img} src={avatar} alt="user_photo" />
          <p>{name}</p>
          
        </div>
    </div>
  )
}
