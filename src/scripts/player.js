import AIPlay from './AI';

const player = () => {
  function computerTurn(AIMode, enemyBoard) {
    // get AI Play
    return enemyBoard.receiveAttack(AIPlay(AIMode, enemyBoard));
  }

  function playerTurn(move, enemyBoard) {
    return enemyBoard.receiveAttack(move);
  }

  return {
    computerTurn,
    playerTurn,
  };
};

export default player;
