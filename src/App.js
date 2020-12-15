import React, { useState } from "react";
import "./App.css";
import { createTodo, markComplete } from "./utils";
import Todo from "./Todo";
// import Axios from "axios";

function App() {
	const [todos, setTodos] = useState([]);
	const [value, setValue] = useState("");

	const dburl = "https://task-list-6a646.firebaseio.com/.json";

	// Fetches data from Firebase Realtime Database on page load
	// const fetchData = async () => {
	// 	const returnObject = await Axios.get(dburl);
	// 	if (returnObject.data !== null) {
	// 		setTodos(returnObject.data);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	// // Sends data to Firebase Realtime Database
	// const sendData = (arr) => {
	// 	Axios.put(dburl, arr);
	// };

	// Creates a new todo item, adds to to the main state/array, sends to db
	const addTodo = (value) => {
		let newObject = createTodo(value);
		let newArray = [newObject, ...todos];
		setTodos(newArray);
		// sendData(newArray);
	};

	// Grabs text value from form and call addTodo function
	const submitHandler = (e) => {
		e.preventDefault();
		addTodo(value);
		setValue("");
	};

	// Marks item complete and updates main array
	const completeTodo = (todo) => {
		markComplete(todo);
		setTodos([...todos]);
		// sendData(todos);
	};

	//Remove todo - find index of matching key from the array and then remove it from the array
	const removeTodo = (todo) => {
		let newArray = [...todos];
		let index = newArray.findIndex((x) => x.key === todo.key);
		newArray.splice(index, 1);
		setTodos(newArray);
		// sendData(newArray);
	};

	const editTodo = (e, todo) => {
		todo.text = e.target.value;
		let newArray = [...todos];
		setTodos(newArray);
		// sendData(newArray);
	};

	// Filtering for 2 Lists
	const doneTasks = todos.filter((todo) => todo.isComplete === true);
	const incompleteTasks = todos.filter((todo) => todo.isComplete === false);

	return (
		<div className="App">
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={value}
					placeholder="Add Todo"
					onChange={(e) => setValue(e.target.value)}
				/>
			</form>

			<div className="complete">
				<h3>INCOMPLETE TASKS</h3>
				{incompleteTasks.map((todo, key) => {
					return (
						<Todo
							key={key}
							todo={todo}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
							editTodo={editTodo}
						/>
					);
				})}
			</div>

			<div className="done">
				<h3>COMPLETE TASKS</h3>
				{doneTasks.map((todo, key) => {
					return (
						<Todo
							key={key}
							todo={todo}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
							editTodo={editTodo}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
