import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello world"}]
}

export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log("add todo clicked")
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            console.log("remove clicked")
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        }
        
    }
})
const initialUpdate = {
    initialTodoUpdate: {}
};

export const inputUpdateSlice = createSlice({
    name: 'inputUpdate',
    initialState: initialUpdate, // Corrected to 'initialState'
    reducers: {
        setTodoUpdate: (state, action) => {
            state.initialTodoUpdate = action.payload;
        },
        clearTodoUpdate: (state) => {
            state.initialTodoUpdate = {};
        }
    }
});

const initialStatus={
    initialToggleStatus:false
}

export const ToggleButtonSlice = createSlice({
    name: "initialStatus",
    initialState: initialStatus,
    reducers: {
        setToggle: (state) => {
            state.initialToggleStatus = true;
        },
        clearToggle: (state) => {
            state.initialToggleStatus = false;
        }
    }
});








export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export const {setTodoUpdate,clearTodoUpdate}=inputUpdateSlice.actions
export const {setToggle,clearToggle}=ToggleButtonSlice.actions
export const inputUpdateReducer = inputUpdateSlice.reducer;
export const ToggleButtonReducer=ToggleButtonSlice.reducer;
export default todoSlice.reducer