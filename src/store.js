import * as redux from "redux";

//count Actions
export const INCREMENT="increment"
export const DECREMENT="decrement"
export const RESET="reset"



// countreducer
const countReducer=(state={count:0},action)=>{
    console.log("in")
    switch(action.type)
    {
            case INCREMENT:
            {
                
                return{count:state.count+1}
            }
            case DECREMENT:
            {
                return{count:state.count-1}
            }
            case RESET:
            {
                return{count:0}
            }
            default:
            {
                console.log("in default")
                return state
            }

    }
}

//Array actions
const PUSH="push";
const POP="pop";
const EMPTY="empty"

//Array Reducer
const ArrayReducer=(state={numbers:[]},action)=>{
    switch(action.type)
    {
            case PUSH:
            {
                const numbers=[...state.numbers]
                numbers.push(Math.random())
                return{numbers:[...numbers]}
            }
            case POP:
            {
                const numbers=[...state.numbers]
                numbers.pop()
                return{numbers:[...numbers]}
            }
            case EMPTY:
            {
                return{numbers:[]}
            }
            default:
            {
                return state
            }

    }
}

const rootReducer=redux.combineReducers({
    counter:countReducer,
    array:ArrayReducer})


export const store =redux.createStore(rootReducer)