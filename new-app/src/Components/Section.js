import React, {useContext} from 'react';
import {ToDoContext} from '../Context/ToDoContext'
import AddToDo from './AddToDo';
import ToDoList from './ToDoList'

const Section = props => {
    const {sec :[sections, setSections], setVisibility: setVisibility} = useContext(ToDoContext); 

    const deleteSection = e => {
        e.preventDefault();
        //console.log("delete selected : " + props.id)
        setSections(o => [...o.filter(x => x.id !== props.id)])
    }

    const toggle = e =>{
        e.preventDefault();
        setVisibility(props.id);
    }

    return (
        <form>
            <div className="sectionContainer" style={{overflow:"hidden"}}>
                <div style={{float:"left"}}>
                    {props.name}
                </div>
                <div style={{float:"right"}}>
                    <button type="button" className = "btn deleteBtn" onClick={deleteSection.bind(this)}>Delete</button>  
                    <button type="button" className="btn viewBtn" onClick={toggle.bind(this)}>{props.visible ? "Hide" : "View"}</button>
                </div>
            </div>
            <div className={"todosContainer collapse" + (!props.visible ? ' ' : ' in')}>
                <AddToDo sectionId = {props.id}/>
                <ToDoList id={props.id} toDos = {props.toDos}/>
            </div>
        </form>
    )
}

export default Section;