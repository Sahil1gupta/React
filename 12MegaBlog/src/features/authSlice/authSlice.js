import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})
// create for allpost,userpost

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;