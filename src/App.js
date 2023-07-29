import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true }, 
//   { text: 'Tomar el curso de intro a React.js ', completed: false }, 
//   { text: 'Llorar con la Llorona ', completed: false }, 
//   { text: 'LALALLALALA', completed: false }, 
//   { text: 'Usar estados derivados', completed: true }, 
// ];

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.remoceItem('TODOS_V1');

function App() {
  let parsedTodos = localStorage.getItem('TODOS_V1'); 

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setsearchValue] = React.useState( '' );

  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed =true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>

     <TodoCounter 
     completed={completedTodos} 
     total={totalTodos} 
     />
     <TodoSearch
      searchValue={searchValue}
      setsearchValue={setsearchValue}
     />

     <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
     </TodoList>

     <CreateTodoButton />

    </>
  );
}

export default App;
