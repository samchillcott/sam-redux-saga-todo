import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import { connect } from 'react-redux';
import { addTodo, completeTodo, removeTodo, editTodo, downloadTodos } from "./redux/actions";
import { fetchTodos} from './api';

function App(props) {
	const { todos, addTodo, completeTodo, removeTodo, editTodo, downloadTodos } = props;
	// console.log({props});
	const [value, setValue] = useState("");

	// Fetches data from Firebase Realtime Database on page load
	// const fetchData = async () => {
	// 	const returnObject = await Axios.get(dburl);
	// 	if (returnObject.data !== null) {
	// 		setTodos(returnObject.data);
	// 	}
	// };

	useEffect(() => {
		downloadTodos();
	}, []);

	// Sends data to Firebase Realtime Database
	// const sendData = (arr) => {
	// 	Axios.put(dburl, arr);
	// };


	// Grabs text value from form and call addTodo function
	const submitHandler = (e) => {
		e.preventDefault();
		addTodo(value);
		setValue("");
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
	removeTodo: (payload) => dispatch(removeTodo(payload)),
	editTodo: (payload) => dispatch(editTodo(payload)),
	downloadTodos: (payload) => dispatch(downloadTodos(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);