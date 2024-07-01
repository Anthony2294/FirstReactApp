import Button from '@mui/material/Button';
import { useState } from "react";
import {v4 as uuid} from "uuid";
import List from '@mui/material/List';
import Todo from './Todo';
import { Label } from '@mui/icons-material';



function AddToDo () {



    // const initialTodos = [];//[ {id: uuid(), text: 'Learn to code', isDone: false } ];
    const [inputText, setInputText] = useState("");
    // const [toDoItem, setToDoItem] = useState(initialTodos);
    const [initialTodos, setToDoItem] = useState([]);


    function handleEvent(e) {
        const userInput = e.target.value;
        setInputText(userInput);
    }


    // function updateToDo() {
    //     setToDoItem((prevToDo) => {
    //         return [...prevToDo, 
    //             {[inputText]: 'userInput', key: uuid()} 
    // ]});

    function updateToDo() {
        setToDoItem((prevToDo) => {
            return [...prevToDo, inputText]
                    
        });

    setInputText("");

    }


    const deleteToDo = (todoid) => {
        setToDoItem ((lastToDo) => {
            return lastToDo.filter( (itemid) => itemid.id !== todoid);
        });


    // const deleteToDo = (todoid) => {
    //     setToDoItem ((lastToDo) => {
    //         return lastToDo.filter( (itemid, index) =>  { return index !== todoid});
    //     });    

    // const deleteToDo = (todoid) => {
    //     setToDoItem ((lastToDo) => {
    //         return lastToDo.filter( (item, index) =>  { return index !== todoid });
    //     });

    };



    return (

            <>
                <div className="InputContainer">
                    <input onChange={handleEvent} className='UserInput' type='text' placeholder="Enter your to do.." value={inputText}/>
                    <Button className='Btn' onClick={updateToDo} variant="contained">Add</Button>
                </div>


                <div>
                    <List sx={{ display:'flex', flexDirection: 'column' , justifyContent: 'center', margin: 'auto', width: 825}}>  

                        {initialTodos.map((item) => (
                            
                            <Todo item={item} key={item} deleteToDo={() => deleteToDo(item.id)}/>


                        ))}    
                        
                        </List>              
                
                   </div> 

             </>
        );
}





export default AddToDo; 








