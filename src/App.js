import './App.css';
import React, { useState} from 'react';
import ListElement from './components/ListElement';


function App() {

  const [lists, setLists] = useState([]);
  
  const [listName, setListname] = useState('');

  const handleClick=()=>{
    if(listName!==''){
      setLists([...lists, {
        name:listName,
        id: lists.length === 0 ? 1 : lists[lists.length-1].id+1,
        tasks:[]
      }])
    } 
    setListname('');
  }

  const handleAddTaskClick = (index,title,date) => {
    let tmpArr = [...lists];
    tmpArr[index].tasks.push({
      title:title,
      expiresAt:new Date(date),
      id: tmpArr[index].tasks.length !== 0 ? tmpArr[index].tasks.length + 1 : 1,
      done:false,
    });
    setLists(tmpArr)
  } 

  const handleRemoveListClick = (e) => {
    setLists(lists.filter(list=>list.id !== e));
  } 

  const handleRemoveTaskClick = (taskId,listId) => {
   let tmp =  lists.filter((list)=>{
        if(list.id === listId){
          list.tasks = list.tasks.filter(task => task.id !== taskId);
          return list;
        }else return list
    });
    setLists(tmp);
  } 
  
  const handleCheckboxChanged = (value,taskId,listId) => {
    let tmp =  lists.filter((list)=>{
        if(list.id === listId){
          list.tasks = list.tasks.map(task => task.id === taskId ? task={...task,'done':value} :task);
          return list;
        }else return list
    });
    setLists(tmp);
  }

   const reorder = (list, startIndex, endIndex,length) => {
    if(endIndex !== length && endIndex !== -1){
        var tmp = list[startIndex];
        list[startIndex] = list[endIndex];
        list[endIndex] = tmp
        return list;
    }
    else return list;  
    }

  const handleMuveUpClick = (taskIndex,listId) => {
    let tmp = lists.filter((list)=>{
      if(list.id === listId){
        list.tasks = reorder(list.tasks,taskIndex,taskIndex-1); 
        return list;
      }else return list
    });
    setLists(tmp);
  }

  const handleMuveDownClick = (taskIndex,listId,length) => {
    let tmp = lists.filter((list)=>{
      if(list.id === listId){
       list.tasks = reorder(list.tasks,taskIndex,taskIndex+1,length); 
        return list;
      }else return list
    });
    setLists(tmp);
  }
  return (
    <div className="App">
      <div className='mainContainer'>
        <span>
          List name :&nbsp; 
        </span>
        <input type='text' name='title' value={listName} onChange={(e)=>setListname(e.target.value)}/>
        <button onClick={() => handleClick()}>
          Add List
        </button>
        <div className='listView'>
          {lists?.map((list, index)=>{

            return (
              <ListElement
                name={list.name}
                id={list.id}
                key={list.id}
                onAddTaskClick={(title,date)=>handleAddTaskClick(index,title,date)}
                onRemoveListClick={handleRemoveListClick}
                onRemoveTaskClick={(taskId)=>handleRemoveTaskClick(taskId,list.id)}
                onCheckboxChanged={(value,taskId)=>{handleCheckboxChanged(value,taskId,list.id)}}
                onDateChanged={(e)=>{handleCheckboxChanged(e)}}
                onMoveUpClick={(taskIndex)=>{handleMuveUpClick(taskIndex,list.id)}}
                onMoveDownClick={(taskIndex)=>{handleMuveDownClick(taskIndex,list.id,list.tasks.length)}}
                tasks={list.tasks}
            />)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
