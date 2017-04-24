$(document).ready(function() {
  var cardValues = MatchGame.generateCardValues();
  var $game = $('#game');

  MatchGame.renderCards(cardValues, $game);
});


var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function() {
  var cv = [];
  for (i = 1; i < 9; i++) {
    cv.push(i);
    cv.push(i);
  }
  /*console.log(cv);*/
  var rcv = [];
  while (cv.length > 0) {
    var rand = Math.floor(Math.random() * cv.length);
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
  $game.empty();

  $game.data("flipped", []);

  var cardColors = [];
  cardColors.push('hsl(25, 85%, 65%)');
  cardColors.push('hsl(55, 85%, 65%)');
  cardColors.push('hsl(90, 85%, 65%)');
  cardColors.push('hsl(160, 85%, 65%)');
  cardColors.push('hsl(220, 85%, 65%)');
  cardColors.push('hsl(265, 85%, 65%)');
  cardColors.push('hsl(310, 85%, 65%)');
  cardColors.push('hsl(360, 85%, 65%)');

  for (i = 0; i < cardValues.length; i++) {
    var $thisCard = $('<div class="col-xs-3 card"></div>');
    $thisCard.data("value", cardValues[i]);
    $thisCard.data("flipped", false);
    $thisCard.data("color", cardColors[cardValues[i] - 1]);
    $game.append($thisCard);
  }

  $('.card').on('click', function() {
    MatchGame.flipCard($(this), $game);
  });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if ($card.data("flipped")) {
    return;
  } else {
    $card.css("background-color", $card.data("color"));
    $card.text($card.data("value"));

    $card.data("flipped", true);
    $game.data("flipped").push($card);

    if ($game.data("flipped").length > 1) {
      var $card1 = $game.data("flipped")[0];
      var $card2 = $game.data("flipped")[1];
      if ($card1.data("value") === $card2.data("value")) {
        $card1.css('color', 'rgb(204,204,204)');
        $card1.css('background-color', 'rgb(153,153,153)');
        $card2.css('color', 'rgb(204,204,204)');
        $card2.css('background-color', 'rgb(153,153,153)');
      } else {
        setTimeout(function() {
          $card1.css('background-color', 'rgb(32,64,86)');
          $card1.text('');
          $card1.data("flipped", false);

          $card2.css('background-color', 'rgb(32,64,86)');
          $card2.text('');
          $card2.data("flipped", false);
        }, 500);

      }
      $game.data("flipped", []);
    }

  }


};
