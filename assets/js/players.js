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
	row += '<tr class="player" id="' + player.id + '">';
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

	var playerId = $(this).attr('id');
	$('.player-add-id').val(playerId); 

	$('.player-add-name').text(players[playerId].Name);

	var foundPlayer = findSelectedPlayer(playerId);
	if(foundPlayer){
		$('.player-add-number-lineups').text(foundPlayer[0].lineupsIn.length);
	}
	else $('.player-add-number-lineups').text(0);


	getPlayerLineupStats(playerId);
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

$( ".player-add-slider" ).slider({
	animate: "fast",
	value: 20,
	min: 0,
	max: lineups.length,
	stop: function( event, ui ) {
	  $( ".stopvalue" ).val(ui.value);
	}
});

var value = $( ".player-add-slider" ).slider( "values", 0);
$//( ".player-add-number" ).slider( "option", "value", 10 );

