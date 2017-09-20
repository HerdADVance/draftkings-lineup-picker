var players = [
  {
    "Position": "WR",
    "Name": "Julio Jones",
    "Salary": 9300,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 14.7,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "WR",
    "Name": "Antonio Brown",
    "Salary": 9000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 21.7,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "RB",
    "Name": "Le'Veon Bell",
    "Salary": 8800,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 10.4,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "WR",
    "Name": "Odell Beckham Jr.",
    "Salary": 8600,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 7.6,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "A.J. Green",
    "Salary": 8100,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 12.05,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "RB",
    "Name": "Kareem Hunt",
    "Salary": 8000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 37.75,
    "teamAbbrev": "KC"
  },
  {
    "Position": "WR",
    "Name": "Jordy Nelson",
    "Salary": 7800,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 10.45,
    "teamAbbrev": "GB"
  },
  {
    "Position": "QB",
    "Name": "Tom Brady",
    "Salary": 7700,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 22.23,
    "teamAbbrev": "NE"
  },
  {
    "Position": "RB",
    "Name": "Jay Ajayi",
    "Salary": 7700,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 17.6,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "RB",
    "Name": "Melvin Gordon",
    "Salary": 7600,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 19.85,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "WR",
    "Name": "Mike Evans",
    "Salary": 7500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 22.3,
    "teamAbbrev": "TB"
  },
  {
    "Position": "WR",
    "Name": "Michael Crabtree",
    "Salary": 7400,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 23.15,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "WR",
    "Name": "Brandin Cooks",
    "Salary": 7300,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 9.05,
    "teamAbbrev": "NE"
  },
  {
    "Position": "QB",
    "Name": "Aaron Rodgers",
    "Salary": 7300,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 22.03,
    "teamAbbrev": "GB"
  },
  {
    "Position": "QB",
    "Name": "Drew Brees",
    "Salary": 7200,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 20.44,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Keenan Allen",
    "Salary": 7200,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 18.25,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "QB",
    "Name": "Matt Ryan",
    "Salary": 7100,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 17.91,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "WR",
    "Name": "Amari Cooper",
    "Salary": 7100,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 12.25,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "RB",
    "Name": "LeSean McCoy",
    "Salary": 7000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 17.1,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "WR",
    "Name": "Michael Thomas",
    "Salary": 7000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 11.7,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Golden Tate",
    "Salary": 6900,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 15.45,
    "teamAbbrev": "DET"
  },
  {
    "Position": "RB",
    "Name": "Ty Montgomery",
    "Salary": 6900,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 24.15,
    "teamAbbrev": "GB"
  },
  {
    "Position": "TE",
    "Name": "Rob Gronkowski",
    "Salary": 6800,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 15.95,
    "teamAbbrev": "NE"
  },
  {
    "Position": "WR",
    "Name": "Jarvis Landry",
    "Salary": 6800,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 20.1,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "QB",
    "Name": "Derek Carr",
    "Salary": 6800,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 19.94,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "WR",
    "Name": "Kelvin Benjamin",
    "Salary": 6700,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 8.6,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "RB",
    "Name": "Devonta Freeman",
    "Salary": 6700,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 17.95,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "QB",
    "Name": "Cam Newton",
    "Salary": 6600,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 12.98,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "WR",
    "Name": "Tyreek Hill",
    "Salary": 6600,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 19.35,
    "teamAbbrev": "KC"
  },
  {
    "Position": "WR",
    "Name": "Stefon Diggs",
    "Salary": 6500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 16.4,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "WR",
    "Name": "Doug Baldwin",
    "Salary": 6400,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 10.2,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "QB",
    "Name": "Philip Rivers",
    "Salary": 6400,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 19.46,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "WR",
    "Name": "DeVante Parker",
    "Salary": 6300,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 12.5,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "QB",
    "Name": "Russell Wilson",
    "Salary": 6300,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 12.32,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "QB",
    "Name": "Ben Roethlisberger",
    "Salary": 6200,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 17.12,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "QB",
    "Name": "Matthew Stafford",
    "Salary": 6200,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 21.13,
    "teamAbbrev": "DET"
  },
  {
    "Position": "WR",
    "Name": "DeAndre Hopkins",
    "Salary": 6200,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 16.4,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "RB",
    "Name": "Christian McCaffrey",
    "Salary": 6100,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 10.45,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "WR",
    "Name": "Chris Hogan",
    "Salary": 6100,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 11.15,
    "teamAbbrev": "NE"
  },
  {
    "Position": "QB",
    "Name": "Jay Cutler",
    "Salary": 6100,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 13.1,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "QB",
    "Name": "Kirk Cousins",
    "Salary": 6100,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 12.73,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "QB",
    "Name": "Jameis Winston",
    "Salary": 6000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 12.46,
    "teamAbbrev": "TB"
  },
  {
    "Position": "QB",
    "Name": "Marcus Mariota",
    "Salary": 6000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 16.42,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "WR",
    "Name": "Randall Cobb",
    "Salary": 6000,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 15.25,
    "teamAbbrev": "GB"
  },
  {
    "Position": "TE",
    "Name": "Travis Kelce",
    "Salary": 6000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 18.35,
    "teamAbbrev": "KC"
  },
  {
    "Position": "RB",
    "Name": "Marshawn Lynch",
    "Salary": 6000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 11.05,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "WR",
    "Name": "Demaryius Thomas",
    "Salary": 5900,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 12.4,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "RB",
    "Name": "Dalvin Cook",
    "Salary": 5900,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 14.05,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "QB",
    "Name": "Carson Wentz",
    "Salary": 5900,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 26.35,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "WR",
    "Name": "Alshon Jeffery",
    "Salary": 5900,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 15.5,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "QB",
    "Name": "Alex Smith",
    "Salary": 5900,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 25.08,
    "teamAbbrev": "KC"
  },
  {
    "Position": "WR",
    "Name": "Terrelle Pryor Sr.",
    "Salary": 5900,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 8.85,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "RB",
    "Name": "C.J. Anderson",
    "Salary": 5800,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 21.6,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "WR",
    "Name": "Emmanuel Sanders",
    "Salary": 5800,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 14.9,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "QB",
    "Name": "Andrew Luck",
    "Salary": 5800,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "IND"
  },
  {
    "Position": "WR",
    "Name": "Martavis Bryant",
    "Salary": 5700,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 11.1,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "QB",
    "Name": "Sam Bradford",
    "Salary": 5700,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 28.54,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "WR",
    "Name": "Adam Thielen",
    "Salary": 5700,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 18.05,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "RB",
    "Name": "Mike Gillislee",
    "Salary": 5700,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 17.7,
    "teamAbbrev": "NE"
  },
  {
    "Position": "RB",
    "Name": "Tarik Cohen",
    "Salary": 5600,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 19.55,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "QB",
    "Name": "Jimmy Garoppolo",
    "Salary": 5600,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NE"
  },
  {
    "Position": "WR",
    "Name": "Davante Adams",
    "Salary": 5600,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 15.8,
    "teamAbbrev": "GB"
  },
  {
    "Position": "QB",
    "Name": "Trevor Siemian",
    "Salary": 5500,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 24.15,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "RB",
    "Name": "DeMarco Murray",
    "Salary": 5500,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 5.9,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "QB",
    "Name": "Derek Anderson",
    "Salary": 5400,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "RB",
    "Name": "James White",
    "Salary": 5400,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 13.7,
    "teamAbbrev": "NE"
  },
  {
    "Position": "WR",
    "Name": "Danny Amendola",
    "Salary": 5400,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 19,
    "teamAbbrev": "NE"
  },
  {
    "Position": "TE",
    "Name": "Jordan Reed",
    "Salary": 5400,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 9.7,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "RB",
    "Name": "Tevin Coleman",
    "Salary": 5300,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 11.15,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "QB",
    "Name": "Eli Manning",
    "Salary": 5300,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 10.13,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "RB",
    "Name": "Derrick Henry",
    "Salary": 5300,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 8.85,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "WR",
    "Name": "T.Y. Hilton",
    "Salary": 5200,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 8.3,
    "teamAbbrev": "IND"
  },
  {
    "Position": "RB",
    "Name": "Theo Riddick",
    "Salary": 5100,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 10.65,
    "teamAbbrev": "DET"
  },
  {
    "Position": "QB",
    "Name": "Andy Dalton",
    "Salary": 5100,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 5.73,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "QB",
    "Name": "DeShone Kizer",
    "Salary": 5000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 12.73,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "RB",
    "Name": "Lamar Miller",
    "Salary": 5000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 11.65,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "WR",
    "Name": "Brandon Marshall",
    "Salary": 5000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 2.35,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "TE",
    "Name": "Zach Ertz",
    "Salary": 5000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 16,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "QB",
    "Name": "Tyrod Taylor",
    "Salary": 4900,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 15.13,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "TE",
    "Name": "Greg Olsen",
    "Salary": 4900,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 2.9,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "RB",
    "Name": "Jordan Howard",
    "Salary": 4900,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 8.15,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "RB",
    "Name": "Chris Carson",
    "Salary": 4900,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 8.45,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "WR",
    "Name": "Jamison Crowder",
    "Salary": 4900,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 6.05,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "RB",
    "Name": "Isaiah Crowell",
    "Salary": 4800,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 7.15,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "WR",
    "Name": "Corey Coleman",
    "Salary": 4800,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 9.1,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "QB",
    "Name": "Jacoby Brissett",
    "Salary": 4800,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 5.94,
    "teamAbbrev": "IND"
  },
  {
    "Position": "RB",
    "Name": "Jonathan Stewart",
    "Salary": 4700,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 10.1,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "QB",
    "Name": "Mike Glennon",
    "Salary": 4700,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 14.28,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "RB",
    "Name": "Ameer Abdullah",
    "Salary": 4700,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 7.85,
    "teamAbbrev": "DET"
  },
  {
    "Position": "QB",
    "Name": "Deshaun Watson",
    "Salary": 4700,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 12.69,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "WR",
    "Name": "Sterling Shepard",
    "Salary": 4700,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 8.5,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "QB",
    "Name": "AJ McCarron",
    "Salary": 4700,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "QB",
    "Name": "Patrick Mahomes II",
    "Salary": 4700,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "KC"
  },
  {
    "Position": "QB",
    "Name": "Colt McCoy",
    "Salary": 4700,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "QB",
    "Name": "Chase Daniel",
    "Salary": 4600,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Kenny Golladay",
    "Salary": 4600,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 12.35,
    "teamAbbrev": "DET"
  },
  {
    "Position": "QB",
    "Name": "Kevin Hogan",
    "Salary": 4600,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 8.22,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "RB",
    "Name": "Jacquizz Rodgers",
    "Salary": 4600,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 12.7,
    "teamAbbrev": "TB"
  },
  {
    "Position": "WR",
    "Name": "DeSean Jackson",
    "Salary": 4600,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 6.9,
    "teamAbbrev": "TB"
  },
  {
    "Position": "WR",
    "Name": "Jermaine Kearse",
    "Salary": 4600,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 17.65,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "TE",
    "Name": "Jimmy Graham",
    "Salary": 4600,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 2.45,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "WR",
    "Name": "Tyrell Williams",
    "Salary": 4600,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 9.9,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "RB",
    "Name": "Mark Ingram",
    "Salary": 4500,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 11.85,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Willie Snead",
    "Salary": 4500,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NO"
  },
  {
    "Position": "QB",
    "Name": "Mitchell Trubisky",
    "Salary": 4500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "QB",
    "Name": "Landry Jones",
    "Salary": 4500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "RB",
    "Name": "James Conner",
    "Salary": 4500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 1,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "WR",
    "Name": "Mohamed Sanu",
    "Salary": 4500,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 12.1,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "QB",
    "Name": "Case Keenum",
    "Salary": 4500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 6.68,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "RB",
    "Name": "Doug Martin",
    "Salary": 4500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TB"
  },
  {
    "Position": "QB",
    "Name": "Matt Moore",
    "Salary": 4500,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "QB",
    "Name": "Josh McCown",
    "Salary": 4500,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 14.11,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "QB",
    "Name": "Geno Smith",
    "Salary": 4500,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "RB",
    "Name": "Joe Mixon",
    "Salary": 4500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 5.25,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "QB",
    "Name": "Cardale Jones",
    "Salary": 4500,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "RB",
    "Name": "Samaje Perine",
    "Salary": 4500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 3.85,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "RB",
    "Name": "Chris Thompson",
    "Salary": 4500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 20.6,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "QB",
    "Name": "Ryan Fitzpatrick",
    "Salary": 4400,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": -0.2,
    "teamAbbrev": "TB"
  },
  {
    "Position": "QB",
    "Name": "Tom Savage",
    "Salary": 4400,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0.48,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "WR",
    "Name": "Kenny Stills",
    "Salary": 4400,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 11.7,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "TE",
    "Name": "Delanie Walker",
    "Salary": 4400,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 15.4,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "RB",
    "Name": "Jamaal Williams",
    "Salary": 4400,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 1.5,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Kendall Wright",
    "Salary": 4300,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 10.15,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "QB",
    "Name": "Matt Schaub",
    "Salary": 4300,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "QB",
    "Name": "Scott Tolzien",
    "Salary": 4300,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 3.32,
    "teamAbbrev": "IND"
  },
  {
    "Position": "RB",
    "Name": "Matt Forte",
    "Salary": 4300,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 9.85,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "QB",
    "Name": "Nick Foles",
    "Salary": 4300,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "QB",
    "Name": "Matt Cassel",
    "Salary": 4300,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "QB",
    "Name": "Austin Davis",
    "Salary": 4300,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "WR",
    "Name": "Tyler Lockett",
    "Salary": 4300,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 7.1,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "QB",
    "Name": "Connor Cook",
    "Salary": 4300,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "QB",
    "Name": "Brock Osweiler",
    "Salary": 4200,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "RB",
    "Name": "Jamaal Charles",
    "Salary": 4200,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 4.6,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "WR",
    "Name": "Devin Funchess",
    "Salary": 4200,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 7.4,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "QB",
    "Name": "Jake Rudock",
    "Salary": 4200,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DET"
  },
  {
    "Position": "WR",
    "Name": "Marvin Jones Jr.",
    "Salary": 4200,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 10.7,
    "teamAbbrev": "DET"
  },
  {
    "Position": "RB",
    "Name": "Duke Johnson Jr.",
    "Salary": 4200,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 7.5,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "RB",
    "Name": "Frank Gore",
    "Salary": 4200,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 8.4,
    "teamAbbrev": "IND"
  },
  {
    "Position": "TE",
    "Name": "Kyle Rudolph",
    "Salary": 4200,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 10.05,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "RB",
    "Name": "Bilal Powell",
    "Salary": 4200,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 5.1,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "WR",
    "Name": "Nelson Agholor",
    "Salary": 4200,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 14.25,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "WR",
    "Name": "Rishard Matthews",
    "Salary": 4200,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 9.7,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "QB",
    "Name": "Brett Hundley",
    "Salary": 4200,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "GB"
  },
  {
    "Position": "RB",
    "Name": "Rob Kelley",
    "Salary": 4200,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 5.4,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "WR",
    "Name": "Ted Ginn Jr.",
    "Salary": 4100,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 7.6,
    "teamAbbrev": "NO"
  },
  {
    "Position": "TE",
    "Name": "Coby Fleener",
    "Salary": 4100,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 14.35,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Kenny Britt",
    "Salary": 4100,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 1.75,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "QB",
    "Name": "Christian Hackenberg",
    "Salary": 4100,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "WR",
    "Name": "Paul Richardson",
    "Salary": 4100,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 9.9,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "RB",
    "Name": "Jalen Richard",
    "Salary": 4100,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 11.35,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "QB",
    "Name": "Joe Webb",
    "Salary": 4000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "QB",
    "Name": "Nathan Peterman",
    "Salary": 4000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "QB",
    "Name": "Paxton Lynch",
    "Salary": 4000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "QB",
    "Name": "Taysom Hill",
    "Salary": 4000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NO"
  },
  {
    "Position": "RB",
    "Name": "Alvin Kamara",
    "Salary": 4000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 8.1,
    "teamAbbrev": "NO"
  },
  {
    "Position": "QB",
    "Name": "Brad Kaaya",
    "Salary": 4000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "QB",
    "Name": "Mark Sanchez",
    "Salary": 4000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "QB",
    "Name": "Joshua Dobbs",
    "Salary": 4000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "WR",
    "Name": "Taylor Gabriel",
    "Salary": 4000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 5.35,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "QB",
    "Name": "Cody Kessler",
    "Salary": 4000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "WR",
    "Name": "Rashard Higgins",
    "Salary": 4000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 16.9,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "WR",
    "Name": "Josh Gordon",
    "Salary": 4000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "QB",
    "Name": "Kyle Sloter",
    "Salary": 4000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "RB",
    "Name": "Jerick McKinnon",
    "Salary": 4000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 6.1,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "RB",
    "Name": "D'Onta Foreman",
    "Salary": 4000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 2.2,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "RB",
    "Name": "Rex Burkhead",
    "Salary": 4000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 8.35,
    "teamAbbrev": "NE"
  },
  {
    "Position": "WR",
    "Name": "Phillip Dorsett",
    "Salary": 4000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 5.25,
    "teamAbbrev": "NE"
  },
  {
    "Position": "RB",
    "Name": "Kenyan Drake",
    "Salary": 4000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": -0.3,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "QB",
    "Name": "Bryce Petty",
    "Salary": 4000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "QB",
    "Name": "Davis Webb",
    "Salary": 4000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "RB",
    "Name": "Shane Vereen",
    "Salary": 4000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 11.3,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "Eric Decker",
    "Salary": 4000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 5.1,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "RB",
    "Name": "Thomas Rawls",
    "Salary": 4000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0.4,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "TE",
    "Name": "Martellus Bennett",
    "Salary": 4000,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 8.5,
    "teamAbbrev": "GB"
  },
  {
    "Position": "QB",
    "Name": "Tyler Bray",
    "Salary": 4000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "KC"
  },
  {
    "Position": "RB",
    "Name": "Charcandrick West",
    "Salary": 4000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 4.75,
    "teamAbbrev": "KC"
  },
  {
    "Position": "QB",
    "Name": "Kellen Clemens",
    "Salary": 4000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "RB",
    "Name": "Branden Oliver",
    "Salary": 4000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 2.05,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "QB",
    "Name": "EJ Manuel",
    "Salary": 4000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "RB",
    "Name": "DeAndre Washington",
    "Salary": 4000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 5.35,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "RB",
    "Name": "Adrian Peterson",
    "Salary": 3900,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 2.2,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Brandon Coleman",
    "Salary": 3900,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 10.75,
    "teamAbbrev": "NO"
  },
  {
    "Position": "RB",
    "Name": "Charles Sims",
    "Salary": 3900,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 1.9,
    "teamAbbrev": "TB"
  },
  {
    "Position": "RB",
    "Name": "LeGarrette Blount",
    "Salary": 3900,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 6.35,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "RB",
    "Name": "Darren Sproles",
    "Salary": 3900,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 9.15,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "WR",
    "Name": "Corey Davis",
    "Salary": 3900,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 7.15,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "TE",
    "Name": "Tyler Eifert",
    "Salary": 3900,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 4.3,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "TE",
    "Name": "Hunter Henry",
    "Salary": 3900,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 7.5,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "RB",
    "Name": "Mike Tolbert",
    "Salary": 3800,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 7.05,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "TE",
    "Name": "Austin Hooper",
    "Salary": 3800,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 13.25,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "RB",
    "Name": "Dwayne Washington",
    "Salary": 3800,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 1.55,
    "teamAbbrev": "DET"
  },
  {
    "Position": "RB",
    "Name": "Marlon Mack",
    "Salary": 3800,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 6.65,
    "teamAbbrev": "IND"
  },
  {
    "Position": "WR",
    "Name": "Donte Moncrief",
    "Salary": 3800,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 4.9,
    "teamAbbrev": "IND"
  },
  {
    "Position": "RB",
    "Name": "Alfred Blue",
    "Salary": 3800,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "WR",
    "Name": "Will Fuller V",
    "Salary": 3800,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "DST",
    "Name": "Patriots",
    "Salary": 3800,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 1.5,
    "teamAbbrev": "NE"
  },
  {
    "Position": "RB",
    "Name": "Damien Williams",
    "Salary": 3800,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "RB",
    "Name": "Paul Perkins",
    "Salary": 3800,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 4.35,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "RB",
    "Name": "Wendell Smallwood",
    "Salary": 3800,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 1.5,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "RB",
    "Name": "Giovani Bernard",
    "Salary": 3800,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 6.75,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "RB",
    "Name": "Robert Turbin",
    "Salary": 3700,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 2.1,
    "teamAbbrev": "IND"
  },
  {
    "Position": "DST",
    "Name": "Dolphins",
    "Salary": 3700,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 2,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "RB",
    "Name": "C.J. Prosise",
    "Salary": 3700,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 3.15,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "RB",
    "Name": "Jeremy Hill",
    "Salary": 3700,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 3.15,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "WR",
    "Name": "Brandon LaFell",
    "Salary": 3700,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 6.2,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "RB",
    "Name": "Aaron Jones",
    "Salary": 3700,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Mike Williams",
    "Salary": 3700,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "RB",
    "Name": "De'Angelo Henderson",
    "Salary": 3600,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "DST",
    "Name": "Broncos",
    "Salary": 3600,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 9,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "WR",
    "Name": "Eli Rogers",
    "Salary": 3600,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 5.7,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "TE",
    "Name": "Jack Doyle",
    "Salary": 3600,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 11,
    "teamAbbrev": "IND"
  },
  {
    "Position": "WR",
    "Name": "Jeremy Kerley",
    "Salary": 3600,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 4.4,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "WR",
    "Name": "Torrey Smith",
    "Salary": 3600,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 7.3,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "WR",
    "Name": "Taywan Taylor",
    "Salary": 3600,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 5.1,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "WR",
    "Name": "Jordan Matthews",
    "Salary": 3500,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 7.05,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "RB",
    "Name": "Devontae Booker",
    "Salary": 3500,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "WR",
    "Name": "Russell Shepard",
    "Salary": 3500,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 7.45,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "WR",
    "Name": "Markus Wheaton",
    "Salary": 3500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "WR",
    "Name": "Deonte Thompson",
    "Salary": 3500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 9.1,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "WR",
    "Name": "Jaelen Strong",
    "Salary": 3500,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "RB",
    "Name": "Elijah McGuire",
    "Salary": 3500,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 2.3,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "DST",
    "Name": "Seahawks",
    "Salary": 3500,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 7.5,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "RB",
    "Name": "Devante Mays",
    "Salary": 3500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Travis Benjamin",
    "Salary": 3500,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 7.7,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "WR",
    "Name": "Ryan Grant",
    "Salary": 3500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 9.1,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "WR",
    "Name": "Josh Doctson",
    "Salary": 3500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "TE",
    "Name": "Charles Clay",
    "Salary": 3400,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 10.3,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "DST",
    "Name": "Steelers",
    "Salary": 3400,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 13,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "RB",
    "Name": "Dion Lewis",
    "Salary": 3400,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 2.2,
    "teamAbbrev": "NE"
  },
  {
    "Position": "WR",
    "Name": "Robby Anderson",
    "Salary": 3400,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 5.5,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "RB",
    "Name": "Orleans Darkwa",
    "Salary": 3400,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 2.65,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "RB",
    "Name": "Eddie Lacy",
    "Salary": 3400,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0.3,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "DST",
    "Name": "Packers",
    "Salary": 3400,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 5.5,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Dontrelle Inman",
    "Salary": 3400,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "WR",
    "Name": "Seth Roberts",
    "Salary": 3400,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 4.45,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "WR",
    "Name": "Josh Bellamy",
    "Salary": 3300,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 7.4,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "TE",
    "Name": "Jesse James",
    "Salary": 3300,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 14.4,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "RB",
    "Name": "Zach Zenner",
    "Salary": 3300,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DET"
  },
  {
    "Position": "TE",
    "Name": "Eric Ebron",
    "Salary": 3300,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 9.05,
    "teamAbbrev": "DET"
  },
  {
    "Position": "WR",
    "Name": "Kamar Aiken",
    "Salary": 3300,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 3.7,
    "teamAbbrev": "IND"
  },
  {
    "Position": "WR",
    "Name": "Laquon Treadwell",
    "Salary": 3300,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 4,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "DST",
    "Name": "Vikings",
    "Salary": 3300,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 2,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "WR",
    "Name": "Bruce Ellington",
    "Salary": 3300,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "WR",
    "Name": "Roger Lewis",
    "Salary": 3300,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 6.35,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "Tyler Boyd",
    "Salary": 3300,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 2.1,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "WR",
    "Name": "John Ross",
    "Salary": 3300,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0.2,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "WR",
    "Name": "Jeff Janis",
    "Salary": 3300,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Curtis Samuel",
    "Salary": 3200,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 1.35,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "DST",
    "Name": "Colts",
    "Salary": 3200,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 4.5,
    "teamAbbrev": "IND"
  },
  {
    "Position": "RB",
    "Name": "Latavius Murray",
    "Salary": 3200,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0.6,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "DST",
    "Name": "Buccaneers",
    "Salary": 3200,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 19,
    "teamAbbrev": "TB"
  },
  {
    "Position": "TE",
    "Name": "Evan Engram",
    "Salary": 3200,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 11.65,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "Chris Conley",
    "Salary": 3200,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 7.9,
    "teamAbbrev": "KC"
  },
  {
    "Position": "WR",
    "Name": "Zay Jones",
    "Salary": 3100,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 3.45,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "WR",
    "Name": "Tommylee Lewis",
    "Salary": 3100,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 4.9,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Sammie Coates",
    "Salary": 3100,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "WR",
    "Name": "Adam Humphries",
    "Salary": 3100,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 3.8,
    "teamAbbrev": "TB"
  },
  {
    "Position": "WR",
    "Name": "Braxton Miller",
    "Salary": 3100,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 1.5,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "WR",
    "Name": "ArDarius Stewart",
    "Salary": 3100,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 1.5,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "DST",
    "Name": "Giants",
    "Salary": 3100,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 3.5,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "Alex Erickson",
    "Salary": 3100,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 5.2,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "WR",
    "Name": "Albert Wilson",
    "Salary": 3100,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 6.65,
    "teamAbbrev": "KC"
  },
  {
    "Position": "TE",
    "Name": "Jared Cook",
    "Salary": 3100,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 8.55,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "RB",
    "Name": "Joe Banyard",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "RB",
    "Name": "Taiwan Jones",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "RB",
    "Name": "Patrick DiMarco",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0.75,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "WR",
    "Name": "Brandon Tate",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "WR",
    "Name": "Kaelin Clay",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "WR",
    "Name": "Andre Holmes",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 5.45,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "RB",
    "Name": "Andy Janovich",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "WR",
    "Name": "Isaiah McKenzie",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "WR",
    "Name": "Bennie Fowler",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 9.45,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "WR",
    "Name": "Cody Latimer",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 2.1,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "WR",
    "Name": "Jordan Taylor",
    "Salary": 3000,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "RB",
    "Name": "Trey Edmunds",
    "Salary": 3000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NO"
  },
  {
    "Position": "RB",
    "Name": "John Kuhn",
    "Salary": 3000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0.1,
    "teamAbbrev": "NO"
  },
  {
    "Position": "WR",
    "Name": "Austin Carr",
    "Salary": 3000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NO"
  },
  {
    "Position": "RB",
    "Name": "Fozzy Whittaker",
    "Salary": 3000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0.05,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "RB",
    "Name": "Cameron Artis-Payne",
    "Salary": 3000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "WR",
    "Name": "Damiere Byrd",
    "Salary": 3000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "RB",
    "Name": "Benny Cunningham",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "RB",
    "Name": "Michael Burton",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0.35,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "RB",
    "Name": "Taquan Mizzell",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "WR",
    "Name": "Tanner Gentry",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 4.7,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "WR",
    "Name": "Tre McBride",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "TE",
    "Name": "Zach Miller",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 9.05,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "RB",
    "Name": "Terrell Watson",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0.05,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "RB",
    "Name": "Roosevelt Nix",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "WR",
    "Name": "JuJu Smith-Schuster",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 5.3,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "WR",
    "Name": "Justin Hunter",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "WR",
    "Name": "Darrius Heyward-Bey",
    "Salary": 3000,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "RB",
    "Name": "Brian Hill",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "RB",
    "Name": "Terron Ward",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "RB",
    "Name": "Derrick Coleman",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "WR",
    "Name": "Nick Williams",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "WR",
    "Name": "Justin Hardy",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 1.45,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "WR",
    "Name": "Andre Roberts",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "RB",
    "Name": "Tion Green",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DET"
  },
  {
    "Position": "WR",
    "Name": "Jared Abbrederis",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DET"
  },
  {
    "Position": "WR",
    "Name": "TJ Jones",
    "Salary": 3000,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 2.6,
    "teamAbbrev": "DET"
  },
  {
    "Position": "RB",
    "Name": "Danny Vitale",
    "Salary": 3000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "RB",
    "Name": "Matthew Dayes",
    "Salary": 3000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 1.8,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "WR",
    "Name": "Ricardo Louis",
    "Salary": 3000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 4.95,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "WR",
    "Name": "Kasen Williams",
    "Salary": 3000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "WR",
    "Name": "Reggie Davis",
    "Salary": 3000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "DST",
    "Name": "Browns",
    "Salary": 3000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 4.5,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "WR",
    "Name": "Chester Rogers",
    "Salary": 3000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "IND"
  },
  {
    "Position": "WR",
    "Name": "Quan Bray",
    "Salary": 3000,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "IND"
  },
  {
    "Position": "RB",
    "Name": "C.J. Ham",
    "Salary": 3000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 3.05,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "WR",
    "Name": "Stacy Coley",
    "Salary": 3000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "WR",
    "Name": "Rodney Adams",
    "Salary": 3000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "WR",
    "Name": "Jarius Wright",
    "Salary": 3000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 2.5,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "RB",
    "Name": "Peyton Barber",
    "Salary": 3000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 4.7,
    "teamAbbrev": "TB"
  },
  {
    "Position": "WR",
    "Name": "Chris Godwin",
    "Salary": 3000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TB"
  },
  {
    "Position": "WR",
    "Name": "Bernard Reedy",
    "Salary": 3000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TB"
  },
  {
    "Position": "TE",
    "Name": "Cameron Brate",
    "Salary": 3000,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 4.4,
    "teamAbbrev": "TB"
  },
  {
    "Position": "RB",
    "Name": "Jay Prosch",
    "Salary": 3000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "RB",
    "Name": "Tyler Ervin",
    "Salary": 3000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 5.6,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "RB",
    "Name": "Jordan Todman",
    "Salary": 3000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "TE",
    "Name": "Ryan Griffin",
    "Salary": 3000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "RB",
    "Name": "James Develin",
    "Salary": 3000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0.8,
    "teamAbbrev": "NE"
  },
  {
    "Position": "RB",
    "Name": "Brandon Bolden",
    "Salary": 3000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NE"
  },
  {
    "Position": "WR",
    "Name": "Matthew Slater",
    "Salary": 3000,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NE"
  },
  {
    "Position": "RB",
    "Name": "Senorise Perry",
    "Salary": 3000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "WR",
    "Name": "Jakeem Grant",
    "Salary": 3000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "WR",
    "Name": "Leonte Carroo",
    "Salary": 3000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "TE",
    "Name": "Julius Thomas",
    "Salary": 3000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 5.6,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "WR",
    "Name": "Kalif Raymond",
    "Salary": 3000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": -0.5,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "WR",
    "Name": "Chad Hansen",
    "Salary": 3000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "WR",
    "Name": "Charone Peake",
    "Salary": 3000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0.65,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "TE",
    "Name": "Austin Seferian-Jenkins",
    "Salary": 3000,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "RB",
    "Name": "Wayne Gallman",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "RB",
    "Name": "Shane Smith",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "Tavarres King",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "WR",
    "Name": "Dwayne Harris",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "RB",
    "Name": "Corey Clement",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "WR",
    "Name": "Shelton Gibson",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "WR",
    "Name": "Mack Hollins",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 3.1,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "WR",
    "Name": "Marcus Johnson",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "DST",
    "Name": "Eagles",
    "Salary": 3000,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 13,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "RB",
    "Name": "David Fluellen",
    "Salary": 3000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0.9,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "RB",
    "Name": "Jalston Fowler",
    "Salary": 3000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 3.15,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "WR",
    "Name": "Eric Weems",
    "Salary": 3000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "RB",
    "Name": "J.D. McKissic",
    "Salary": 3000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "RB",
    "Name": "Tre Madden",
    "Salary": 3000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "WR",
    "Name": "Tanner McEvoy",
    "Salary": 3000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "WR",
    "Name": "Amara Darboh",
    "Salary": 3000,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 1.3,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "WR",
    "Name": "Cody Core",
    "Salary": 3000,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "WR",
    "Name": "Josh Malone",
    "Salary": 3000,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "RB",
    "Name": "Aaron Ripkowski",
    "Salary": 3000,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0.6,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Geronimo Allison",
    "Salary": 3000,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 5.4,
    "teamAbbrev": "GB"
  },
  {
    "Position": "WR",
    "Name": "Trevor Davis",
    "Salary": 3000,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0.95,
    "teamAbbrev": "GB"
  },
  {
    "Position": "RB",
    "Name": "Akeem Hunt",
    "Salary": 3000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "KC"
  },
  {
    "Position": "RB",
    "Name": "Anthony Sherman",
    "Salary": 3000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "KC"
  },
  {
    "Position": "WR",
    "Name": "De'Anthony Thomas",
    "Salary": 3000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0.6,
    "teamAbbrev": "KC"
  },
  {
    "Position": "WR",
    "Name": "Jehu Chesson",
    "Salary": 3000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "KC"
  },
  {
    "Position": "WR",
    "Name": "Demarcus Robinson",
    "Salary": 3000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "KC"
  },
  {
    "Position": "RB",
    "Name": "Austin Ekeler",
    "Salary": 3000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 1.9,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "RB",
    "Name": "Derek Watt",
    "Salary": 3000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "TE",
    "Name": "Antonio Gates",
    "Salary": 3000,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 6.4,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "RB",
    "Name": "Jamize Olawale",
    "Salary": 3000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "WR",
    "Name": "Johnny Holton",
    "Salary": 3000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "WR",
    "Name": "Cordarrelle Patterson",
    "Salary": 3000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 7.5,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "RB",
    "Name": "Mack Brown",
    "Salary": 3000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "WR",
    "Name": "Brian Quick",
    "Salary": 3000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 1.05,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "TE",
    "Name": "Vernon Davis",
    "Salary": 3000,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 1.15,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "TE",
    "Name": "Stephen Anderson",
    "Salary": 2900,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 3.4,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "DST",
    "Name": "Chiefs",
    "Salary": 2900,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 7,
    "teamAbbrev": "KC"
  },
  {
    "Position": "TE",
    "Name": "Vance McDonald",
    "Salary": 2800,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "TE",
    "Name": "David Njoku",
    "Salary": 2800,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 7.85,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "DST",
    "Name": "Chargers",
    "Salary": 2800,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 5.5,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "TE",
    "Name": "Virgil Green",
    "Salary": 2700,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 7.25,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "TE",
    "Name": "Ed Dickson",
    "Salary": 2700,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 2.3,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "TE",
    "Name": "O.J. Howard",
    "Salary": 2700,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 2.7,
    "teamAbbrev": "TB"
  },
  {
    "Position": "DST",
    "Name": "Titans",
    "Salary": 2700,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 5.5,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "TE",
    "Name": "Richard Rodgers",
    "Salary": 2700,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 2.1,
    "teamAbbrev": "GB"
  },
  {
    "Position": "DST",
    "Name": "Bills",
    "Salary": 2600,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 9.5,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "DST",
    "Name": "Panthers",
    "Salary": 2600,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 12.5,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "TE",
    "Name": "Seth DeValve",
    "Salary": 2600,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 8.15,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "TE",
    "Name": "Evan Baylis",
    "Salary": 2600,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "TE",
    "Name": "Will Tye",
    "Salary": 2600,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 3.9,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "TE",
    "Name": "Jonnu Smith",
    "Salary": 2600,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 5.5,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "TE",
    "Name": "Luke Willson",
    "Salary": 2600,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 2.75,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "TE",
    "Name": "Demetrius Harris",
    "Salary": 2600,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 4.75,
    "teamAbbrev": "KC"
  },
  {
    "Position": "TE",
    "Name": "Khari Lee",
    "Salary": 2500,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "TE",
    "Name": "Nick O'Leary",
    "Salary": 2500,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 1.6,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "TE",
    "Name": "Logan Thomas",
    "Salary": 2500,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "BUF"
  },
  {
    "Position": "TE",
    "Name": "A.J. Derby",
    "Salary": 2500,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 3.2,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "TE",
    "Name": "Jeff Heuerman",
    "Salary": 2500,
    "GameInfo": "DEN@BUF 01:00PM ET",
    "AvgPointsPerGame": 2.75,
    "teamAbbrev": "DEN"
  },
  {
    "Position": "TE",
    "Name": "Josh Hill",
    "Salary": 2500,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 2.95,
    "teamAbbrev": "NO"
  },
  {
    "Position": "TE",
    "Name": "Michael Hoomanawanui",
    "Salary": 2500,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0.9,
    "teamAbbrev": "NO"
  },
  {
    "Position": "TE",
    "Name": "Chris Manhertz",
    "Salary": 2500,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CAR"
  },
  {
    "Position": "TE",
    "Name": "Daniel Brown",
    "Salary": 2500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "TE",
    "Name": "Dion Sims",
    "Salary": 2500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 2.55,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "TE",
    "Name": "Adam Shaheen",
    "Salary": 2500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "TE",
    "Name": "Andrew DePaola",
    "Salary": 2500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "TE",
    "Name": "Xavier Grimble",
    "Salary": 2500,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "PIT"
  },
  {
    "Position": "TE",
    "Name": "Levine Toilolo",
    "Salary": 2500,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "TE",
    "Name": "Eric Saubert",
    "Salary": 2500,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "DST",
    "Name": "Falcons",
    "Salary": 2500,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 9,
    "teamAbbrev": "ATL"
  },
  {
    "Position": "TE",
    "Name": "Michael Roberts",
    "Salary": 2500,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "DET"
  },
  {
    "Position": "TE",
    "Name": "Darren Fells",
    "Salary": 2500,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 0.65,
    "teamAbbrev": "DET"
  },
  {
    "Position": "TE",
    "Name": "Randall Telfer",
    "Salary": 2500,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 1.5,
    "teamAbbrev": "CLE"
  },
  {
    "Position": "TE",
    "Name": "Darrell Daniels",
    "Salary": 2500,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "IND"
  },
  {
    "Position": "TE",
    "Name": "Brandon Williams",
    "Salary": 2500,
    "GameInfo": "CLE@IND 01:00PM ET",
    "AvgPointsPerGame": 1.5,
    "teamAbbrev": "IND"
  },
  {
    "Position": "TE",
    "Name": "Kevin McDermott",
    "Salary": 2500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "TE",
    "Name": "David Morgan",
    "Salary": 2500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "TE",
    "Name": "Blake Bell",
    "Salary": 2500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIN"
  },
  {
    "Position": "TE",
    "Name": "Luke Stocker",
    "Salary": 2500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TB"
  },
  {
    "Position": "TE",
    "Name": "Alan Cross",
    "Salary": 2500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 1.6,
    "teamAbbrev": "TB"
  },
  {
    "Position": "TE",
    "Name": "Antony Auclair",
    "Salary": 2500,
    "GameInfo": "TB@MIN 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TB"
  },
  {
    "Position": "TE",
    "Name": "Jacob Hollister",
    "Salary": 2500,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 1.5,
    "teamAbbrev": "NE"
  },
  {
    "Position": "TE",
    "Name": "Dwayne Allen",
    "Salary": 2500,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NE"
  },
  {
    "Position": "TE",
    "Name": "Anthony Fasano",
    "Salary": 2500,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "TE",
    "Name": "MarQueis Gray",
    "Salary": 2500,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "MIA"
  },
  {
    "Position": "TE",
    "Name": "Eric Tomlinson",
    "Salary": 2500,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 4.5,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "TE",
    "Name": "Neal Sterling",
    "Salary": 2500,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 1.8,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "TE",
    "Name": "Jordan Leggett",
    "Salary": 2500,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "TE",
    "Name": "Rhett Ellison",
    "Salary": 2500,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 3,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "TE",
    "Name": "Matt LaCosse",
    "Salary": 2500,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "TE",
    "Name": "Jerell Adams",
    "Salary": 2500,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 2.4,
    "teamAbbrev": "NYG"
  },
  {
    "Position": "TE",
    "Name": "Trey Burton",
    "Salary": 2500,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 1,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "TE",
    "Name": "Brent Celek",
    "Salary": 2500,
    "GameInfo": "NYG@PHI 01:00PM ET",
    "AvgPointsPerGame": 1.05,
    "teamAbbrev": "PHI"
  },
  {
    "Position": "TE",
    "Name": "Beau Brinkley",
    "Salary": 2500,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "TE",
    "Name": "Phillip Supernaw",
    "Salary": 2500,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "TEN"
  },
  {
    "Position": "TE",
    "Name": "Nick Vannett",
    "Salary": 2500,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 1,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "TE",
    "Name": "Tyler Ott",
    "Salary": 2500,
    "GameInfo": "SEA@TEN 04:05PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "SEA"
  },
  {
    "Position": "TE",
    "Name": "Tyler Kroft",
    "Salary": 2500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0.75,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "TE",
    "Name": "C.J. Uzomah",
    "Salary": 2500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "TE",
    "Name": "Ryan Hewitt",
    "Salary": 2500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "TE",
    "Name": "Cethan Carter",
    "Salary": 2500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "TE",
    "Name": "Clark Harris",
    "Salary": 2500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "DST",
    "Name": "Bengals",
    "Salary": 2500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 5.5,
    "teamAbbrev": "CIN"
  },
  {
    "Position": "TE",
    "Name": "Lance Kendricks",
    "Salary": 2500,
    "GameInfo": "CIN@GB 04:25PM ET",
    "AvgPointsPerGame": 1.9,
    "teamAbbrev": "GB"
  },
  {
    "Position": "TE",
    "Name": "Ross Travis",
    "Salary": 2500,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "KC"
  },
  {
    "Position": "TE",
    "Name": "James Winchester",
    "Salary": 2500,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "KC"
  },
  {
    "Position": "TE",
    "Name": "Sean McGrath",
    "Salary": 2500,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 2,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "TE",
    "Name": "Sean Culkin",
    "Salary": 2500,
    "GameInfo": "KC@LAC 04:25PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "LAC"
  },
  {
    "Position": "TE",
    "Name": "Lee Smith",
    "Salary": 2500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0.95,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "TE",
    "Name": "Clive Walford",
    "Salary": 2500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0.85,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "DST",
    "Name": "Raiders",
    "Salary": 2500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 5.5,
    "teamAbbrev": "OAK"
  },
  {
    "Position": "TE",
    "Name": "Niles Paul",
    "Salary": 2500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "TE",
    "Name": "Jeremy Sprinkle",
    "Salary": 2500,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "DST",
    "Name": "Lions",
    "Salary": 2400,
    "GameInfo": "ATL@DET 01:00PM ET",
    "AvgPointsPerGame": 16.5,
    "teamAbbrev": "DET"
  },
  {
    "Position": "DST",
    "Name": "Redskins",
    "Salary": 2400,
    "GameInfo": "OAK@WAS 08:30PM ET",
    "AvgPointsPerGame": 9.5,
    "teamAbbrev": "WAS"
  },
  {
    "Position": "DST",
    "Name": "Texans",
    "Salary": 2300,
    "GameInfo": "HOU@NE 01:00PM ET",
    "AvgPointsPerGame": 4.5,
    "teamAbbrev": "HOU"
  },
  {
    "Position": "DST",
    "Name": "Bears",
    "Salary": 2200,
    "GameInfo": "PIT@CHI 01:00PM ET",
    "AvgPointsPerGame": 3,
    "teamAbbrev": "CHI"
  },
  {
    "Position": "DST",
    "Name": "Jets",
    "Salary": 2100,
    "GameInfo": "MIA@NYJ 01:00PM ET",
    "AvgPointsPerGame": 0,
    "teamAbbrev": "NYJ"
  },
  {
    "Position": "DST",
    "Name": "Saints",
    "Salary": 2000,
    "GameInfo": "NO@CAR 01:00PM ET",
    "AvgPointsPerGame": -1,
    "teamAbbrev": "NO"
  }
]