function printPlayers(pos){
	$('.player-add-holder').after($('.player-add'));
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
		case 'SEL':
			for(var i=0; i<selectedPlayers.length; i++){
				var p = players.findIndex(function(player){
					return player.id == selectedPlayers[i].id;
				});
				console.log(p);
				list += printPlayer(players[p]);
			}	
			break;
		default:
			for(var i=0; i<players.length; i++, i){
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

/* CLICK EVENTS */

$('.positions li').click(function(){
	$('.player-add').hide();
	var pos = $(this).text();
	printPlayers(pos);
});


$(".players").delegate(".player", "click", function(){

	$(".player-add-button").hide();

	$('.player-add').show();
	$(this).after($('.player-add'));
	$('.player-add-number').val(0);

	var playerId = $(this).attr('id');
	$('.player-add-id').val(playerId); 

	$('.player-add-name').text(players[playerId].Name);

	$('.player-add-total-lineups').text(lineups.length);


	var foundPlayer = findSelectedPlayer(playerId);
	if(foundPlayer){
		var numLineups = foundPlayer[0].lineupsIn.length
		$('.player-add-number-lineups').text(numLineups);
		$('.player-add-slider').slider("option", "value", numLineups);
		$(".player-add-slider-number").val(numLineups);
		$(".player-add-slider-pct").text(((numLineups/lineups.length) * 100).toFixed(2));
	}
	else{
		$('.player-add-number-lineups').text(0);
		$('.player-add-slider').slider("option", "value", 0);
		$(".player-add-slider-number").val(0);
		$(".player-add-slider-pct").text(0);
	} 


	getPlayerLineupStats(playerId);
});

$('.player-add-button').click(function(){
	var plusMinus = $(this).attr('id');	
	var n = parseInt($('#' + plusMinus + ' .player-add-delta').text());
	var id = parseInt($('.player-add-id').val());

	if (plusMinus == 'delta-plus') addPlayerToLineups(n, id);
		else removePlayerFromLineups(n, id);
});


/* INITIALIZE */
printPlayers('ALL');

$( ".player-add-slider" ).slider({
	animate: "fast",
	value: 0,
	min: 0,
	max: lineups.length,
	stop: function( event, ui ) {
		
		$(".player-add-button").hide();

		$(".player-add-slider-number").val(ui.value);
		$(".player-add-slider-pct").text(((ui.value/lineups.length) * 100).toFixed(2));

		var currentLineups = $('.player-add-number-lineups').text();
		var delta = ui.value - currentLineups;

		if(delta > 0) $("#delta-plus").show();
			else if (delta < 0) $('#delta-minus').show();
		
		$(".player-add-delta").text(Math.abs(delta));
	
	}
});

var value = $( ".player-add-slider" ).slider( "values", 0);
//$( ".player-add-number" ).slider( "option", "value", 10 );

