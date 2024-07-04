import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const tarea = () => {
    if (todos.length == 1) return "tarea";
    else return "tareas";
  };

  return (
    <div className="container">
      <h1>Todo App Iván Zafra</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Añade una tarea"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? setTodos(todos.concat(value)) : null
            }
            value={value}
          />
        </li>
        {todos.map((todo, index) => (
          <li>
            {todo}
            <i
              class="fa-solid fa-trash"
              onClick={() =>
                setTodos(
                  todos.filter((d, currentIndex) => index != currentIndex)
                )
              }
            ></i>
          </li>
        ))}

        <span>
          {todos.length} {tarea()} pendientes.
        </span>
      </ul>
    </div>
  );
};

export default Home;