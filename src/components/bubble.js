import React, { Component } from 'react'
import './bubbles.css'

export class Bubble extends Component {
    render() {

        const { bubblesProp } = this.props;

        return (
            <div className={"bubble x" + bubblesProp}></div>
        );
    }
}

export default class Bubbles extends Component {
    render() {

        const { amount } = this.props;
        let arr = [];

        for(let i = 0; i < amount/10;i++){
            for(let k = 1; k < 11; k++) {
                arr.push(<Bubble bubblesProp={k}></Bubble>)
            }
        }

        return <div>{arr}</div>
    }
}


