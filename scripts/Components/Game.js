// import { computer, player } from "./Components/Player.js";
// import { results } from "./GameResults.js";

import { Board } from "./Board.js";
import { paperCard, rockCard, scissorCard } from "./Card.js";

export class Game {

    static() {
        const playerZone = new Board();
        playerZone.displayUiCard(rockCard.getUiCard);
        playerZone.displayUiCard(paperCard.getUiCard);
        playerZone.displayUiCard(scissorCard.getUiCard);
    }
}
