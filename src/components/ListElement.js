import './components.css';
import { useEffect, useState } from 'react';
import {checkDeadline, parseDate} from '../utils';

function ListElement({
    name,
    id,
    onAddTaskClick,
    onRemoveListClick,
    onRemoveTaskClick,
    onCheckboxChanged,
    onMoveUpClick,
    onMoveDownClick,
    tasks,
}) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());

//  tasks.sort((a,b)=>{
//         if(a.expiresAt < b.expiresAt) return -1;
//         else if(a.expiresAt > b.expiresAt) return 1;
//         else return 0;
//         });
  return (
     <div className='list' key={id}>
         <div className='listHeader'> 
            <span>{name}</span> 
         </div>
            <div className='listBody'>

                <div className='taskMenu'>
                    <span> Task title :  </span>
                    <input type='text' value={title} name="title" onChange={(e)=>setTitle(e.target.value)}/>
                    <span> expiry date :  </span>
                    <input type='datetime-local' name='date' defaultValue={parseDate(date)} onChange={(e)=>setDate(e.target.value)}/>
                </div>

            <button onClick={()=>{
                    //  if(title!=='' && date!==''){
                        setTitle('')
                        setDate(new Date())
                        onAddTaskClick(title,date)
                    //}
                }}
            >
                ADD TASK
            </button>
                &nbsp;
            <button onClick={()=>onRemoveListClick(id)}>
                REMOVE LIST
            </button>
        </div>
        
        <div className='taskList'>
                <div  className="task" >
                        <span>Done</span>
                        <span>Title &nbsp;</span>
                        <span>Date &nbsp;</span>   
                        <span>Move &nbsp;</span>   
                        <span>Delete&nbsp;</span>   
                        
                        
                    </div>
                {tasks?.map((task, index)=>{
                return (
                    
                     <div key={task.id} className="task" style={{
                        backgroundColor: task.done ? '#ccc' : checkDeadline(task.expiresAt)
                     }}>
                        <input type='checkbox' defaultChecked={task.done} onChange={(e)=> onCheckboxChanged(e.target.checked,task.id)}/>
                        {task.title} &nbsp;
                        <span> {parseDate(task.expiresAt)}</span>    
                        
                          
                            
                           <div>
                            <button onClick={()=>onMoveUpClick(index)}>&#8593;</button>
                            <button onClick={()=>onMoveDownClick(index)}>&#8595;</button>
                            </div> 
                        <button on onClick={()=>onRemoveTaskClick(task.id)}>
                            RM
                        </button>  
                    </div>
                    
                )
            })}

        </div>
     </div>
     
  );
}

export default ListElement;
