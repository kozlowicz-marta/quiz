import React from "react";

import './Results.scss';

import {
    Link,
} from 'react-router-dom';

import Answers from "../Answers/Answers.jsx";


export default class Results extends React.Component {
    render() {
        return (
          <div>
          <div className="containerBox">
            <div className="resultScore">Zdobyte punkty {this.props.score}</div>
            <Link to="/quiz">
              <div className="resultTry">Spróbuj jeszcze raz</div>
            </Link>
            </div>
            </div>
        );
    }
}
