import Axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const dburl = "https://task-list-6a646.firebaseio.com/.json";

export const getTodos = async () => {
    const returnObject = await Axios.get(dburl);
    // console.log({returnObject});
}

export const saveTodos = async (todoText) => {
    // console.log({todoText});
    const todos = [{isComplete: false,
                key: uuidv4(),
                text: todoText
                }]
    const response = await Axios.put(dburl, todos)
    return response
}

// export const sendData = (arr) => {
//         Axios.put(dburl, arr);
//         // console.log("sent to db",arr);
// };