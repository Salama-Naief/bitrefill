import Cookies from "js-cookie";
import {createContext, useReducer} from "react"

const initailState={
    darkMode:Cookies.get("darkMode")?JSON.parse(Cookies.get("darkMode")):false,
    countary:Cookies.get("countary")?JSON.parse(Cookies.get("countary")):"egypt",

}
export const Store= createContext();

function reducer(state,action){
  switch (action.type){

      case "DARK_MODE":{ 
        console.log("action",action.payload)
         localStorage.setItem("darkMode",JSON.stringify(action.payload));
        return{...state,darkMode:action.payload}
      }
      case "ADD_COUNTARY":{ 
        localStorage.setItem("countary",JSON.stringify(action.payload));
       return{...state,countary:action.payload}
     }

      default : return state;
  }
}


export default function StoreProvider(props){
    const [state,dispatch]=useReducer(reducer,initailState)
    const value={state,dispatch}

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}