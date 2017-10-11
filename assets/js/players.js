function printPlayers(selectedPosition, awayTeam){
	
	emptyPlayers();
	var list = '';

	var playersToLoop = [];

	if(awayTeam){
		for(var i=0; i<players.length; i++){

			var playerGame = players[i].GameInfo;
			var playerAwayTeam = playerGame.substr(0, playerGame.indexOf('@'));
			
			if(playerAwayTeam === awayTeam){
				playersToLoop.push(players[i]);
			}
		}
	}
		else playersToLoop = players;

	
	switch(selectedPosition){
		case 'ALL':
			for(var i=0; i<playersToLoop.length; i++){
				list += printPlayer(playersToLoop[i]);
			}
			break;
		case 'FLEX':
			for(var i=0; i<playersToLoop.length; i++){
				if(playersToLoop[i].Position == 'RB' || playersToLoop[i].Position == 'WR' || playersToLoop[i].Position =='TE'){
					list += printPlayer(playersToLoop[i]);
				}
			}
			break;
		case 'SEL':
			for(var i=0; i<selectedPlayers.length; i++){
				var p = playersToLoop.findIndex(function(player){
					return player.id == selectedPlayers[i].id;
				});
				if(p != -1) list += printPlayer(playersToLoop[p]);
			}	
			break;
		default:
			for(var i=0; i<playersToLoop.length; i++, i){
				if(selectedPosition == playersToLoop[i].Position){
					list += printPlayer(playersToLoop[i]);
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

function emptyPlayers(){
	$('.player-add-holder').after($('.player-add'));
	$('.players').empty();
}

/* CLICK EVENTS */

$('.positions li').click(function(){
	$('.positions li').removeClass('selected');
	$(this).addClass('selected');
	$('.player-add').hide();

	var selectedPosition = $(this).text();
	var game = $('.games li.selected').text();
	var awayTeam = game.substr(0, game.indexOf(' '));
	
	printPlayers(selectedPosition, awayTeam);
});


$('.games li').click(function(){
	var selectedPosition = $('.positions li.selected').text();
	$('.player-add').hide();
	
	if($(this).hasClass('selected')){
		$('.games li').removeClass('selected');
		printPlayers(selectedPosition);
	}
	else{
		$('.games li').removeClass('selected');
		$(this).addClass('selected');
		var game = $(this).text();
		var awayTeam = game.substr(0, game.indexOf(' '));
		printPlayers(selectedPosition, awayTeam);
	}
})


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
var selectedGame = '';

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

