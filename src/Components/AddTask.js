import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../actions/taskActions';

const AddTask = () => {
    const [task,setTask] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = () =>{
        if(task){
            dispatch(addTask(task));
            setTask("");
        }else{
            alert("please add a Task");
        }
    }
  return (
    <div className='ADD'>
        <input className='inputss' type="text" value = {task} onChange = {(e) =>setTask(e.target.value)} />
        <button className='btn' onClick={handleSubmit}>Add Task</button>
    </div>
  )
}

export default AddTask