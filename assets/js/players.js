function printPlayers(pos){
	$('.player-add-holder').after($('.player-add'));
	$('.players').empty();
	var list = '';

	switch(pos){
		case 'ALL':
			for(var i=0; i<players.length; i++){
				list += printPlayer(players[i], i);
			}
			break;
		case 'FLEX':
			for(var i=0; i<players.length; i++){
				if(players[i].Position == 'RB' || players[i].Position == 'WR' || players[i].Position =='TE'){
					list += printPlayer(players[i], i);
				}
			}
			break;
		default:
			for(var i=0; i<players.length; i++, i){
				if(pos == players[i].Position){
					list += printPlayer(players[i], i);
				}
			}
			break;
	}

	$('.players').append(list);
}

function printPlayer(player, i){
	var row = '';
	row += '<tr class="player" id="' + i + '">';
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


/* CLICK EVENTS */
$(".players").delegate(".player", "click", function(){
	$('.player-add').show();
	$(this).after($('.player-add'));
	$('.player-add-number').val(0);
	$('.player-add-id').val($(this).attr('id'));
	$('.player-add span').text(lineups.length);
});

$('.player-add-button').click(function(){
	var n = $('.player-add-number').val();
	var id = $('.player-add-id').val();
	addPlayerToLineups(n, id);
});

// function clickedPlayer(){
// 	alert ('CLICKED PLAYER');
// }


/* INITIALIZE */
printPlayers('ALL');

