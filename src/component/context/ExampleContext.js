import React, { createContext, useContext } from 'react'
import { Sample2 } from './Sample2'
import Ref from './Ref'
import Reducer from './Reducer'

//1. creating - createContext  ✅
//2. Publisher - provider - context.Provider ✅
//3. Subscriber - useContext - useContext(context

const NameContext = createContext()

function ExampleContext() {
    const name = "jack"

    return (
        <NameContext.Provider value={name}>
            <div>
                {/* <h1>ExampleContext</h1> */}
                <Reducer />
                {/* <Ref /> */}
                {/* <Sample />
                <Sample1 />
                <Sample2 /> */}
            </div>
        </NameContext.Provider>

    )
}

export const useGlobalContext = () => {
    return useContext(NameContext)
}

function Sample() {
    const name = useGlobalContext()
    return (
        <h1>Hello {name}</h1>
    )
}


function Sample1() {
    const name = useGlobalContext()
    return (
        <h1>Hey {name}</h1>
    )
}

export default ExampleContext