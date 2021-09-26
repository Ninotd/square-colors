import React from 'react';
import Square from './square';

const SquareList = (props) => {
  return (
    <div className="square-wrapper">
      {props.squares.map(square => <Square key={square.id} colorcode={square.colorcode}/>)}
    </div>
  );
};

export default SquareList;
