// import { store } from "./store";
import {connect} from "react-redux"

 function Array(props)
{
    console.log(props)
    // console.log(store.getState())
    // store.dispatch({type:"push"})
    // store.dispatch({type:"push"})
    // store.dispatch({type:"push"})
    // console.log(store.getState())
    // store.dispatch({type:"pop"})
    // console.log(store.getState())
    // store.dispatch({type:"empty"})
    // console.log(store.getState()) 

    return(
        <>
       <div> Array Component</div>
       {props.numbers.map(a=>{
           return <span>{a}</span>
       })}
       <button onClick={props.push} >push</button>
        <button onClick={props.pop} >pop</button>
        <button onClick={props.empty} >empty</button>

        </>
    )
}

const mapStateToProps=(state)=>{
    console.log(state)
    return state.array
}

const mapDispatchToProps=(dispatch)=>{
return {
    push:()=>{dispatch({type:"push"})},
    pop:()=>{dispatch({type:"pop"})},
    empty:()=>{dispatch({type:"empty"})}
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Array)