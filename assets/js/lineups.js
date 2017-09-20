function buildLineups(num){
	for(var i=0; i<num; i++){
		lineups.push(newLineup())
	}
	printLineups();
}

function newLineup(){
	newLineupId ++;
	// return{
	// 	id: newLineupId,
	//  cost: 0,
	// 	QB: null,
	// 	RB: [null, null],
	// 	WR: [null, null, null],
	// 	TE: null,
	// 	FLEX: null,
	// 	DST: null
	// }

	return{
		id: newLineupId,
		roster: {
			QB: players[7],
			RB1: players[5],
			RB2: players[136],
			WR1: players[0],
			WR2: players[1],
			WR3: players[146],
			TE: players[378],
			FLEX: players[369],
			DST: players[305]
		}
	}
}

function printLineups(){
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
		output += '<tr><td>' + key + '</td><td>' + lineup.roster[key].Name + '</td>' + '<td>' + lineup.roster[key].Salary + '</td></tr>';
	}
	
	output += '<tr class="total"><td colspan="2">Remaining: <span>' + costRemaining + '</span></td><td>' + cost + '</td></tr>';
	output += '</table>';
	
	$('.lineups-wrap').append(output);
}

function findCost(roster){
	var cost = 0;
	for(var key in roster){
		cost += roster[key].Salary;
	}
	return cost;
}

/* CLICK EVENTS*/
$('.lineups-number').change(function() {
	var number = $(this).val();
	buildLineups(number);
});


/* INITIALIZE */
var lineups = [];
var newLineupId = 0;





