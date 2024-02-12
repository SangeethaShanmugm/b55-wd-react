import React from 'react';
import { useGlobalContext } from './ExampleContext';

export function Sample2() {
    const name = useGlobalContext();
    return (
        <h1>Welcome {name}</h1>
    );
}
