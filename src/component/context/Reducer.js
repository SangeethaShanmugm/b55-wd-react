import React, { useReducer } from "react";

function Reducer() {

    //useReducer(()=>{}, {define states})
    //action  => to be dispatched

    const [state, dispatch] = useReducer(
        (state, action) => {
        console.log(state, action)
        //action Types
        if (action.type === "nameUpdate") {
            return {
                ...state,
                name: action.value,
            }
        }
        if (action.type === "updatePass") {
            return {
                ...state,
                password: action.value,
            }
        }
        if (action.type === "counterInc") {
            return {
                ...state,
                btn: state.btn + 1,
            }
        }
        if (action.type === "counterDec") {
            return {
                ...state,
                btn: state.btn - 1,
            }
        }

    }, {
        //define states
        name: "Jack",
        btn: 1,
        password: "12345"

    })

    return (
        <div>
            <h1>Reducer</h1>
            <p>{state.name}</p>
            <p>{state.btn}</p>
            <p>{state.password}</p>
            {/* password */}
            <input type="text" onChange={(e) => dispatch({ type: "updatePass", value: e.target.value })} />
            {/* name */}
            <button onClick={() => dispatch({ type: "nameUpdate", value: "Peter" })}>getValue</button>
            {/* btn */}
            <button onClick={() => dispatch({ type: "counterInc" })}>Increment</button>
            <button onClick={() => dispatch({ type: "counterDec" })}>Decrement</button>
        </div>
    );
}

export default Reducer;
