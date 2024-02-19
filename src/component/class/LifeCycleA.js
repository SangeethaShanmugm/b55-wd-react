import React, { Component } from "react";
import StateFull from "./StateFull";
import StateLess from "./StateLess";

export default class LifeCycleA extends Component {
    constructor() {
        super();
        this.state = {
            name: "Hello Everyone",
        };
        console.log("LifeCycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps");
        return state.name;
    }

    render() {
        console.log("LifeCycleA render");
        return (
            <div>
                <h1>LifeCycleA</h1>
                <p>{this.state.name}</p>
                <StateFull />
                <StateLess />
            </div>
        );
    }
    componentDidMount() {
        console.log("LifeCycleA componentDidMount");
        fetch("https://659e6ba547ae28b0bd35caec.mockapi.io/product")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
}
