import { ADD_TODO, DELETE_TODO } from "./types"

export const addToDo = (todo) => ({
    type: ADD_TODO,
    text: todo
}
);

export const deleteToDo = (key) => ({
    type: DELETE_TODO,
    key: key
}
);