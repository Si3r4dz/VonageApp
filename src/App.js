import './App.css';
import React, {useEffect, useState} from 'react';
import ListElement from './components/ListElement';


function App() {

  const [lists, setLists] = useState([]);
  const [newItem, setItem] = useState('');
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

  const handleAddTaskClick = (e) => {
    console.log(e);
     let tmplist = lists[e-1].tasks.push({
      title:'Sraka',
      expiresAt:new Date(),
      id: lists[e-1].tasks.length !== undefined ? lists[e-1].tasks.length + 1 : 1
    });
    setLists(lists);
  } 

  const handleRemoveListClick = (e) => {
    setLists(lists.filter(list=>list.id !== e));
  } 

  useEffect(()=>{
    console.log("uesEfect",lists)
  },[lists])

  
  return (
    <div className="App">
      <div className='mainContainer'>
        <span>
          List name :&nbsp; 
        </span>
        <input type='text' value={listName} onChange={(e)=>setListname(e.target.value)}/>
        <button onClick={() => handleClick()}>
          Add List
        </button>
        <div className='listView'>
          {lists.map((list, index)=>{
            return (
              <ListElement
                name={list.name}
                id={list.id}
                key={index}
                onAddClick={handleAddTaskClick}
                onRemoveClick={handleRemoveListClick}
                tasks={list.tasks}
            />)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
