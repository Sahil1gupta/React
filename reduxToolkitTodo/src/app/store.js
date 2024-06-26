// import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../features/todo/todoSlice';

// export const store = configureStore({
//     reducer: todoReducer
// })

// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer, { inputUpdateReducer,ToggleButtonReducer } from '../features/todo/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
  inputUpdate: inputUpdateReducer, // Update the key to match the name of your slice
  initialStatus:ToggleButtonReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
