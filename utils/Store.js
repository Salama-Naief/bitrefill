import Cookies from "js-cookie";
import {createContext, useReducer} from "react"

const initailState={
    darkMode:Cookies.get("darkMode")?JSON.parse(Cookies.get("darkMode")):false,
    countary:Cookies.get("countary")?JSON.parse(Cookies.get("countary")):"egypt",
   cart:{
    cartItems:Cookies.get("shippingCartItems")?JSON.parse(Cookies.get("shippingCartItems")):[]
  }
}
export const Store= createContext();

function reducer(state,action){
  switch (action.type){

      case "DARK_MODE":{ 
        Cookies.set("darkMode",JSON.stringify(action.payload));
        return{...state,darkMode:action.payload}
      }
      case "ADD_COUNTARY":{ 
        Cookies.set("countary",JSON.stringify(action.payload));
       return{...state,countary:action.payload}
     }
     case "ADD_TO_CART":{
      console.log("state",state)
      console.log("action",action)
      const newItem=action.payload;        
      const existItem=state.cart.cartItems.find(item=>item.id===newItem.id);
      const cartItems=existItem?state.cart.cartItems.map(item=>
        item.id===existItem.id?newItem:item
      ):[...state.cart.cartItems,newItem];
       Cookies.set("shippingCartItems",JSON.stringify(cartItems));
      return{...state,cart:{...state.cart,cartItems}}
    }
    case "REMOVE_FROM_CART":{
      const cartItems=state.cart.cartItems.filter(item=>item.id!==action.payload.id);
      Cookies.set("items",JSON.stringify(cartItems));
      return{...state,cart:{...state.cart,cartItems}}
    }
      default : return state;
  }
}


export default function StoreProvider(props){
    const [state,dispatch]=useReducer(reducer,initailState)
    const value={state,dispatch}

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}