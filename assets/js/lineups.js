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
		QB: players[7],
		RB: [players[5], players[2]],
		WR: [players[0],players[1],players[3]],
		TE: players[22],
		FLEX: players[21],
		DST: players[448]
	}
}

function printLineups(){
	for(var i=0; i<lineups.length; i++){
		printLineup(lineups[i]);
	}
}

function printLineup(lineup){
	var output = '<table class="lineup">';
	output += '<tr><td>QB</td><td>' + lineup.QB.Name + '</td>' + '<td>' + lineup.QB.Salary + '</td></tr>';
	output += '<tr><td>RB</td><td>' + lineup.RB[0].Name + '</td>' + '<td>' + lineup.RB[0].Salary + '</td></tr>';
	output += '<tr><td>RB</td><td>' + lineup.RB[1].Name + '</td>' + '<td>' + lineup.RB[1].Salary + '</td></tr>';
	output += '<tr><td>WR</td><td>' + lineup.WR[0].Name + '</td>' + '<td>' + lineup.WR[0].Salary + '</td></tr>';
	output += '<tr><td>WR</td><td>' + lineup.WR[1].Name + '</td>' + '<td>' + lineup.WR[1].Salary + '</td></tr>';
	output += '<tr><td>WR</td><td>' + lineup.WR[2].Name + '</td>' + '<td>' + lineup.WR[2].Salary + '</td></tr>';
	output += '<tr><td>TE</td><td>' + lineup.TE.Name + '</td>' + '<td>' + lineup.TE.Salary + '</td></tr>';
	output += '<tr><td>FLEX</td><td>' + lineup.FLEX.Name + '</td>' + '<td>' + lineup.FLEX.Salary + '</td></tr>';
	output += '<tr><td>DST</td><td>' + lineup.DST.Name + '</td>' + '<td>' + lineup.DST.Salary + '</td></tr>';
	output += '</table><br/><br/>';
	
	$('.lineups').append(output);
}

$('.lineups-number').change(function() {
	var number = $(this).val();
	buildLineups(number);
});

var lineups = [];
var newLineupId = 0;

//buildLineups(20);






