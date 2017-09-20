function printPlayers(pos){
	$('.players').empty();
	var list = '';

	switch(pos){
		case 'ALL':
			for(var i=0; i<players.length; i++){
				list += printPlayer(players[i]);
			}
			break;
		case 'FLEX':
			for(var i=0; i<players.length; i++){
				if(players[i].Position == 'RB' || players[i].Position == 'WR' || players[i].Position =='TE'){
					list += printPlayer(players[i]);
				}
			}
			break;
		default:
			for(var i=0; i<players.length; i++){
				if(pos == players[i].Position){
					list += printPlayer(players[i]);
				}
			}
			break;
	}

	$('.players').append(list);
}

function printPlayer(player){
	var row = '';
	row += '<tr>';
	row += '<td class="position">' + player.Position + '</td>';
	row += '<td class="name">' + player.Name + '</td>';
	row += '<td class="team">' + player.teamAbbrev + '</td>';
	row += '<td class="salary">$' + player.Salary + '</td>';
	row += '<td class="ppg">' + player.AvgPointsPerGame + '</td>';
	row += '<td class="gameinfo">' + player.GameInfo + '</td>';
	row += '</tr>';
	return row;
}

$('.positions li').click(function(){
	var pos = $(this).text();
	printPlayers(pos);
});

printPlayers('ALL');