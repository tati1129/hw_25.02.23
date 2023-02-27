import React from 'react';
import AddForm from '../AddForm';
import MenBlock from '../MenBlock';
import WomenBlock from '../WomenBlock'
import s from './style.module.css';

export default function Container() {
  return (
    <div className={s.contain}>
        <AddForm />
        <MenBlock  target={'male'} title={'Mens'}/>
        <WomenBlock  target={'female'} title={'Women'}/>
    </div>
  )
}
