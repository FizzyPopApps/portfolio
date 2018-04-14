import React, { Component } from 'react'
import './bubbles.css'

export class Bubble extends Component {
      /**
     * Get a random floating point number between `min` and `max`.
     * 
     * @param {number} min - min number
     * @param {number} max - max number
     * @return {number} a random floating point number
     */
    randomFloat = (min, max) => Math.random() * (max - min) + min;

    /**
     * Get a random integer between `min` and `max`.
     * 
     * @param {number} min - min number
     * @param {number} max - max number
     * @return {number} a random integer
     */
    randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    render() {

        //let { topPercent, leftPercent, scale, animateBubbleTime, sideways } = this.props;

        const topPercent = -30
        const leftPercent = this.randomInt(0, 80)
        const scale = this.randomFloat(0.2, 0.8)
        const sideways = this.randomInt(1, 4)
        const animateBubbleTime = this.randomInt(5, 20)
        return (
            <div className="bubble" style={{top: `${topPercent}%`, left: `${leftPercent}%`, transform: `scale(${scale})`, animation: `animateBubble ${animateBubbleTime}s linear infinite, sideWays ${sideways}s ease-in-out infinite alternate`}}></div>
        );
    }
}

export default class Bubbles extends Component {
    render() {

        const { amount } = this.props;
        let arr = [];
        
        let upperBound = Math.round(amount/10)
        console.log(upperBound)
        for(let i = 0; i < amount;i++){
            arr.push(<Bubble key={i}></Bubble>)
        }

        return <div>{arr}</div>
    }
}


