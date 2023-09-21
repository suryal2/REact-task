// import React, { useState } from 'react'
// import './Mytodo.css'
// function Mytodo() {

//     const [allTodos,setTodos] =  useState([]);
//     const [newTitle,setNewTitle] = useState([]);
//     const [newDescription,setNewDescription] = useState("");


//     const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is active
//     const [editIndex, setEditIndex] = useState(null); // State to store the index of the item being edited
//     const [editedTitle, setEditedTitle] = useState(""); // State to store edited title
//     const [editedDescription, setEditedDescription] = useState(""); // State to store edited description
    

//     const handleAddTodo = ()=>{
//         let newTodoItem ={
//             title: newTitle,
//             description: newDescription
//         };

//         let updatedTodoArr = [...allTodos];
//         updatedTodoArr.push(newTodoItem);
//         setTodos(updatedTodoArr);
//         localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
 
//     };

//     const handelDeleteTodo =(index)=>{
//         let reducedTodo = [...allTodos];
//         reducedTodo.splice(index);
  
         
  
//         setTodos(reducedTodo);
//       } 
//       const handelEditTodo = (index) => {
//         setIsEditing(true);
//         setEditIndex(index);
//         const todoToEdit = allTodos[index];
//         setEditedTitle(todoToEdit.title); // Set initial value for editing title
//         setEditedDescription(todoToEdit.description); // Set initial value for editing description
//       };
      
//       const handleConfirmEdit = () => {
//         const updatedTodoArr = [...allTodos];
//         updatedTodoArr[editIndex] = {
//           title: editedTitle,
//           description: editedDescription,
//         };
//         setTodos(updatedTodoArr);
//         setIsEditing(false);
//         setEditIndex(null);
//         setEditedTitle("");
//         setEditedDescription("");
//         localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
//       };
      
  
//   return (
//     <>
//     <div className='container'>
//     <div className='body1' >
//         <h1>Mytodo</h1>
//        <div className="centerinput">
//         <div className="todo-input-item">
//              <label htmlFor="title">Title :</label>
//               <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="tiltle" id="title"/>
//            </div>
//            <div className="todo-input-item">
//              <label htmlFor="description">Description :</label>
//               <input type="text"value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="description" id="description"/>
//            </div>  
//            <div className="todo-input-item">
//              <button type="button"onClick={handleAddTodo} className="primaryBtn">Add</button>
//            </div>
//            {/* <div>
//            <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//       </div> */}
//            </div>
//            </div>


//            </div>

//           <div className='cardList'>
//             <div className="container-sm">
               
//             {allTodos.map((item, index) => (
//   <div className='card' key={index}>
//     {isEditing && editIndex === index ? (
//       <div>
//         <input
//           type="text"
//           value={editedTitle} // Display the initial title for editing
//           onChange={(e) => setEditedTitle(e.target.value)}
//           placeholder="Edit title"
//         />
//         <input
//           type="text"
//           value={editedDescription} // Display the initial description for editing
//           onChange={(e) => setEditedDescription(e.target.value)}
//           placeholder="Edit description"
//         />
//         <button type='button' onClick={handleConfirmEdit}>Save</button>
//       </div>
//     ) : (
//       <div>
//         <h3>Name: {item.title}</h3>
//         <p>Description: {item.description}</p>
//         <div>
//           <button type='button' onClick={() => handelDeleteTodo(index)}>Delete</button>
//           <button type='button' onClick={() => handelEditTodo(index)}>Edit</button>
//         </div>
//       </div>
//     )}
//   </div>
// ))}



//                 </div>
//                 </div>  

  
//     </>
//   )
// }

// export default Mytodo



import React, { useState } from 'react';
import './Mytodo.css';

function Mytodo() {
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [myCar, setMyCar] = useState("All");

//   const handleChange = (event) => {
//     if (!isEditing) {
//       setMyCar(event.target.value);
//     } else {
//       // Handle status change when in edit mode
//       const updatedTodoArr = [...allTodos];
//       updatedTodoArr[editIndex].status = event.target.value;
//       setTodos(updatedTodoArr);
//     }
//   }
  
const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  const handleAddTodo = () => {
    if (!newTitle.trim() || !newDescription.trim()) {
      // Check if newTitle or newDescription is empty or only whitespace
      alert("Title and Description cannot be empty");
      return; // Don't add the item and exit the function
    }
  
    if (!isEditing) {
      // If not in edit mode, add a new to-do item
      let newTodoItem = {
        title: newTitle,
        description: newDescription,
        status: myCar, // Use the selected status
      };
  
      let updatedTodoArr = [...allTodos];
      updatedTodoArr.push(newTodoItem);
      setTodos(updatedTodoArr);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    } else {
      // If in edit mode, update the existing to-do item
      const updatedTodoArr = [...allTodos];
      updatedTodoArr[editIndex] = {
        title: newTitle,
        description: newDescription,
        status: myCar
      };
      setTodos(updatedTodoArr);
      setIsEditing(false);
      setEditIndex(null);
      localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
    }
  
    // Clear input fields
    setNewTitle('');
    setNewDescription('');
  };

  const handelDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    setTodos(reducedTodo);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
  };

  const handelEditTodo = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    const todoToEdit = allTodos[index];
    setNewTitle(todoToEdit.title); // Set initial value for editing title
    setNewDescription(todoToEdit.description); // Set initial value for editing description
  };

  return (
    <>
      <div className="container">
        <div className="body1">
          <h1>Mytodo</h1>
          <div className="centerinput">
            <div className="todo-input-item">
              {/* <label htmlFor="title">Title :</label> */}
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Todo Name"
                id="title"
              />
            </div>
            <div className="todo-input-item">
              {/* <label htmlFor="description">Description :</label> */}
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Todo Description"
                id="description"
              />
            </div>
           
            <div className="todo-input-item">
              <button type="button" onClick={handleAddTodo} className="primaryBtn">
                {isEditing ? 'Save' : 'Add'}
              </button>
            </div>
            <div className="select1">
            <label>Status Filter:</label>

<select value={myCar} onChange={handleChange}>
<option value="All">ALL</option>
<option value="completed"> completed</option>
<option value="non-completed">non-completed</option>
</select>
            </div>
           
            
          </div>
        </div>
      </div>
    

      <div className=" cardlist">
      <h5>My Todo</h5>
        <div className=" container-sm">
       
       
          {allTodos.map((item, index) => (
            <div className="card" key={index}>
              <div>
                {isEditing && editIndex === index ? (
                  // Render edit inputs when in edit mode
                  <div>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Edit title"
                    />
                    <input
                      type="text"
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      placeholder="Edit description"
                    />
                  </div>
                ) : (
                  // Render item details when not in edit mode
                  <div>
                    <h3>Name: {item.title}</h3>
                    <p>Description: {item.description}</p>
                    <p>Status: <span>{item.status}</span></p> {/* Display the status */}

                    <div>
                      <button type="button" onClick={() => handelDeleteTodo(index) } id='del'>
                        Delete
                      </button>
                      <button type="button" onClick={() => handelEditTodo(index)} id='edit'>
                        Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mytodo;
