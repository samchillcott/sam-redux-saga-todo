
export const markComplete = (obj) => {
	obj.isComplete = !obj.isComplete;
	return obj;
};
