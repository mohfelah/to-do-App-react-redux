import React, { useState } from 'react'
import Task from './Task';


const ListTask = ({tasks}) => {
    const [filter,setFilter] = useState("All");
  return (
    <div>
        <div className='listbtn'>
            <button className='btnall Colall' onClick={()=>setFilter("All")}>All</button>
            <button className='btnall Colnot' onClick={()=>setFilter("notDone")}>NotDo</button>
            <button className='btnall Coldo' onClick={()=>setFilter("Done")}>Done</button>
        </div>
        <div>
            {(filter === "Done"
            ?tasks.filter(task=>task.isDone === true)
            : filter === "notDone"
            ?tasks.filter(task =>task.isDone === false)
            :tasks).map(task =>{
                return(
                    <Task key ={task.id} task = {task}/>               
                     )
            })}
        </div>
       
    </div>
  )
}

export default ListTask