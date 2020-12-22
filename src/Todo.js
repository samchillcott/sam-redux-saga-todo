import { React, useState } from "react";
import { connect } from 'react-redux';


function Todo({ todo, completeTodo, removeTodo, editTodo }) {
	const changeHandler = (e) => {
		// console.log("changeHandler in Todo fired");
		const newText = e.target.value;
		console.log({todo1: todo});
		const newTodo = {
			...todo,
			text: newText
		}
		editTodo(newTodo);
	}

	return (
		<div>
			<input onChange={changeHandler} type="text" value={todo.text} />
			<button onClick={() => completeTodo(todo)}>
				{todo.isComplete === false ? "Complete" : "Restore"}
			</button>
			<button onClick={() => removeTodo(todo)}>X</button>
		</div>
	);
}

const mapStateToProps = ({ todos }) => ({
	todos 
});

export default connect(mapStateToProps)(Todo);