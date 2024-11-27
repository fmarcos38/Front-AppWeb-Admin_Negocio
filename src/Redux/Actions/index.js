import axios from "axios";
import { actual } from "../../URLs";
import { LOGIN, RESET_LOGIN } from "./actionType";

//--ACTIONS LOGIN--------------------
export function login(data){
    return async function (dispatch){
        const resp = await axios.post(`${actual}/auth/login`, data);
        //asigno el token al header
        axios.defaults.headers.common["Authorization"] = `Bearer ${resp.data.token}`;
        //asigno data del user al localstorage
        localStorage.setItem("userData", JSON.stringify(resp.data.user));
        //dispatch
        dispatch({ type: LOGIN, payload: resp.data});
    }
}
export function resetLogin(){
    return function(dispatch){
        dispatch({type: RESET_LOGIN, payload: null});
    }
}
//--