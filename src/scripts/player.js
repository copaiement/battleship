import AIPlay from './AI';

const player = () => {
  function computerTurn(AIMode, enemyBoard) {
    // get AI Play
    enemyBoard.receiveAttack(AIPlay(AIMode, enemyBoard));
  }

  function playerTurn(move, enemyBoard) {
    enemyBoard.receiveAttack(move);
  }

  return {
    computerTurn,
    playerTurn,
  };
};

export default player;
