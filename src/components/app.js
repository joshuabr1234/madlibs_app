<<<<<<< HEAD
import React, {Component} from 'react';
=======
import React, { Component } from 'react';
import MadlibForm from './madlib_form';
>>>>>>> d09463b6576a26fd36e7bfeaba368964c2e4c452

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="app">
        <h1>DevCamp React Starter</h1>
        <h2>React + React Router</h2>
=======
      <div>
        <div className="backgroundSkew">
          <div className="madlib-heading">
            <h1>Bottega Mad Libs</h1>
            <div className="madlib-subheading">
              Fill out the fields below and click the generate button <br/> to see the Mad Lib story.
            </div>
          </div>
          <MadlibForm />
        </div>
>>>>>>> d09463b6576a26fd36e7bfeaba368964c2e4c452
      </div>
    );
  }
}
