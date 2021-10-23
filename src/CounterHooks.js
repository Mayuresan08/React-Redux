// import { store } from "./store"
import { useSelector,useDispatch} from "react-redux"
import {INCREMENT,DECREMENT,RESET} from "./store"


 export default function CounterHook(props)
{
    //all states
    const state=useSelector((state)=>state)
    console.log(state)
    //counter state
    const counter=useSelector((state)=>state.counter)
    console.log(counter)

    const dispatch=useDispatch()


    const decrement=()=>dispatch({type:"increment"})
    const reset=()=>dispatch({type:"reset"})

    return(
        <>
      
        <div>
        <br/>counter Hook  component</div>
        <p>Count:{counter.count}</p>
        {/* directly call dispatch for increment */}
        <button onClick={()=>{dispatch({type:"increment"})}} >increment</button>
        {/* or use another function to call dispatch for decrement and reset */}
        <button onClick={decrement} >decrement</button>
        <button onClick={reset} >Reset</button>
        <br/>
        </>
    )
}

