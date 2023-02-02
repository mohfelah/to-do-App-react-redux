import { useSelector } from 'react-redux';
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {
  const tasks = useSelector(state =>state.tasksReducers.tasks);
  return (
    <div className="App">
     <h1 className='title'>TODO-List-App</h1>
     <AddTask/>
     <ListTask tasks={tasks}/>
    </div>
  );
}

export default App;
