var fs = require('fs');
var prompt = require('prompt').prompt;

module.exports = {
  init: function() {
    this.playerName = this.askPlayerName();
    this.wallet = 100;
    this.randomNum = this.getRandom();
    this.guess = this.askPlayerGuess();
    this.bet = this.takePlayerBet();
    this.result = this.checkAnswer(this.randomNum, this.guess);
    this.payout(this.result);
  },

  getRandom: function() {
    return Math.floor(Math.random() * 10) + 1;
  },

  askPlayerName: function() {
    // TODO: get sync-prompt to install
    console.log('What is your name?')
    console.log('Joel')
    return 'Joel';
  },

  askPlayerGuess: function() {
    // TODO: get sync-prompt to install    
    console.log("What is your guess?");
    var guess = Math.floor(Math.random() * 10) + 1;
    console.log(guess);
    return guess;
  },

  takePlayerBet: function() {
    // TODO: get sync-prompt to install    
    console.log('Enter your bet');
    var bet = Math.floor(Math.random() * 10) * 10;
    console.log(bet);
    return bet;
  },

  checkAnswer: function(num, guess) {
    console.log('num:', num, 'guess:', guess);
    return num === guess;
  },

  payout: function(result) {
    var _self = this;
    if (result) {
      console.log('Hey you won', _self.bet + '!');
      _self.wallet += _self.bet
      console.log('You\'ve got', _self.wallet)
    } else {
      console.log('Hey you lost', _self.bet + '!');
      _self.wallet -= _self.bet
      console.log('You\'ve got', _self.wallet)
    }
  },

  reset: function() {
    // TODO: If I get back to this and fix the install issue with sync-prompt (or use
    // something else), add a prompt to restart
  },

  writeScore: function() {
    // TODO: Write to a leaderboard file
  }
}