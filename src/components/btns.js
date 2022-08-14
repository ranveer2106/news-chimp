// import React, { Component } from 'react';
import React from 'react';
import "./total.css";
const Btns = () => {

    prevClick = () => {
        // console.log({this.this.state.})
    }
    nextClick = () => {
        console.log("next page open")
    }

    return (
        <div className="btns">
            <button type="button" className="btn btn-dark" onClick={this.prevClick}> &larr; previous page </button>
            <button type="button" className="btn btn-dark" onClick={this.nextClick}>Next page &rarr;</button>
        </div>
    )
}

export default Btns