
let players = ['LeBron James', 'Kareem Abdul-Jabbar', 'Karl Malone', 'Kobe Bryant', 'Michael Jordan', 'Dirk Nowitzki', 'Wilt Chamberlain', 'Julius Erving', 'Moses Malone', "Shaquille O'Neal", 'Carmelo Anthony', 'Kevin Durant', 'Dan Issel', 'Elvin Hayes', 'Hakeem Olajuwon', 'Oscar Robertson', 'Dominique Wilkins', 'George Gervin', 'Tim Duncan', 'Paul Pierce', 'John Havlicek', 'Kevin Garnett', 'Vince Carter', 'Alex English', 'Rick Barry', 'Reggie Miller', 'James Harden', 'Jerry West', 'Artis Gilmore', 'Russell Westbrook', 'Patrick Ewing', 'Ray Allen', 'Allen Iverson', 'Charles Barkley', 'Robert Parish', 'Adrian Dantley', 'Dwyane Wade', 'Elgin Baylor', 'Stephen Curry', 'DeMar DeRozan', 'Clyde Drexler', 'Chris Paul', 'Gary Payton', 'Larry Bird', 'Hal Greer', 'Walt Bellamy', 'Pau Gasol', 'Bob Pettit', 'David Robinson', 'LaMarcus Aldridge', 'Mitch Richmond', 'Joe Johnson', 'Damian Lillard', 'Tom Chambers', 'Antawn Jamison', 'John Stockton', 'Bernard King', 'Clifford Robinson', 'Walter Davis', 'Dwight Howard', 'Tony Parker', 'Terry Cummings', 'Jamal Crawford', 'Bob Lanier', 'Eddie Johnson', 'Gail Goodrich', 'Reggie Theus', 'Dale Ellis', 'Scottie Pippen', 'Jason Terry', 'Chet Walker', 'Isiah Thomas', 'Bob McAdoo', 'Zach Randolph', 'Mark Aguirre', 'Dolph Schayes', 'Tracy McGrady', 'Glen Rice', 'Dave Bing', 'World B. Free', 'Calvin Murphy', 'Lou Hudson', 'Chris Mullin', 'Lenny Wilkens', 'Bailey Howell', 'Magic Johnson', 'Shawn Marion', 'Rudy Gay', 'Rolando Blackman', 'Otis Thorpe', 'Jason Kidd', 'Earl Monroe', 'Ron Boone', 'Giannis Antetokounmpo', 'Steve Nash', 'Kevin McHale', 'Michael Finley', 'Jack Sikma', 'Kevin Willis', 'Jeff Malone'];
let points = ['39509', '38387', '36928', '33643', '32292', '31560', '31419', '30026', '29580', '28596', '28289', '27751', '27482', '27313', '26946', '26710', '26668', '26595', '26496', '26397', '26395', '26071', '25728', '25613', '25279', '25279', '25212', '25192', '24941', '24842', '24815', '24505', '24368', '23757', '23334', '23177', '23165', '23149', '22632', '22462', '22195', '22041', '21813', '21791', '21586', '20941', '20894', '20880', '20790', '20558', '20497', '20407', '20231', '20049', '20042', '19711', '19655', '19591', '19521', '19485', '19473', '19460', '19419', '19248', '19202', '19181', '19015', '19004', '18940', '18881', '18831', '18822', '18787', '18578', '18458', '18438', '18381', '18336', '18327', '17955', '17949', '17940', '17911', '17772', '17770', '17707', '17700', '17642', '17623', '17600', '17529', '17454', '17437', '17387', '17387', '17335', '17306', '17287', '17253', '17231']
let lower;
let higher;
let player1 = undefined;
let player2 = undefined;
const leftName = document.querySelector('.leftSide .name');
const rightName = document.querySelector('.rightSide .name');
const leftPoints = document.querySelector('.leftSide .points');
// const rightPoints = document.querySelector('.rightSide .points');
const higherButton = document.querySelector('.higher');
const lowerButton = document.querySelector('.lower');
let score = 0;
const scoreDisplay = document.querySelector('.score');
const line3 = document.querySelector('.line3');
let highscore = 0;



const player = players.map((player, index) => ({
    name: player,
    points: points[index]
  }));

function getPlayer() {
    let randomNumber = Math.floor(Math.random() * 101);
    return player[randomNumber];
}

function comparePlayers() {
    if (player1 == undefined) {
        player1 = getPlayer();
        player2 = getPlayer();
    }
    else{
        player1 = player2;
        player2 = getPlayer() ;
    }
    leftName.textContent = player1.name;
    leftPoints.textContent = player1.points;
    rightName.textContent = player2.name;
//    rightPoints.textContent = player2.points;
    line3.textContent = "total points than " + player1.name;


    if(player2.points > player1.points) {
        higher = true;
        lower = false;
    }
    else if(player2.points < player1.points) {
        higher = false;
        lower = true;
    }
    else {
        lower = true;
        higher = true;
    }
}

higherButton.addEventListener('click', function() {
    if(higher) {
        comparePlayers()
        score++;
        scoreDisplay.textContent = "Score: " + score + "   Highscore: " + highscore;

    }
    else {
        if(score > highscore) {
            highscore = score;
        }
        score = 0;
        scoreDisplay.textContent = "Score: " + score + "   Highscore: " + highscore;
        player1 = undefined;
        comparePlayers();
    }
})

lowerButton.addEventListener('click', function() {
    if(lower) {
        score++;
        scoreDisplay.textContent = "Score: " + score + "   Highscore: " + highscore;
        comparePlayers()
    }
    else {
        if(score > highscore) {
            highscore = score;
        }
        score = 0;
        scoreDisplay.textContent = "Score: " + score + "   Highscore: " + highscore;
        player1 = undefined;
        comparePlayers();
    }
})

comparePlayers();

