import React from 'react';
import Button from './Button';

const Calculator = () => (
  <div className="container">
    <Button />
    <div className="row">
      <span>AC</span>
      <span>+/-</span>
      <span>%</span>
      <span>÷</span>
    </div>
    <div className="row">
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>*</span>
    </div>
    <div className="row">
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>-</span>
    </div>
    <div className="row">
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>+</span>
    </div>
    <div className="row">
      <span>0</span>
      <span>.</span>
      <span>=</span>
    </div>
  </div>
);

export default Calculator;
