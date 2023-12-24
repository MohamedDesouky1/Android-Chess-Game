import React from 'react';
import { View, Text } from 'react-native';

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
    <View>
      {piece && <Text style={{ fontSize: 20 }}>{pieceMapping[piece]}</Text>}
    </View>
  );
};

export default ChessPiece;
