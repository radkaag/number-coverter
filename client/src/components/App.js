import React from 'react';
import propTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { convertInput, resetConvertion } from '../AC/convertion';
import { clearInput, updateInput } from '../AC/input';
import { PHONE_BUTTONS } from '../const/phone';
import Button from './Button';

const App = props => {
  const {
    clearInput,
    convertInput,
    convertion,
    input,
    updateInput,
    resetConvertion
  } = props;

  const handleClearInput = () => {
    clearInput();
    resetConvertion();
  };

  const handleConvertInput = () => {
    convertInput(input);
  };

  const renderPhoneButtons = () => {
    return PHONE_BUTTONS.map(button => (
      <Button
        disabled={button.disabled}
        key={uuid()}
        subtitle={button.subtitle}
        title={button.title}
        updateInput={updateInput}
        value={button.value}
      />
    ));
  };

  return [
    <div className="container container--app">
      <p className="intro-text">Try to type of these words:</p>
      <p className="intro-text">
        eye, hair, eyebrow, lungs, mouth, skull, stomach, tendon, sacrum,
        throat, brain, blood, kidney, tooth, elbow, knee, bladder, belly, ankle,
        adenoids, lip
      </p>
      <input
        className="input"
        placeholder="Use dial to enter a number"
        type="text"
        value={input}
      />
      <div className="container container--buttons">
        <button className="button" onClick={handleClearInput}>
          Clear
        </button>
        <button className="button" onClick={handleConvertInput}>
          Convert
        </button>
      </div>
      <div className="container container--dial">{renderPhoneButtons()}</div>
      <div className="output">{convertion}</div>
    </div>
  ];
};

App.propTypes = {
  clearInput: propTypes.func.isRequired,
  convertInput: propTypes.func.isRequired,
  convertion: propTypes.string.isRequired,
  input: propTypes.string.isRequired,
  updateInput: propTypes.func.isRequired,
  resetConvertion: propTypes.func.isRequired
};

export default connect(
  ({ input, convertion }) => ({
    convertion,
    input
  }),
  {
    clearInput,
    convertInput,
    updateInput,
    resetConvertion
  }
)(App);
