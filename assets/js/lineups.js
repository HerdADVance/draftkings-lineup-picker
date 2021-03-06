function buildLineups(n){
	for(var i=0; i<n; i++){
		lineups.push(newLineup())
	}
	printLineups();
}

function newLineup(){
	newLineupId ++;

	return{
		id: newLineupId,
	 	roster: {
	 		QB: null,
			RB1: null,
			RB2: null,
			WR1: null,
			WR2: null,
			WR3: null,
			TE: null,
			FLEX: null,
			DST: null
	 	}
	}
}

function printLineups(){
	$('.lineups-wrap').empty();
	for(var i=0; i<lineups.length; i++){
		printLineup(lineups[i], i);
	}
}

function printLineup(lineup, numberLineup){
	var cost = findCost(lineup.roster);
	var costRemaining = 50000 - cost;

	if(cost > 50000){ var costStatus = "cost-over"}
		else{ var costStatus = "cost-under" }

	var output = '<table class="lineup ' + costStatus + '" id="' + lineup.id + '">';
	output += '<tr><th colspan="4">Lineup #' + (numberLineup + 1) + '</th></tr>'; 
	
	for(var key in lineup.roster){
		output += '<tr data-pos="' + key + '"';
		if(lineup.roster[key]) output += ' data-pid="' + lineup.roster[key].id + '"';
		output += '><td>' + key + '</td><td>';
		if(lineup.roster[key]) output += lineup.roster[key].Name;
		output += '</td><td>';
		if(lineup.roster[key]) output += lineup.roster[key].Salary;
		output += '</td><td>';
		if(lineup.roster[key]) output += 'X';
			else output += '+'
		output += '</td></tr>';
	}
	
	output += '<tr class="total"><td colspan="2">Remaining: <span>' + costRemaining + '</span></td><td colspan="2">' + cost + '</td></tr>';
	output += '</table>';
	
	$('.lineups-wrap').append(output);
}

function findCost(roster){
	var cost = 0;
	for(var key in roster){
		if(roster[key]){
			cost += roster[key].Salary;
		}
	}
	return cost;
}



/* ADDING TO LINEUPS */
function addPlayerToLineups(n, id){
	var player = players[id];
	var position = player.Position;
	var positionAvailable = '';
	var newSelectedPlayer = {}

	var alreadySelected = isAlreadySelected(player.id); 

	if(!alreadySelected){
		newSelectedPlayer = { 
			id: player.id,
			name: player.Name,
			lineupsIn: [],
			correlatedWith: [] 
		}
	}

	var lineupsAddedTo = [];

	var i = -1;
	var numAddedTo = 0;

	while(numAddedTo < n && i < lineups.length - 1){

		i++;

		if(alreadySelected){
			var alreadyInLineup = isAlreadyInLineup(player.id, lineups[i]);
			if(alreadyInLineup){
				continue;
			}
		}

		if(position === 'RB' || position === 'WR'){
			switch(position){
				case 'RB':
					if(lineups[i].roster.RB1){
						if(lineups[i].roster.RB2){
							if(lineups[i].roster.FLEX){
								continue;
							}
							else positionAvailable = 'FLEX'
						}
						else positionAvailable = 'RB2';
					}
					else positionAvailable = 'RB1';
					break;
				case 'WR':
					if(lineups[i].roster.WR1){
						if(lineups[i].roster.WR2){
							if(lineups[i].roster.WR3){
								if(lineups[i].roster.FLEX){
									continue;
								}
								else positionAvailable = 'FLEX';
							}
							else positionAvailable = 'WR3';
						}
						else positionAvailable = 'WR2';
					}
					else positionAvailable = 'WR1';
					break;
			}
			lineups[i].roster[positionAvailable] = player;
		}
		else if(position == 'TE'){
			if(lineups[i].roster.TE){
				if(lineups[i].roster.FLEX){
					continue;		
				}
				else positionAvailable = 'FLEX';
			}
			else positionAvailable = 'TE';
		}
		else{
			switch(position){
				case 'QB':
					if(lineups[i].roster.QB){
						continue;		
					}
					else positionAvailable = 'QB';
					break;
				case 'DST':
					if(lineups[i].roster.DST){
						continue;		
					}
					else positionAvailable = 'DST';
					break;
			}
		}

		lineups[i].roster[positionAvailable] = player;
		
		lineupsAddedTo.push(i);
		
		numAddedTo ++;
	
	}

	displayLatestUpdate(player.Name, numAddedTo, true);

	if (numAddedTo > 0){
		if(!alreadySelected){
			newSelectedPlayer.lineupsIn = lineupsAddedTo;
			selectedPlayers.push(newSelectedPlayer);
			$('.player-add-number-lineups').text(newSelectedPlayer.lineupsIn.length);
		}
		else{
			var foundPlayer = findSelectedPlayer(player.id);
			foundPlayer[0].lineupsIn = foundPlayer[0].lineupsIn.concat(lineupsAddedTo); // Immutable?
			$('.player-add-number-lineups').text(foundPlayer[0].lineupsIn.length);
		}
	}

	$('.player-add-button').hide();

	console.log(selectedPlayers);

	$('.selected-players').empty();
	for(var i=0; i<selectedPlayers.length; i++){
		$('.selected-players').append('<option>' + selectedPlayers[i].name + '</option>')
	}

	printLineups();

}

function removePlayerFromLineups(n, id){
	var player = players[id];
	var playerLineups = getPlayerLineups(id); //pretending these are actual IDs
	var playerLineupsLength = playerLineups.length;

	var numRemovedFrom = 0;
	var toRemoveFrom = [];

	for(var i=0; i<playerLineups.length; i++){

		var j = lineups.findIndex(function(lineup){
			return lineup.id == playerLineups[i];
		});

		for(var key in lineups[j].roster){
			if(lineups[j].roster[key]){
				if(id === lineups[j].roster[key].id){
					numRemovedFrom ++;
					toRemoveFrom.push(lineups[j].id); // There's got to be a better way to do this
					lineups[j].roster[key] = null;
					continue;
				}
			}
		}

		if (numRemovedFrom == n) break;
	}

	removeFromSelectedLineups(id, toRemoveFrom);

	printLineups();
	displayLatestUpdate(player.Name, numRemovedFrom);

	var numRemainingLineups = playerLineupsLength - numRemovedFrom;

	console.log(numRemainingLineups);
	
	if(numRemainingLineups > 0){ 
		$('.player-add-number-lineups').text(numRemainingLineups);
	}
	else{
		$('.player-add-number-lineups').text(0);
		// Remove from Selected Players array?
	}

	$('.player-add-button').hide();

	console.log(selectedPlayers);
	console.log(lineups);
}

function removeFromSelectedLineups(playerId, lineupsToRemoveFrom){

	var p = selectedPlayers.findIndex(function(selectedPlayer){
		return selectedPlayer.id == playerId;
	});

	for(var i=0; i<lineupsToRemoveFrom.length; i++){

		var l = selectedPlayers[p].lineupsIn.findIndex(function(selectedLineup){
			return selectedLineup == lineupsToRemoveFrom[i];
		});

		selectedPlayers[p].lineupsIn.splice(l, 1);
	}
}

function emptySpecificPosition(lineupId, position){
	var index = lineups.findIndex(function(lineup){
		return lineup.id == lineupId;
	});
	lineups[index].roster[position] = null;
}

function displayLatestUpdate(name, n, wasAdded){
	if(wasAdded) $('.latest-update').text(name + " was added to " + n + " lineups.");
		else $('.latest-update').text(name + " was removed from " + n + " lineups.");
	$('.latest-update').fadeIn();
	setTimeout(function(){ $('.latest-update').fadeOut(); }, 4000);
}

function isAlreadySelected(playerId){
	for(var i=0; i<selectedPlayers.length; i++){
		if(playerId === selectedPlayers[i].id){
			return selectedPlayers[i].lineupsIn;
		}
	}
	return false;
}

function isAlreadyInLineup(playerId, lineup){
	for(var key in lineup.roster){ 
		if(lineup.roster[key]){
			if(lineup.roster[key].id === playerId){
				return true;
			}
		}
	}
	return false;
}

function getPlayerLineups(playerId){
	var foundPlayer = selectedPlayers.filter(function (player) { return player.id == playerId });
	if(foundPlayer.length === 1){
		return foundPlayer[0].lineupsIn;
	}
}

function findSelectedPlayer(playerId){
	var foundPlayer = selectedPlayers.filter(function (player) { return player.id == playerId });
	if(foundPlayer.length === 1) return foundPlayer;
		else return false;
}

function findLineupById(id){

}

function getPlayerLineupStats(id){
	var player = players[id];
	var playerFound = 0;

	var lineupsIn = [];
	var lineupsOut = [];
	
	for(var i=0; i<lineups.length; i++){ 
		for(var key in lineups[i].roster){ //Shorten this based on position
			if(lineups[i].roster[key]){
				if(id == lineups[i].roster[key].id){
					playerFound ++;
					lineupsIn.push(i);
				}
			}
		}
	}

	console.log(player.Name + " found " + playerFound + " times.");

	for(var i=0; i<lineupsIn.length; i++){ 
		console.log(lineupsIn[i] + " ");
	}

	$('.total-lineups').text(lineups.length);
	$('.player-in-lineups').text(playerFound);
	$('.available-lineups').text(lineups.length - playerFound);
	$('.player-add-number').attr('max', lineups.length - playerFound);
}

/* CLICK EVENTS*/
$('.lineups-number').change(function() {
	var number = $(this).val();
	buildLineups(number);
});
$(".lineups").delegate("table tr", "click", function(){
	var lineupId = $(this).closest('.lineup').attr('id');
	var position = $(this).attr('data-pos');
	var playerId = $(this).attr('data-pid');

	emptySpecificPosition(lineupId, position);
	removeFromSelectedLineups(playerId, [lineupId]);
	printLineups();
});

/* INITIALIZE */
var lineups = [];
var selectedPlayers = [];
var newLineupId = -1;
buildLineups(50);



