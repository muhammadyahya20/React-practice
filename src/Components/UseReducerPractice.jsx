import { useReducer } from "react"



function MoneyMG(state, action){
    if (action.type === "add"){
        return {money:state.money +1}
    }
    else if (action.type === "minus"){
        return {money:state.money -1}
    }
    else {
        throw new Error()
    }
}

export default function Mgmt(){
    const initialState = {money:100}
    const [state, dispatch] = useReducer(MoneyMG, initialState)

    return (
        <>
        <h1>{state.money}</h1>
        <button onClick={()=> dispatch ({type : "add"})}>Add</button>
        <button onClick={()=> dispatch ({type : "minus"})}>Minus</button>
        </>
    )
}

