import React from 'react';

import './Home.scss';

import {
    Link,
} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <div className="container__home">
            <Link to="/quiz">
              <button className="button__home">Start</button>
            </Link>
          </div>
        )
    }
}
