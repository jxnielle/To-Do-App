import React from 'react';
import ToDoItem from './ToDoItem'
import Table from 'react-bootstrap/Table'

const ToDoList = props => {
    return (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th></th>
                        <th></th>
                    </tr>    
                </thead>
                <tbody>
                    {props.toDos.map(x => 
                        <ToDoItem task = {x.task} completed = {x.completed} taskId = {x.id} sectionId = {props.id} key = {props.id + x.id}/>
                    )}
                </tbody>
            </Table>     
        </div>
    );
}

export default ToDoList;