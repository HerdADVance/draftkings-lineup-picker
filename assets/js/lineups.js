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
		printLineup(lineups[i]);
	}
}

function printLineup(lineup){
	var cost = findCost(lineup.roster);
	var costRemaining = 50000 - cost;

	if(cost > 50000){ var costStatus = "cost-over"}
		else{ var costStatus = "cost-under" }

	var output = '<table class="lineup ' + costStatus + '" id="' + lineup.id + '">';
	output += '<tr><th colspan="4">Lineup #' + lineup.id + '</th></tr>'; 
	
	for(var key in lineup.roster){
		output += '<tr class="lineup-player"><td>' + key + '</td><td>';
		if(lineup.roster[key]) output += lineup.roster[key].Name
		output += '</td><td>';
		if(lineup.roster[key]) output += lineup.roster[key].Salary
		output += '</td></tr>';
	}
	
	output += '<tr class="total"><td colspan="2">Remaining: <span>' + costRemaining + '</span></td><td>' + cost + '</td></tr>';
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

	for(var i=0; i<n; i++){

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
	
	}

	printLineups();
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


/* INITIALIZE */
var lineups = [];
var newLineupId = 0;

buildLineups(20);




