function buildLineups(num){
	for(var i=0; i<num; i++){
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

/* CLICK EVENTS*/
$('.lineups-number').change(function() {
	var number = $(this).val();
	buildLineups(number);
});


/* INITIALIZE */
var lineups = [];
var newLineupId = 0;





