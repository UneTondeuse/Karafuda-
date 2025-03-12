// main.js (continuing...)
import { createApp } = Vue;

import { GameManager } from './gameManager.js';

const game = new GameManager();

// 2) Initialize a new game (creates deck, deals cards, etc.)
game.initNewGame();
game.shuffleDeck();
    game.dealCards();
	
/*
 this.initDeck();
    this.shuffleDeck();
    this.dealCards();
*/

createApp({
  data() {
    return {
      message: 'Hello from Koikoi!',
    deck: game.deck,
    fieldCards: game.fieldCards,
    playerHand: game.playerHand,
    opponentHand: game.opponentHand,
    playerCaptured: game.playerCaptured,
    opponentCaptured: game.opponentCaptured,
    };
  },
  
  created() {
   
    console.log('Player Hand:', this.playerHand);
    console.log('Opponent Hand:', this.opponentHand);
    console.log('Field Cards:', this.fieldCards);
    console.log('Remaining Deck:', this.deck.length, 'cards');
  },
  
  methods: {
    
    
    
  },
  
}).mount('#app');
