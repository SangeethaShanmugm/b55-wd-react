import React, { useRef, useEffect } from "react";

function Ref() {
    const inputRef = useRef();
    const count = useRef(0)

    const data = useRef(null)

    const handleInputChange = () => {
        console.log("handleInputChange", inputRef.current.value)
    }

    const handleSubmit = () => {
        console.log("handleSubmit", inputRef.current.value)
    }
    const handleClick = () => {
        count.current += 1
        console.log("Inc count", count.current)
    }

    useEffect(() => {
        const callBack = () => {
            console.log("Button Is clicked")
        }
        data.current = callBack
    }, [])//only once

    return (
        <div>
            <h1>Ref</h1>
            <input type="text" ref={inputRef} onChange={handleInputChange} />
            <button onClick={handleSubmit}>GetValue</button>

            <p>Count: {count.current}</p>
            <button onClick={handleClick}>Increment</button>

            <button onClick={() => data.current()}>Click Me!!!!</button>
        </div>
    );
}

export default Ref;
