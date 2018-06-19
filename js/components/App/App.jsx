import React from "react";

import "whatwg-fetch"

import "./App.scss";

import Question from "../Question/Question.jsx";
import Answers from "../Answers/Answers.jsx";

import Results from "../Results/Results.jsx";

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        question: [],
        currentQuestion: [],
        color: "white",
        counter: 0,
        score:0,
        currentClickedId: 0,
        active: true
      }
    }

    componentDidMount() {

    fetch('http://localhost:3000/questions')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          question: data,
          currentQuestion: data[this.state.counter]
        })
      })
  }


    changeQuestion = () => {

        if(this.state.counter + 1 === this.state.question.length) {
          this.props.history.push(`/results/${this.state.score}`)
        } else {
          this.setState({
            currentQuestion: this.state.question[this.state.counter + 1],
            counter: this.state.counter + 1,
            color: "white",
            active: true
          })
        }

    }

    checkAnswer = (index, event) => {
        if(this.state.active) {
          if (index === this.state.currentQuestion.correctAnswer) {

            this.setState({
              color: '#6AC44F',
              currentClickedId: index,
              active: false,
              score: this.state.score + 1
            })
          } else {

            this.setState({
              color: '#B8413D',
              currentClickedId: index,
              active: false,
            })
          }
        }
    }

    render() {
        if(this.state.question.length > 0) {
          return (
            <div className="container">
              <Question question={this.state.currentQuestion.question}/>
              <Answers score={this.state.score} currentId={this.state.currentClickedId} color={this.state.color} checkAns={this.checkAnswer} handleClick={this.changeQuestion} answer={this.state.currentQuestion.answer}/>
            </div>
          );
        } else {
          return null;
        }
    }
}
