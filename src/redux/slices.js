import {createSlice} from '@reduxjs/toolkit';
import {registerThunk} from './thunks'
const BASE_USER_URL = `https://connections-api.herokuapp.com`;
const userLogin = './users/login';
const userRegister = './users/signup';
const userLogout = './users/logout';
const userCurrent = './users/current';

const authSlice = createSlice({
name: "auth",
initialState: {
    user: {name: "", emsil: ""},
    token: '',
    error: null,
    isLoading: false,
    isAuth: false,
    myProp: 'Hello',
},
 reducers: {
    renameProp: (state, action) => {
      return {
        ...state,
        myProp: action.payload,
      };
    },
  },
extraReducers: {
    [registerThunk.pending](state, action){
        return{
            ...state,
            isLoading: true,
        }
    },
    [registerThunk.fulfilled](state, action){
        return{
            ...state,
            isLoading: false,
            user: action.payload.user,
            token: action.payload.token,
            isAuth: true,
    };
},
    [registerThunk.rejected](state, action){
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        }
    },
},
});
export const {renameProp} = authSlice.actions;
export default authSlice.reducer;
//=============PRODUCTS
const BASE_PRODUCT_URL = `https://619d2ffb131c600017088dd7.mockapi.io/api/v1/`;
const products = `/products`;