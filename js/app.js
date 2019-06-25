// console.log("Hello JavaScript!");
var count_round = 0;
var count_win = 0;
var count_player = 10000;
var wage_rate = 4;
for (k = 1; k <= count_player; k++) {
    var c = 0;
    let money = 100000;
    let start_money = money;
    let wage = 1000;
    let round_game = 10000;

    for (i = 1; i <= round_game; i++) {
        let target = Math.floor(Math.random() * 3 + 1);
        money -= wage;
        let select = Math.floor(Math.random() * 3 + 1);
        if (target == select) {
            c++;
            money += (wage * wage_rate);
        }
        if ((money - start_money) > 0) {
            count_win++;
        }
        count_round++;
    }

}


console.log("percentage Simulation for 100 simulations : " + ((count_win / count_round) * 100) + " % Possibility is win");


// console.log("start money : " + start_money);
// console.log("round game : " + round_game);
// console.log("count win : " + c);
// console.log("current  my money : " + money);
// console.log("Profit rate   : " + (money - start_money));