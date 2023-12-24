import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ChessPiece from './components/ChessPiece';
import ChessBoard from './components/ChessBoard';

const ChessGame = () => {
  
  const [board, setBoard] = useState([
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ]);

  
  const handleMove = (startRow, startCol, endRow, endCol) => {
   
    if (isValidMove(startRow, startCol, endRow, endCol)) {
    
      const newBoard = [...board];
      newBoard[endRow][endCol] = newBoard[startRow][startCol];
      newBoard[startRow][startCol] = null;
      setBoard(newBoard);

    } else {
      
      console.log('Invalid move');
    }
  };
  
  const isValidMove = (startRow, startCol, endRow, endCol) => {
   
    return true;
  };

 
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

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chess Game Screen</Text>
      {}
      <ChessGame />
      <Button
        title="End Game"
        onPress={() => navigation.navigate('ResultScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default GameScreen;
