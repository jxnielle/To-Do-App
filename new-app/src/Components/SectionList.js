import React, {useContext} from 'react';
import {ToDoContext} from '../Context/ToDoContext'
import Section from './Section'

function SectionList(){
    const {sec :[sections, setSections]} = useContext(ToDoContext);
    return (
        <div>
        {sections.map(x => 
            <Section 
                key={x.id} 
                name={x.name} 
                id={x.id} 
                toDos={x.toDos} 
                sections={x}
                visible ={x.visible}></Section>)}        
        </div>
    );
}

export default SectionList;
