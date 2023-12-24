import React from 'react';
import { View, Text } from 'react-native';
import ChessPiece from './ChessPiece';

const ChessBoard = ({ board, handleMove }) => {
  return (
    <View>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'row' }}>
          {row.map((piece, colIndex) => (
            <View
              key={colIndex}
              onTouchEnd={() => handleMove(0, 0, rowIndex, colIndex)}
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                borderColor: '#ccc',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ChessPiece piece={piece} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default ChessBoard;
