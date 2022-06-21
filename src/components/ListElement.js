import { useEffect } from 'react';
import './components.css';

function ListElement({
    name,
    id,
    onAddClick,
    onRemoveClick,
    tasks,
}) {

    // useEffect(() => {
    //     console.log(tasks);
    // },[tasks]);

  return (
     <div className='list' key={id}>
            LIST NAME : {name} || ID : {id} &nbsp;
        <button onClick={()=>onAddClick(id)}>
            ADD TASK
        </button>
        &nbsp;
        <button onClick={()=>onRemoveClick(id)}>
            REMOVE LIST
        </button>
        <div>
            tasks : {tasks?.map((task, index)=>{
                return (
                    <div key={index}>
                        {task.title}
                    </div>
                )
            })}

        </div>
     </div>
     
  );
}

export default ListElement;
