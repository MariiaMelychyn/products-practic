import {createSlice} from '@reduxjs/toolkit'
const BASE_USER_URL = `https://connections-api.herokuapp.com`;
const userLogin = './users/login';
const userRegister = './users/register';
const userLogout = './users/logout';
const userCurrent = './users/current';

const authSlice = createSlice({
name: "auth",
initialState: {
    user: {name: "", emsil: ""},
    token: '',
    error: null,
    isLoading: false,
    isAuth: false
},
reducers:{
    'zxzxzx': (state, action)=>>{
        return : {
            ...state,
        }
    }
}
extraReducers:{}
})

//=============PRODUCTS
const BASE_PRODUCT_URL = `https://619d2ffb131c600017088dd7.mockapi.io/api/v1/`;
const products = `/products`;