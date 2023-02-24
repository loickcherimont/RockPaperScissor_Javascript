import { fetchJSON } from "../functions/functions.js";
import { GameResults } from "./GameResults.js";
import { Player } from "./Player.js";

const computer = new Player();
const results = new GameResults();

/**
 * Game card
 */
export class Card {
    constructor(value, image) {
        this.value = value;
        this.image = image;
    }

    // moveToBattleZone(e) {
    //     document.getElementById("playerCard").innerHTML = this.getUiCard;
    // }

    get getUiCard() {
        // const playerZone = new Board();
        const uiCardContainer = document.createElement("div");
        uiCardContainer.setAttribute("class", "col");
        uiCardContainer.innerHTML = `
            <div class="h-100 w-50 p-3 card" style="cursor:pointer" id=${this.value}Card>
                <img src=${this.image} class="card-img-top" alt=${this.value}>
                    <div class="card-body">
                        <h5 id="playerCardValue" class="text-center card-title">${this.value.toUpperCase()}</h5>
                    </div>
            </div>`;

        const uiCard = uiCardContainer.firstElementChild;

        uiCard.addEventListener("click", playCard);

        return uiCardContainer;
    }

    // playCard() { // Among the available ones

    //     document.getElementById("playerCard").innerHTML = `
    //     <div class="h-100 w-50 p-3 card" style="width:18rem;">
    //         <img src="/assets/images/${this.value}.png" class="card-img-top" alt="${this.value}">
    //         <div class="card-body">
    //             <h5 id="userCardValue" class="text-center card-title">${this.value.toUpperCase()}</h5>
    //         </div>
    //     </div>
    //     `;
    // }

}


/** Cards */
// Fetch all values for cards 
const data = await fetchJSON("../data/cards.json");

const { rockData, paperData, scissorData } = data;

export const rockCard = new Card(rockData.value, rockData.image);
export const paperCard = new Card(paperData.value, paperData.image);
export const scissorCard = new Card(scissorData.value, scissorData.image);

/** Display in battle zone 
 * the card played by user 
 */
function playCard(e) {
    const selectedCard = e.currentTarget.cloneNode(true);
    const playerCard = document.getElementById("playerCard");

    playerCard.firstElementChild.remove();
    playerCard.appendChild(selectedCard);
    computer.randomPlay();
    results.displayResults();
}