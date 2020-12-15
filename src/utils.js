import { v4 as uuidv4 } from 'uuid';

export const createTodo = (text) => {
	return {
		text: text,
		isComplete: false,
		key: uuidv4(),
	};
};

export const markComplete = (obj) => {
	obj.isComplete = !obj.isComplete;
	return obj;
};
