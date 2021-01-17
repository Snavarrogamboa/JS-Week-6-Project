//Making a Card class
class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}
//Making a Deck class
class Deck {

    constructor(name) {
        this.suits = ['spades', 'diamonds', 'clubs', 'hearts'];
        this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.name = name;
        this.cards = [];

        //adding the 52 cards, looking back i didnt really need to make a card deck, could have just used numbers 1 - 10 without a suit
        for (let i = 0; i < this.suits.length; i++) {
            for (let y = 0; y < this.values.length; y++) {
                this.cards.push(new Card(this.values[y], this.suits[i]))
            }
        }
      }

      //shuffling the deck, had to research how to do this
    shuffle() {
        let shuffledDeck = [];
        while (this.cards.length) {
            let randomIndex = Math.floor(Math.random() * this.cards.length); //math.floor ensures outcome is whole number
            shuffledDeck.push(this.cards[randomIndex]);
            this.cards.splice(randomIndex, 1);
        }
        this.cards = shuffledDeck;
    }

    getCards(num) {
        let cards = [];
        for (let i = 0; i < num; i++) {
            cards.push(this.cards.pop()); //.pop removes the last element 
        }
        return cards;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }

    playCard() {
        return this.hand.pop();
    }

 
    addCards(cards) {
      this.hand.push(...cards); //thanks to my classmates for helping on this part, this expands the cards(?) 
    }

    addPoint() {
        this.points++;
    }

}

let deck = new Deck();

deck.shuffle();


let player1 = new Player(prompt('enter player 1 name')); //adding name to Player 
let player2 = new Player('Computer'); //Player 2 is always the computer for now

player1.addCards(deck.getCards(26));
player2.addCards(deck.getCards(26));



//starting the game
function startGame() {
    let p1card = player1.playCard();
    let p2card = player2.playCard();
    if (p1card.value > p2card.value) {
        console.log(`${player1.name} wins this round.`) 
        player1.addPoint();
    } else if (p2card.value > p1card.value) {
        console.log('Computer wins this round')
        player2.addPoint();
    } else {  
      console.log('Tie!');
    }
}

for (let i = 0; i < 26; i++) {
  startGame();
}

console.log(player1.name + "'s points: " + player1.points);
console.log(player2.name + "'s points: " + player2.points);

if (player1.points > player2.points) {
    alert(`${player1.name} wins!!!`)
} else { alert(`${player1.name} lost :(`)};

//this was a really difficult project for me, highlighted a lot of areas I need to work on.
// Thanks to my classmates for guiding me along the whole way, only way this was possible.
//Unfortunately I have  limited HTML knowledge so I could only add one button, wanted to ..
//..make a feature where every time you click the button it would show one round, didnt really have time to figure that out.
//Addin CSS would be cool for visuals in the future
