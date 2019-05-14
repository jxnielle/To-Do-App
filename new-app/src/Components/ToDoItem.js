import React, {useContext} from 'react';
import {ToDoContext} from '../Context/ToDoContext'

const ToDoItem = props => {
    const {sec :[sections, setSections],setCompletion:setCompletion} = useContext(ToDoContext); 

    const isCompleted = e => {
        e.preventDefault();
        setCompletion(props.sectionId,props.taskId)
    }

    const deleteTask = e =>{
        e.preventDefault();
        setSections(
            sections.map(x => {
                if(x.id === props.sectionId){
                    x.toDos = [...x.toDos.filter(i => i.id !== props.taskId)]
                }
                return x;
            })
        ) 
    }

    return(
        <tr>
            <td><div className={(props.completed ? 'strikeText' : '')}>{props.task}</div></td>
            <td><button className="completeBtn" onClick = {isCompleted.bind(this)}><i className={(props.completed ? 'fa fa-toggle-on' : 'fa fa-toggle-off ')}></i></button></td>
            <td><button className="taskDelBtn" onClick = {deleteTask.bind(this)}><i className="fa fa-trash"></i></button></td>
        </tr>
    )
}

export default ToDoItem;