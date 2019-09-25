export default class ScoreKeeper {
    createScoreKeeper() {
        let scoreKeeperDiv = document.createElement('div');
        scoreKeeperDiv.classList.add('scorekeeper');
        scoreKeeperDiv.innerHTML = '0';
        return scoreKeeperDiv;
    }

    addToScore(linesCleared) {
        let scoreKeeper = document.querySelector('.scorekeeper');
        let score = Number(scoreKeeper.innerHTML);
        if (linesCleared === 1) {
            score += 100; 
        } else if (linesCleared === 2) {
            score += 225;
        } else if (linesCleared === 3) {
            score += 350;
        } else if (linesCleared === 4) {
            score += 500;
        }
        scoreKeeper.innerHTML = score;
    }

    resetScore() {
        let scoreKeeper = document.querySelector('.scorekeeper');
        scoreKeeper.innerHTML = 0;
    }

    getScore() {
        let scoreKeeper = document.querySelector('.scorekeeper');
        return scoreKeeper.innerHTML;
    }
}