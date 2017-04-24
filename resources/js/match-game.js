var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var cv=[];
  for (i=1; i<9;i++){
    cv.push(i);
    cv.push(i);
  }
  /*console.log(cv);*/
  var rcv=[];
  while (cv.length > 0) {
    var rand=Math.floor(Math.random()*cv.length);
    rcv.push(cv[rand]);
    cv.splice(rand, 1);
  }
  /*console.log(rcv);*/
  return rcv;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
