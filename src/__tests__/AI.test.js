import AIPlay from "../scripts/AI";
import gameboard from "../scripts/gameboard";

test('AI Play Test - EASY', () => {
  const game = gameboard();
  expect(AIPlay('easy', game)).toEqual(expect.stringMatching(/([0-9]{2})/));
});

test('AI Play Test - MED - No Hits', () => {
  const game = gameboard();
  const play = AIPlay('med', game);
  expect(play).toEqual(expect.stringMatching(/([0-9]{2})/));
});

test('AI Play Test - MED - One Hit', () => {
  const game = gameboard();
  game.placeShip('A', '00', false);
  game.receiveAttack('20');
  const play = AIPlay('med', game);
  expect(play).toEqual(expect.stringMatching(/21|10|30/));
});

test('AI Play Test - MED - Two hits', () => {
  const game = gameboard();
  game.placeShip('A', '00', false);
  game.receiveAttack('20');
  game.receiveAttack('30');
  const play = AIPlay('med', game);
  expect(play).toEqual(expect.stringMatching(/10|40/));
});

test('AI Play Test - MED - Two hits plus boundaries', () => {
  const game = gameboard();
  game.placeShip('D1', '00', false);
  game.receiveAttack('00');
  game.receiveAttack('20');
  game.receiveAttack('30');
  const play = AIPlay('med', game);
  expect(play).toBe('10');
});


//function AIPlay(AIMode, enemyBoard) 