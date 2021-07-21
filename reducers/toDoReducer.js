import { ADD_TODO, DELETE_TODO } from "../actions/types"

const initialState = {
    todoList: [
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' }
    ]
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: state.todoList.concat({
                    key: Math.random().toString(),
                    text: action.text
                })
            };
        case DELETE_TODO:
            return{
                ...state,
                todoList: state.todoList.filter((mytodo) => mytodo.key != action.key)

            }
        default:
            return state;
    }
}

export default toDoReducer;