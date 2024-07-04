import React from "react";
import { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState("");

  const url = "https://playground.4geeks.com/todo/users/" + users;
  const urlTodos = "https://playground.4geeks.com/todo/todos/";
  const urlUserTodos = "https://playground.4geeks.com/todo/todos/" + users;

  console.log(todos);

  //Me traigo los datos de la api
  const getList = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setTodos(data.todos);
      console.log(data);
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label: todoInput,
          is_done: false,
        }),
      });
      const data = await res.json();
      setUsers("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Como se van a añadir los todos
  const addTodo = async () => {
    try {
      const res = await fetch(urlUserTodos, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label: todoInput,
          is_done: false,
        }),
      });
      const data = await res.json();
      getList();
      setTodoInput("");
      console.log(data);
      console.log(urlUserTodos);
    } catch (error) {
      console.log(error);
    }
  };
  // Borrar ToDos

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(urlTodos + id, {
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      });
      getList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUser = (e) => {
    setUsers(e.target.value);
  };

  const handleTodo = (e) => {
    setTodoInput(e.target.value);
  };
  const submitTodo = (e) => {
    e.key === "Enter" ? addTodo(users) : null;
  };

  //Aqui empieza el print
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Introduce tu nombre de usuario"
            onChange={handleUser}
            value={users}
          />
          <button onClick={getList}>Login</button>
          <button onClick={addUser}>Register</button>
        </li>
        <li>
          <input
            type="text"
            placeholder="Añade una tarea"
            onKeyDown={submitTodo}
            onChange={handleTodo}
            value={todoInput}
          />
        </li>
        <li>
          {todos &&
            todos.map((todo, index) => (
              <li id={todo.id} key={index}>
                {todo.label}
                <i
                  class="fa-solid fa-trash"
                  onClick={() => deleteTodo(todo.id)}
                ></i>
              </li>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default Home;
