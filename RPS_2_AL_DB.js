var hands = ['rock', 'paper', 'scissors']

function gethand(){
  return hands[parseInt(Math.random()*10)%3];
};
var player1 ={
    name: 'Alex',
    hand: gethand,
    score: 0
};

var player2 ={
    name: 'Daniel',
    hand: gethand,
    score: 0
};
var player3 ={
    name: 'Jessica',
    hand: gethand,
    score: 0
};

var player4 ={
    name: 'John',
    hand: gethand,
    score: 0
};

function  playround(p1, p2){
    p1hand = p1.hand();
    p2hand = p1.hand();
      console.log(p1hand + ' vs ' + p2hand);
    switch (p1hand + p2hand) {
      case 'paper' + 'rock':
        console.log(p1.name + ' Wins');
        p1.score = p1.score + 1
          break;
      case 'paper' + 'paper':
        console.log('Tie');
          break;
      case 'paper' + 'scissors':
        console.log(p2.name + ' Wins');
        p2.score = p2.score + 1
          break;
      case 'rock' + 'rock':
        console.log('Tie');
          break;
      case 'rock' + 'paper':
        console.log(p2.name + ' Wins');
        p2.score = p2.score + 1
          break;
      case 'rock' + 'scissors':
        console.log(p1.name + ' Wins');
        p1.score = p1.score + 1
          break;
      case 'scissors' + 'rock':
        console.log(p2.name + ' Wins');
        p2.score = p2.score + 1
          break;
      case 'scissors' + 'paper':
        console.log(p1.name + ' Wins');
        p1.score = p1.score + 1
          break;
      case 'scissors' + 'scissors':
        console.log('Tie');
          break;
      default:
        console.log('tie');
          break;
};
};
function playgame(p1, p2, playuntil){
  while (p1.score < playuntil && p2.score < playuntil) {

    playround(p1, p2)
  };
  if (p1.score === playuntil) {
    console.log(p1.name + ' is the Game Winner');
  };
  if (p2.score === playuntil) {
    console.log(p2.name + ' is the Game Winner');
  };
};
function playtournament(t1, t2, t3, t4, playuntil){
  playgame(t1, t2, playuntil);
  playgame(t3, t4, playuntil);
    if (t1.score === playuntil) {
      var win1 = t1
    };
    if (t2.score === playuntil) {
      var win1 = t2
    };
    if (t3.score === playuntil) {
      var win2 = t3
    };
    if (t4.score === playuntil) {
      var win2 = t4
    };
  playgame(win1, win2, playuntil + playuntil);
  if (win1.score === playuntil + playuntil) {
      console.log(win1.name + ' is World Champ');
    };
  if (win2.score === playuntil + playuntil) {
      console.log(win2.name + ' is World Champ');
    };
};
playtournament(player3, player2, player1, player4, 1)
