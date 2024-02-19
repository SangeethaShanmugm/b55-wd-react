import React, { useState } from 'react'

function StateLess() {
    const [count, setCount] = useState(0)

    const IncrementCount = () => {
        setCount(count + 1)
    }
    return (
        <div>StateLess
            <p>Count: {count}</p>
            <button onClick={IncrementCount}>Increment count</button>
        </div>
    )
}

export default StateLess