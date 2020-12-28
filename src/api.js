import Axios from "axios";
// import { v4 as uuidv4 } from 'uuid';

const dburl = "https://task-list-6a646.firebaseio.com/.json";

export const fetchTodos = async () => {
    console.log("fetch fired via api.js");
    const response = await Axios.get(dburl);
    // console.log({response});
    // const newTodos = response.data
    // console.log(newTodos);
    // return newTodos
    return response
}

// export const saveTodos = async (todos) => {
//     const todos = [{isComplete: false,
//                 key: uuidv4(),
//                 text: "hard coded todo from api.js"
//                 }]
//     const response = await Axios.put(dburl, todos)
//     return response
// }

export const saveTodos = (todos) => {
    console.log("save todo fired");
    Axios.put(dburl, todos)
}

// export const sendData = (arr) => {
//         Axios.put(dburl, arr);
//         // console.log("sent to db",arr);
// };