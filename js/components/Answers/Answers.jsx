import React from "react";

import "whatwg-fetch"

import "./Answers.scss"

import Question from "../Question/Question.jsx";


export default class Answers extends React.Component {


    render() {
        return (
            <div className="answers">
                {this.props.answer.map((item, index) => {
                  return (
                    <h1
                      key={index}
                      data-id={index}
                      className="ans"
                      style={{
                        background: this.props.currentId === index ? this.props.color : 'white'
                      }}
                      onClick={(event) => this.props.checkAns(index, event)}
                    >
                      {item}
                    </h1>
                  )
                })}
                  <button className="next__Btn"  onClick={this.props.handleClick}>Next</button>
                  <div className="score">Wynik: {this.props.score}</div>
            </div>

        );
    }
  }
