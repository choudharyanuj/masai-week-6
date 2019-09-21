var team_1 = []

class Teams {
    constructor(team_name, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
        this.team_name = team_name;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
        this.p5 = p5;
        this.p6 = p6;
        this.p7 = p7;
        this.p8 = p8;
        this.p9 = p9;
        this.p10 = p10;
        this.p11 = p11;
    }
}

function print_details() {
    var create_team = document.getElementById("create_team").value;
    var create_p1 = document.getElementById("create_p1").value;
    var create_p2 = document.getElementById("create_p2").value;
    var create_p3 = document.getElementById("create_p3").value;
    var create_p4 = document.getElementById("create_p4").value;
    var create_p5 = document.getElementById("create_p5").value;
    var create_p6 = document.getElementById("create_p6").value;
    var create_p7 = document.getElementById("create_p7").value;
    var create_p8 = document.getElementById("create_p8").value;
    var create_p9 = document.getElementById("create_p9").value;
    var create_p10 = document.getElementById("create_p10").value;
    var create_p11 = document.getElementById("create_p11").value;

    var output = new Teams(create_team, create_p1, create_p2, create_p3, create_p4, create_p5, create_p6, create_p7, create_p8, create_p9, create_p10, create_p11)

    var team_choose = document.createElement("option")
    team_choose.innerHTML = output.team_name;
    var select_team = document.getElementById("available_team")
    select_team.appendChild(team_choose)

    // var player_choose1 = document.createElement("option")
    // player_choose1.innerHTML = output.p1;
    // var select_player1 = document.getElementById("available_p1")
    // select_player1.appendChild(player_choose1)

    // var player_choose2 = document.createElement("option")
    // player_choose2.innerHTML = output.p2;
    // var select_player2 = document.getElementById("available_p1")
    // select_player2.appendChild(player_choose2)

    // var player_choose3 = document.createElement("option")
    // player_choose3.innerHTML = output.p3;
    // var select_player3 = document.getElementById("available_p1")
    // select_player3.appendChild(player_choose3)

    // var player_choose4 = document.createElement("option")
    // player_choose4.innerHTML = output.p4;
    // var select_player4 = document.getElementById("available_p1")
    // select_player4.appendChild(player_choose4)

    // var player_choose5 = document.createElement("option")
    // player_choose5.innerHTML = output.p5;
    // var select_player5 = document.getElementById("available_p1")
    // select_player5.appendChild(player_choose5)

    // var player_choose6 = document.createElement("option")
    // player_choose6.innerHTML = output.p6;
    // var select_player6 = document.getElementById("available_p1")
    // select_player6.appendChild(player_choose6)

    // var player_choose7 = document.createElement("option")
    // player_choose7.innerHTML = output.p7;
    // var select_player7 = document.getElementById("available_p1")
    // select_player7.appendChild(player_choose7)

    // var player_choose8 = document.createElement("option")
    // player_choose8.innerHTML = output.p8;
    // var select_player8 = document.getElementById("available_p1")
    // select_player8.appendChild(player_choose8)

    // var player_choose9 = document.createElement("option")
    // player_choose9.innerHTML = output.p9;
    // var select_player9 = document.getElementById("available_p1")
    // select_player9.appendChild(player_choose9)

    // var player_choose10 = document.createElement("option")
    // player_choose10.innerHTML = output.p10;
    // var select_player10 = document.getElementById("available_p1")
    // select_player10.appendChild(player_choose10)

    // var player_choose11 = document.createElement("option")
    // player_choose11.innerHTML = output.p11;
    // var select_player11 = document.getElementById("available_p1")
    // select_player11.appendChild(player_choose11)

    team_1.push(output)
    console.log(team_1)
}