/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Title } from './Title/Title';
import { OptionList } from './OptionList/OptionList';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Title title="Please leave feedback" />

        <OptionList
          options={Object.keys(this.state)}
          onClick={this.addFeedback}
        />

        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>
    );
  }
}

// export class App extends Component {
//   state = { isOpen: false };

//   show = () => this.setState({ isOpen: true });

//   hide = () => this.setState({ isOpen: false });

//   render() {
//     const { isOpen } = this.state;
//     const { children } = this.props;

//     return (
//       <>
//         <button onClick={this.show}>Show</button>
//         <button onClick={this.hide}>Hide</button>
//         {isOpen && children}
//       </>
//     );
//   }
// }
