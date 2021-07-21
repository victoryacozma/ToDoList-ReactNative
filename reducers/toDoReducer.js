import { ADD_TODO, DELETE_TODO } from "../actions/types"
import { Alert } from "react-native";

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
            if (action.text.length > 3)
                return {
                    ...state,
                    todoList: state.todoList.concat({
                        key: Math.random().toString(),
                        text: action.text
                    })

                };
            else {
                Alert.alert('OOPS', 'todos should be over 3 chars long', [
                    { text: 'Understood', onPress: () => console.log('alert closed') }
                ])

            }

        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter((mytodo) => mytodo.key != action.key)

            }
        default:
            return state;
    }
}

export default toDoReducer;