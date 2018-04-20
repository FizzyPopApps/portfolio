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

    sizes = [40, 80, 120, 140]
    leftPercents = [82, 82 , 81, 80]

    render() {
        const bubbleSelectionIndex = this.randomInt(0,this.sizes.length)
        const topPercent = -100
        const leftPercent = this.randomInt(0, this.leftPercents[bubbleSelectionIndex])
        const bubbleSize = this.sizes[bubbleSelectionIndex]
        const sideways = this.randomInt(1, 4)
        const animateBubbleTime = this.randomInt(0,5)
        return (
            <div className="bubble" style={{top: `${topPercent}%`, left: `${leftPercent}%`, width: `${bubbleSize}`, height: `${bubbleSize}`,animation: `animateBubble ${animateBubbleTime}s linear, sideWays ${sideways}s ease-in-out alternate`}}></div>
        );
    }
}

export default class Bubbles extends Component {
    render() {

        const { amount } = this.props;
        let arr = [];
        
        for(let i = 0; i < amount;i++){
            arr.push(<Bubble key={i}></Bubble>)
        }

        return <div>{arr}</div>
    }
}


