// src/gameManager.js
import { cardsData } from './cardsData.js';
import { YAKU } from './yakuDefinitions.js';
import { chooseCardToPlay, decideKoikoiOrStop } from './aiLogic.js';

export class GameManager {
  constructor() {
    this.deck = [];
    this.fieldCards = [];
    this.playerHand = [];
    this.opponentHand = [];
    this.playerCaptured = [];
    this.opponentCaptured = [];
    // etc.
  }

  initNewGame()  {
    // 1) Build the deck
    let idCounter = 0;
    for (let month = 1; month <= 12; month++) {
      for (let i = 0; i < 4; i++) {
        this.deck.push({
          id: idCounter++,
          month: month,
          // We'll add more properties (e.g., type, name, image) later
        });
      }
    },
  shuffleDeck() {
          for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
		  }
    },
dealCards() {
      // We'll draw 8 cards for the player, 8 for the opponent, 8 to the field
      // That's 24 cards total, so the deck will have 24 left after dealing.

      // 1) Player gets 8
      for (let i = 0; i < 8; i++) {
        this.playerHand.push(this.deck.pop());
      }
      // 2) Opponent gets 8
      for (let i = 0; i < 8; i++) {
        this.opponentHand.push(this.deck.pop());
      }
      // 3) Field gets 8
      for (let i = 0; i < 8; i++) {
        this.fieldCards.push(this.deck.pop());
      }
    },
	
	
	
  playerTurn(cardIndex) {
    // 1) Player picks a card from hand to play
    // 2) Attempt to capture from field
    // 3) Draw from deck, attempt to capture again
    // 4) Check for yaku => prompt koikoi or stop
  }

  aiTurn() {
    // 1) AI picks a card from its hand
    // 2) Attempt capture
    // 3) Draw from deck, attempt capture
    // 4) Check for yaku => decide koikoi or stop
  }

  checkYaku(capturedCards) {
    const formedYaku = [];
    for (const yaku of YAKU) {
      if (yaku.requirements(capturedCards)) {
        formedYaku.push(yaku);
      }
    }
    return formedYaku;
  }

  // ... Additional methods for scoring, Koikoi logic, etc.
}
