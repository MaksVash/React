import React from 'react';
import { NavLink } from 'react-router-dom';
import MyPosts from '../Profile/MyPosts/MyPosts';
import s from './Dialog.module.css';

const DialogItems = (props) =>{
let path = "/dialogs/" + props.id;
    return(
        <div className={s.dialog}>
               <NavLink to={path}>{props.name} </NavLink>
            </div>
    )
}

const Messeg = (props)=>{
    return(
        <div className={s.dialog}>{props.mesege}</div>  
    )
}


const Dialogs = (props) => {
    let dialodsDate = [
        {id:1, name:"Maks"},
        {id:2, name:"Olena"},
        {id:3, name:"Sofiya"},
        {id:4, name:"Nastya"},
        {id:5, name:"Yanna"}
    ]
return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
       
        <DialogItems name="Maks" id="1" />
        <DialogItems name="Olena" id="2" />
        <DialogItems name="Sofiya" id="3" />
        <DialogItems name="Nastya" id="4" />
        <DialogItems name="Yanna" id="5" />
      </div>
            <div className={s.meseges}>
                <Messeg mesege="Hi" />
                <Messeg mesege="How are you" />
                <Messeg mesege="Hello" />
                
            </div>
        
    </div>
)
}

export default Dialogs;