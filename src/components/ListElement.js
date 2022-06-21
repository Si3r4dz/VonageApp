import './components.css';

function ListElement({
    name,
    id,
    onAddTaskClick,
    onRemoveListClick,
    onRemoveTaskClick,
    tasks,
}) {

  return (
     <div className='list' key={id}>
            LIST NAME : {name}&nbsp;
        <button onClick={()=>onAddTaskClick(id)}>
            ADD TASK
        </button>
        &nbsp;
        <button onClick={()=>onRemoveListClick(id)}>
            REMOVE LIST
        </button>
        <div>
            tasks : {tasks?.map((task, index)=>{
                return (
                    <div key={index}>
                        <input type='checkbox'/>
                        {task.title} &nbsp;
                        <button on onClick={()=>onRemoveTaskClick(task.id)}>
                            TRASH
                        </button>
                        
                    </div>
                )
            })}

        </div>
     </div>
     
  );
}

export default ListElement;
