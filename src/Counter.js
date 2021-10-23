// import { store } from "./store"
import { connect} from "react-redux"
import {INCREMENT,DECREMENT,RESET} from "./store"


 function Counter(props)
{
 console.log(props)
        // console.log(store.getState())
        // store.dispatch({type:"increment"})
        // store.dispatch({type:"increment"})
        // store.dispatch({type:"increment"})
        // console.log(store.getState())
        // store.dispatch({type:"decrement"})
        // console.log(store.getState())
        // store.dispatch({type:"reset"})
        // console.log(store.getState())        

    return(
        <>
        <div>counter component</div>
        <p>Count:{props.count}</p>
         {/* <button onClick={()=>props.dispatch({type:"increment"})} >Increment</button>
        <button onClick={()=>props.dispatch({type:"decrement"})}>Decrement</button>
        <button onClick={()=>props.dispatch({type:"reset"})}>Reset</button>  */}
        {/* using mapDispatchToProps */}
        <button onClick={props.increment} >increment</button>
        <button onClick={props.decrement} >decrement</button>
        <button onClick={props.reset} >Reset</button>
        </>
    )
}

const mapStateToProps=(state)=>{
console.log(state)
return state.counter;
};
const mapDispatchToProps=(dispatch)=>{

    return{
        increment:()=>{  dispatch({type:INCREMENT})},
        decrement:()=>{dispatch({type:DECREMENT})},
        reset:()=>{dispatch({type:RESET})}
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(Counter)