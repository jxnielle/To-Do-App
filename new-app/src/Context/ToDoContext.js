import React, {useState, createContext} from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = props => {
    const [sections, setSections] = useState ([
        {
            name: "Today's List",
            id: 1,
            visible: false,
            toDos: [{
                completed: false,
                task: "Pay phone bill",
                id: 11
            },
            {
                completed: false,
                task: "Buy gift for godson",
                id:12
            }] 
        },
        {
            name: "Tomorrow's List",
            id: 2,
            visible: false,
            toDos: [{
                completed: false,
                task: "Get car washed",
                id: 21
            }]
        }
    ]);

    const setVisibility = (id) => {
        setSections(
            sections.map(x => {
                if (x.id === id){
                    x.visible = !x.visible
                    console.log(x.id + " visible: " + x.visible )
                }
                return x;
            })
        )
    }

    const setCompletion = (sectionId, taskId) => {
        setSections(
            sections.map(x => {
                if(x.id === sectionId){
                    x.toDos.map( o => {
                        if(o.id === taskId){
                            o.completed = !o.completed;
                        }
                    })
                }
                return x;
            })
        )
    }

    return (
        <ToDoContext.Provider value={{sec :[sections, setSections], setVisibility: setVisibility, setCompletion: setCompletion}}>
            {props.children}
        </ToDoContext.Provider>
    );
}