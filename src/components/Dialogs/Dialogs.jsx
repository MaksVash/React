import React from 'react';
import { NavLink } from 'react-router-dom';
import MyPosts from '../Profile/MyPosts/MyPosts';
import s from './Dialog.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messeg from './Messeg/Messeg';



const Dialogs = (props) => {


let dialogsElements =  props.dialogs .map(d => <DialogItems name  = {d.name} id={d.id} />);
let mesegesElement = props.meseges.map (mesege => <Messeg mesege = {mesege.mesege}/>)


return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
     
      </div>
            <div className={s.meseges}>
                {mesegesElement} 
            </div>
        
    </div>
)
}

export default Dialogs;