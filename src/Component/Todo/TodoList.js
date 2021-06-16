import React,{useState} from 'react';
import './Todo.css'

export default function TodoList() {
     const [inputList,setInputList] = useState("");
     const [Items, setItems] = useState([]);
     const itemEvent =(event)=>{ 
          setInputList(event.target.value); 
     };
     const listOfItems =() =>{
          setItems((oldItems)=>{
               return [...oldItems,inputList];
           });
           setInputList(""); 
 };
 const deleteItems =((id)=>{
     console.log("deleted");
     setItems((oldItems)=>{
          return oldItems.filter((arrElem,index)=>{
               return index !== id;
          });
     });
 });
     return (
          <div className="container">
               <header>
               <h1>ToDo List</h1>
               </header>
               <div className="input-field col s5">
          <input placeholder="Type here" id="todo" type="text" value={inputList} onChange={itemEvent}/> </div>
          <button className="btn-floating btn-large halfway-fab waves-effect waves-light teal" onClick={listOfItems}>
           <i className="material-icons">add</i>
          </button>
     <table class="table">
  <thead>
   
    {Items.map((ItemValue,index )=>{
          return(
             
          <tr>
          <i className=" material-icons  close_icon" aria-hidden="true" onClick={()=>{
                      deleteItems(index)
                 }}>close</i>   
             {ItemValue}</tr>
         
          );
     })} 
  </thead>
 </table>
        </div>
     )
}
