import React from 'react';
import s from './../Dialog.module.css';

const Messeg = (props)=>{
    return(
        <div className={s.dialog}>{props.mesege}</div>  
    )
}




export default Messeg;