import Axios from "axios";

const dburl = "https://task-list-6a646.firebaseio.com/.json";

export const getTodos = async () => {
    const returnObject = await Axios.get(dburl);
    console.log({returnObject});
}

export const sendData = (arr) => {
		Axios.put(dburl, arr);
	};