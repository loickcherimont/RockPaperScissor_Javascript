export class GameResults {
    // Method that verify if user won/lose/did a null
    displayResults() {
        // check if user won/lose/did a null and display it
        const playerCardValue = document.getElementById("playerCardValue").innerHTML;
        const computerCardValue = document.getElementById("computerCardValue").innerHTML;
        const resultPanel = document.getElementById("resultPanel");
        const alerts = resultPanel.querySelectorAll(".alert");

        alerts.forEach(alert => alert.classList.add("d-none"));

        if(computerCardValue === playerCardValue) {
            document.getElementById("alertDraw").classList.remove("d-none");
        }

        if(
            (playerCardValue === "PAPER" && computerCardValue === "SCISSOR")
            ||
            (playerCardValue === "ROCK" && computerCardValue === "PAPER")
            ||
            (playerCardValue === "SCISSOR" && computerCardValue === "ROCK")
            ) {
                document.getElementById("alertLoss").classList.remove("d-none");
        }

        else if(
            (playerCardValue === "PAPER" && computerCardValue === "ROCK")
            ||
            (playerCardValue === "ROCK" && computerCardValue === "SCISSOR")
            ||
            (playerCardValue === "SCISSOR" && computerCardValue === "PAPER")
        ) {
            document.getElementById("alertVictory").classList.remove("d-none");
        }

        // Paper -> Rock -> Scissor -> Paper -> ...
    }
}
