import React from 'react'
import { useDispatch } from 'react-redux';
import s from './style.module.css';




export default function AddForm() {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const {name, avatar, gender} = event.target
  
    dispatch({type: 'ADD', payload: {
      id: Date.now(),
      name: name.value,
      avatar: avatar.value,
      gender: gender.value
    } })

    name.value = '';
    avatar.value = '';
    gender.value = '';
  }
 

  return (
    <div className={s.container}>
        <form onSubmit={onSubmit} className={s.form_block}>
            <input type="text" name='name'  placeholder='Input name' required/>
            <input type="text" name='avatar' placeholder='link to avatar' required/>
            <div className={s.gend}> gender 
                <select className={s.gend_select} name="gender" title='gender' required > 
                    <option value=""></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <button className={s.add_btn}>add</button>
        </form>
    </div>
  )
}
