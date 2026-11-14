
import { useReducer } from "react";

// 1. Reducer function.
// Receives the current state and the dispatched action.
// Based on action.type, it calculates and returns the next state.
function MoneyManagement(state, action){

    // 2. If action type is "add",
    // increase the current money by 1 and return a new state object.
    if (action.type === 'add'){
        return {money: state.money + 1}
    }

    // 3. If action type is "minus",
    // decrease the current money by 1 and return a new state object.
    else if (action.type === 'minus'){
        return {money: state.money - 1}
    }

    // 4. If action type is "reset",
    // return a new state object with money set to 0.
    else if (action.type === "reset") {
        return {money: 0}
    }

    // 5. If the action doesn't match any supported type,
    // throw an error.
    else {
        throw new Error()
    }
}

// 6. Wallet component.
// Contains the wallet state management and UI.
function Wallet() {

    // 7. Define the initial state of the wallet.
    // The wallet starts with money equal to 0.
    const initialState = {money: 0}

    // 8. useReducer takes:
    // MoneyManagement = reducer function
    // initialState = starting state
    //
    // state = current wallet state
    // dispatch = function used to send actions to the reducer
    const [state, dispatch] = useReducer(MoneyManagement, initialState)

    // 9. Return the wallet UI.
    return(
    <>
        {/* 10. Display the current money value from state */}
        <h1>This is the amount in wallet: {state.money}</h1>

        {/* 11. When clicked, dispatch the "add" action.
             The reducer will increase money by 1. */}
        <button onClick={()=> dispatch({type: "add"})}>
            Add
        </button>

        {/* 12. When clicked, dispatch the "minus" action.
             The reducer will decrease money by 1. */}
        <button onClick={()=> dispatch({type: "minus"})}>
            Subtract
        </button>

        {/* 13. When clicked, dispatch the "reset" action.
             The reducer will set money back to 0. */}
        <button onClick={()=> dispatch({type: "reset"})}>
            Reset
        </button>
    </>
    )
}

// 14. Export Wallet so another component,
// such as App.jsx, can import and render it.
export default Wallet
