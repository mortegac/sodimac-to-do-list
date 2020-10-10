import React from 'react';

const TaskList = (props) =>{

    // props.listTask
    // props.addTask
    // props.removetask
    // props.owner

    const myTask = props.owner ? 
        props.listTask.filter( (item)=> item.user === props.owner )
        : props.listTask



    return(
        <ul>
            {
                myTask.map( (item, index)=>{

                    return(
                        <li key={index}>
                            <span>{item.task}</span>
                            <span style={{color:'green'}}> {item.user} </span>

                            <a  style={{color:'red'}} onClick={ ()=> props.removetask(index) } >
                            [x]
                            </a>
                        </li>
                    )

                })
            }
            


        </ul>
    )

}

export default TaskList;