/** Board Game */
export class Board {
    displayUiCard(uiCard) {
        document.getElementById("playerZone").appendChild(uiCard);
    }

}

// /** Boards */
// export const playerZone = new Board();