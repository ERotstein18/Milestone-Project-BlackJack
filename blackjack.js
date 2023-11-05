
const allDecks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const suits = ['♠', '♥', '♣', '♦'];
const numberOfPlayers = 2;
playerStand(1);
playerStand(2);


//to shuffle the deck
function shuffleDeck(allDecks) {
    for (let i = allDecks.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [allDecks[i], allDecks[j] = [allDecks[j], allDecks[i]]];
    }
}

//to draw a card from the deck 
function drawCard(allDecks) {
    return allDecks.pop();
}

//calculate the hand's score
function calculateScore(hand) {
    let score = 0;
    let checkAce = 0;

    for (const card) {
        if(card === 'A') {
            checkAce++;
            score += 11;
} else if (card === 'K' || card === 'Q' || card === 'J') {
    score += 10;
} else {
    score += parseInt(card);
}
}
while (score > 21 && checkAce > 0) {
    score -= 10;
    checkAce--;
}
return score;
}

//
shuffleDeck(allDecks);

const dealerHand = [drawCard(allDecks)];
const playerHands = [[drawCard(allDecks), drawCard(allDecks)]];

//player's hit action
function playerHands(playerIndex) {
    const card = drawCard(allDecks);
    playerHands[playerIndex].push(card);
    const score = calculateScore(playerHands[playerIndex]);

    if (score > 21) {
        console.log('Player ${playerIndex + 1} busted!');
    }
    else if (score === 21) {
        console.log('Player ${playerIndex + 1} got a Blackjack!');
    }
    else {
        console.log('Player${playerIndex + 1} drew: ${card}');
        console.log("Player${playerIndex + 1}'s score:${score}");
    }
}
playerHit(0);

document.getElementById('dealer').addEventListener('click', startGame);
document.getElementById('playerHit').addEventListener('click', () => playerHands(1));
document.getElementById('playerStand').addEventListener('click', () => playerStand(1));
document.getElementById('playerHit').addEventListener('click', () => playerHit(2));
document.getElementById('playerStand').addEventListener('click', () => playerStand(2))

function startGame() {
    
}

//Player clicks the HIT button
function playerHit() {

}

let currentPlayer = 1;

function playerStand(player) {
    if (player === currentPlayer) {
        currentPlayer++;

        if (currentPlayer > numberOfPlayers) {
            dealerPlay();
        } else {
            console.log("Player ${currentPlayer}'s turn");
        }
    }
}

function dealerPlay() {
    
}
//Calculates the dealer and players score
function Score(hand) {
    var total = 0;
    var ace = false;
    var cardsValue = 0;
    for (i = 0; i < hand.length; i++){
        //if the card is Ace
        if (hand[i].cardValue == 1) {
            ace = true;
            cardsValue += 1;
        }
        else if (hand[i].cardValue > 10)
            cardsValue += 10;
        else
            cardsValue += hand[i].cardValue;
        total = cardsValue;
    }
    if (ace && total <= 11)
        total += 10;
    return total;
}