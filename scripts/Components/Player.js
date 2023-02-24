import { paperCard, rockCard, scissorCard } from "./Card.js";

/** Player : user and COMP */
export class Player {

    // playCard(e) { // Among the available ones

    //     let playedCard = e.currentTarget.querySelector(".card-body").innerText;

    //     document.getElementById("playerCard").innerHTML = `
    //     <div class="h-100 w-50 p-3 card" style="width:18rem;">
    //         <img src="/assets/images/${playedCard}.png" class="card-img-top" alt="${playedCard}">
    //         <div class="card-body">
    //             <h5 id="userCardValue" class="text-center card-title">${playedCard.toUpperCase()}</h5>
    //         </div>
    //     </div>
    //     `;
    // }

    randomPlay() {
        const possibilities = [rockCard.value, paperCard.value, scissorCard.value];

        const min = 0
        const max = possibilities.length;
        let index = Math.floor(Math.random() * (max - min) + min);

        let randomChoice = possibilities[index];

        document.getElementById("computerCard").innerHTML = `
        <div class="h-100 w-50 p-3 card" style="width:18rem;">
            <img src="/assets/images/${randomChoice}.png" class="card-img-top" alt="${randomChoice}">
            <div class="card-body">
                <h5 id="computerCardValue" class="text-center card-title">${randomChoice.toUpperCase()}</h5>
            </div>
        </div>
        `;
    }
}
