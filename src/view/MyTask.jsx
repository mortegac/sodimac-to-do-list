import React from 'react';
import MyContext from '../context';
import HeaderSection from '../components/HeaderSection'
import TaskList from '../components/TaskList';
const MyTask = () =>{

    return(
        <MyContext.Consumer>
        {
            (context)=>{
                console.log(context);

                return(
                    <>
                        <HeaderSection 
                            title='Mis Tareas'
                            description='Estas son mis tareas'
                        />
                        <TaskList 
                            listTask={context.todos}
                            addTask={context.addTask}
                            removetask={context.removeTask}
                            owner='manu'
                        />
                    </>
                )
            }

        }        
        </MyContext.Consumer>

    )

}


export default MyTask
