import React from 'react';

const ChessPiece = ({ piece }) => {

  const pieceMapping = {
    'R': '♖',
    'N': '♘',
    'B': '♗',
    'Q': '♕',
    'K': '♔',
    'P': '♙',
    'r': '♜',
    'n': '♞',
    'b': '♝',
    'q': '♛',
    'k': '♚',
    'p': '♟',
  };

  return (
    <div style={{ fontSize: '20px' }}>
      {piece && <span>{pieceMapping[piece]}</span>}
    </div>
  );
};

export default ChessPiece;