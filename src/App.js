import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
// import Axios from "axios";
import store from './redux/store'
import { connect } from 'react-redux';
import { addTodo, completeTodo, removeTodo } from "./redux/actions";

/* eslint-disable react/prop-types */

function App(props) {
	const { todos, addTodo, completeTodo, removeTodo } = props;
	console.log({props});
	const [value, setValue] = useState("");

	// const dburl = "https://task-list-6a646.firebaseio.com/.json";

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


	// Grabs text value from form and call addTodo function
	const submitHandler = (e) => {
		// console.log(value);
		e.preventDefault();
		addTodo(value);
		console.log('State: ', store.getState())
		setValue("");
	};

	// Marks item complete and updates main array
	// const completeTodo = (todo) => {
	// 	console.log("complete fired");
	// 	changeState(todo);
	// 	// setTodos([...todos]);
	// 	// sendData(todos);
	// };

	//Remove todo - find index of matching key from the array and then remove it from the array
	// const removeTodo = (todo) => {
	// 	let newArray = [...todos];
	// 	let index = newArray.findIndex((x) => x.key === todo.key);
	// 	newArray.splice(index, 1);
	// 	// setTodos(newArray);
	// 	// sendData(newArray);
	// };

	const editTodo = (e, todo) => {
		todo.text = e.target.value;
		let newArray = [...todos];
		// setTodos(newArray);
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


const mapStateToProps = ({ todos }) => ({
	todos 
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: (payload) => dispatch(addTodo(payload)),
	completeTodo: (payload) => dispatch(completeTodo(payload)),
	removeTodo: (payload) => dispatch(removeTodo(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
