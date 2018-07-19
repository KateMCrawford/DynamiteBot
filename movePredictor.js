class MovePredictor {
	
	constructor() {
		this.possibleMoves = ['R', 'P', 'S', 'W', 'D'];
		this.dynamiteUsed = 0;
		this.dynamiteLimit = 1000;

		this.probGiven = [[0.3, 0.3, 0.3, 0.1, 0], [0.3, 0.3, 0.3, 0.1, 0], [0.3, 0.3, 0.3, 0.1, 0], [0.3, 0.3, 0.3, 0.1, 0], [0.3, 0.3, 0.3, 0.1, 0]];
		this.probGivenOverNumber = [0, 0, 0, 0, 0];
	}
		
		updateProbability(gamestate) {
			given = gamestate[gamestate.length() - 1][0];
			response = gamestate[gamestate.length()][1];

			givenIndex = this.possibleMoves.indexOf(given);
			responseIndex = this.possibleMoves.indexOf(response);

			updateGivenValues = this.probGiven[givenIndex];

			for (i = 0; i <= 5; i++)
			{
				if (i = responseIndex){
					updateGivenValues[i] = ((updateGivenValues[i] * this.probGivenOverNumber[givenIndex]) + 1) / (this.probGivenOverNumber[givenIndex] + 1);
				} else {
					updateGivenValues[i] = ((updateGivenValues[i] * this.probGivenOverNumber[givenIndex])) / (this.probGivenOverNumber[givenIndex] + 1);
				}
			}

			this.probGivenOverNumber[givenIndex]++;
	}
	}