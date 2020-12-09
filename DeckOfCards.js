let deck = [];
let player;
function cardDestribution() {
    let suits = ["Clubs", "Dimonds", "Heart", "Spades"];
    let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    // now create a 2 dim array with each individual array representing a card.. 
    var value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < rank.length; j++) {
            deck.push(suits[i] + rank[j]);
        }
    }
    console.log(deck)
    console.log(" ");
    console.log(" ")

// shuffling deck
for (let k = 0; k < deck.length; k++) {
    
         // Generate random number  
        let l = Math.floor(Math.random() * 52);

        let temp = deck[k];
        deck[k] = deck[l];
        deck[l] = temp;
    }
    console.log(deck);
    console.log(" ");
    console.log(" ");

//  distribution of card to 4 players
    player = deck.slice(0, 9);
    console.log("Player1 has following cards :\n" + player);
    player = deck.slice(9, 18);
    console.log("\nPlayer2  has following cards :\n" + player);
    player = deck.slice(18, 27);
    console.log("\nPlayer3  has following cards :\n" + player);
    player = deck.slice(18, 36);
    console.log("\nPlayer4  has following cards :\n" + player);
}

cardDestribution();
