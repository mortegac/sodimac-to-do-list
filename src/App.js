import React from 'react';

import './App.css';


const App =()=> {
  
  // Add Task
  const handleFormSubmit = async (e) =>  {
      console.log('--e--', e);
  };

  // Remove Task
  const deleteTask = (taskId) => 
  {
    console.log('--taskId--', taskId);
   
  }

  return (
    <>
      <div className="container">
        <h1>To Do List</h1>
        <section className="task-list">
          <form onSubmit={ (e)=> handleFormSubmit(e) }>
            <input
              autoFocus={true}
              className="new-todo"
              placeholder="Que tienes que hacer?"
              onChange={(e) => console.log(e.target.value) }
            />
          </form>
          <section className="main">
                <ul className="todo-list">
                {
                  (<span>No hay tareas</span>)
                }

                  <li key={i}>
                    <span className='with90'>{item.task}</span>  
                    <a className='with10' onClick={ ()=> deleteTask(i)}>X</a>
                  </li>
                </ul>
          </section>
          <footer className="footer">
                0 items
          </footer>

        </section>
      </div>
    </>
  );
}

export default App;
