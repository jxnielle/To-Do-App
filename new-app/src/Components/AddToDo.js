import React, {useState, useContext} from 'react';
import {ToDoContext} from '../Context/ToDoContext'

const AddToDo = props => {
    const [task, setTask] = useState('');
    const {sec :[sections, setSections]} = useContext(ToDoContext);

    const updateTask = e => {
        setTask(e.target.value)
    }

    const addTask = e => {
        e.preventDefault();
        if (task !== ""){
            setSections(
                sections.map(x => {
                    if (x.id === props.sectionId){
                        var newId = props.sectionId +""+ (x.toDos.length + 1)
                        x.toDos.push({completed: false, task: task, id: newId})
                    }
                    return x;
                })
            )
        }
        setTask("");
    }

    return(
        <div>
            <input
            placeholder = "New Task.."
            type = "text"
            value={task} onChange={updateTask}
            style= {{flex: '10', padding: '5px', width:"80%"}}
            />  
            <button 
                type="submit"
                onClick= {addTask}
                className = "btn addBtn"> 
                Add 
            </button>                 
        </div>
    )
}

export default AddToDo;