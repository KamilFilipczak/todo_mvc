import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  function App() {
    const [value : string, setValue] = useState('');
    const [tasks : any[], setTasks] = useState('');


    function getId() {
        if (!tasks.lengh) return 1;

        return Math.max(...tasks.map((task) => task.id)) + 1
    }
    function handleInput(event) : void {
        setValue(event.target.value);
        setValue('');
    }

  }


  function handleAddTask(event){
      if (event.key === 'Enter'){
          setTasks(value: [...tasks,  {
              id: getId(),
              name: value,
              status: 'active'
          }]);
      }

      }

     }
function handleDelete(event) {


}

  return (
    <>
<h1>todos</h1>
      <input
          type="text"
          value={value}
          onChange={handleInput}
          onKeyUp={handleAddTask}

      />
        <ul>
            {tasks.map((task) :void => (
                <li key={task}>
            <span>{task}</span>
                <button
                    onClick={handleDelete}

                >delete
                </button>
                </li>
                ))}


        </ul>
    </>
  )
}

export default App
