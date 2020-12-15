import React from "react";

function Todo({ todo, completeTodo, removeTodo, editTodo }) {
	const changeHandler = (e) => {
		editTodo(e, todo);
	};

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

export default Todo;