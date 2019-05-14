import React, {useState, useContext} from 'react';
import {ToDoContext} from '../Context/ToDoContext'

function AddSection() {
    const [name, setName] = useState('');
    const {sec :[sections, setSections]} = useContext(ToDoContext);

    const updateName = e => {
        setName(e.target.value)
    }

    const addSection = e => {
        e.preventDefault();
        if (name !== ""){
            setSections(x => [...x, {name: name, visible:false, toDos:[], id: sections.length + 1 }])
        }
        setName("");
    }

    return (
        <form onSubmit={addSection}>
            <div style={{textAlign:"center", marginTop:"20px"}}> 
                <input
                placeholder = "New Section.."
                type = "text"
                value={name} onChange={updateName}
                style= {{flex: '10', padding: '5px', width:"50%"}}
                />
                <input 
                type="submit" 
                value="Add Section"
                style = {{flex: '1'}}
                className = "btn"/>
            </div>
        </form>
    );
  }
  
  export default AddSection;