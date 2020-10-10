import React from 'react';

import HeaderSection from '../components/HeaderSection'
import TaskList from '../components/TaskList'

import MyContext from '../context';

const Tasks = () =>{

    return(
        <MyContext.Consumer>
        {
            (context)=>{
                console.log(context);

                return(
                    <>
                        <HeaderSection 
                            title='Tareas usuarios'
                            description='Todas las tareas de los usuarios'
                        />
                        <TaskList 
                            listTask={context.todos}
                            addTask={context.addTask}
                            removetask={context.removeTask}
                        />
                    </>
                )
            }

        }        
        </MyContext.Consumer>


    )

}


export default Tasks
