import React from "react";

import "whatwg-fetch"

import "./Question.scss"

import Answers from "../Answers/Answers.jsx";



export default class Question extends React.Component {
    render() {
        return (
            <div className="question">
                <h1 className="que">{this.props.question}</h1>
              </div>
              )
    }

}
