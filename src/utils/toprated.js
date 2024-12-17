import { createSlice } from "@reduxjs/toolkit";
 const movieslice=createSlice({
    name:"movie",
    initialState:{
        nowplayingmovies1:[],
    },
    reducers:{
        addnowplayingmovies1:(state,action)=>{
            state.nowplayingmovies1=action.payload;
        }
    }
 })
 export const { addnowplayingmovies1 } = movieslice.actions;
 export default movieslice.reducer;
