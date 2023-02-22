import { fetchJSON } from "./functions.js";

/** CLASSES */
/**
 * Game card
 */
class Card {
    constructor(value, image) {
        this.value = value;
        this.image = image;
    }
}

/** Player : user and COMP */
class Player {

    playCard(e) { // Among the available ones
        // let usedCard = e.currentTarget.value;
        // console.log(e.currentTarget.firstElementChild);

        // `<div class="h-100 w-50 p-3 card" style="cursor:pointer" id=${card.value}Card>
        //     <img src=${card.image} class="card-img-top" alt=${card.value}>
        //         <div class="card-body">
        //             <h5 class="text-center card-title">${card.value.toUpperCase()}</h5>
        //         </div>
        // </div>`;

        let playedCard = e.currentTarget.querySelector(".card-body").innerText;

        document.getElementById("playerCard").innerHTML = `
        <div class="h-100 w-50 p-3 card" style="width:18rem;">
            <img src="/assets/images/${playedCard}.png" class="card-img-top" alt="${playedCard}">
            <div class="card-body">
                <h5 class="text-center card-title">${playedCard.toUpperCase()}</h5>
            </div>
        </div>
        `;
    }

    randomCard() {
        const possibilities = [rockCard.value, paperCard.value, scissorCard.value];

        const min = 0
        const max = possibilities.length;
        let index = Math.floor(Math.random() * (max - min) + min);

        let randomChoice = possibilities[index];

        document.getElementById("computerCard").innerHTML = `
        <div class="h-100 w-50 p-3 card" style="width:18rem;">
            <img src="/assets/images/${randomChoice}.png" class="card-img-top" alt="${randomChoice}">
            <div class="card-body">
                <h5 class="text-center card-title">${randomChoice.toUpperCase()}</h5>
            </div>
        </div>
        `;
    }
}

// 2 players : USER and COMPUTER
// User play selected card
// Computer play random card
const player = new Player();
const computer = new Player();

/** Board Game */
class Board {
    displayCard(card) { // Create a card and display it to user

        const uiCard = document.createElement("div");
        uiCard.setAttribute("class", "col");
        uiCard.innerHTML = `
        <div class="h-100 w-50 p-3 card" style="cursor:pointer" id=${card.value}Card>
            <img src=${card.image} class="card-img-top" alt=${card.value}>
                <div class="card-body">
                    <h5 class="text-center card-title">${card.value.toUpperCase()}</h5>
                </div>
        </div>`;

        uiCard.addEventListener("click", player.playCard);
        uiCard.addEventListener("click", computer.randomCard);

        document.getElementById("playerZone").appendChild(uiCard);

        
    }


}

/** OBJECT CONSTRUCTION */

/** Cards */
// Fetch all values for cards 
const cardData = await fetchJSON("../data/cards.json");

const { rockData, paperData, scissorData } = cardData;

export const rockCard = new Card(rockData.value, rockData.image);
export const paperCard = new Card(paperData.value, paperData.image);
export const scissorCard = new Card(scissorData.value, scissorData.image);

/** Boards */
const playerZone = new Board();
playerZone.displayCard(rockCard);
playerZone.displayCard(paperCard);
playerZone.displayCard(scissorCard);

