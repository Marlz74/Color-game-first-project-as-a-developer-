var cards = document.querySelectorAll(".card");
var pBoaard = document.querySelector(".pBoard");
var color = ["red", "blue", "yellow", "blue", "red", "blue", "yellow", "black", "red", "blue", "yellow", "red", "yellow"];
var blueNO = [12, 2, 34, 24, 15, 9, 7];
var redNO = [3, 36, 10, 19, 23, 13, 1];
var yellowNO = [17, 31, 21, 25, 37, 20, 4];
var blackNO = [40, 45, 48, 49, 42, 41, 47];
var dis = [];
var numContent = [];

function resetTime() { reloadTime = 5; }
update();

function update() {
    num = [];
    var pr = randomPicker(redNO, redNO.length, 1);
    var pb = randomPicker(blueNO, blueNO.length, 1);
    var py = randomPicker(yellowNO, yellowNO.length, 1);
    var pbl = randomPicker(blackNO, blackNO.length, 1);
    var his = [];
    for (var c = 0; c < cards.length; c++) {
        var picked = randomPicker(color, 1, 0)[0];
        cards[c].style.backgroundColor = picked;
        his.push(picked);

        if (picked == "red") {
            cards[c].textContent = pr[c];
            num.push(pr[c]);
        } else if (picked == "blue") {
            cards[c].textContent = pb[c];
            num.push(pb[c]);
        } else if (picked == "yellow") {
            cards[c].textContent = py[c];
            num.push(py[c]);
        } else if (picked == "black") {
            cards[c].textContent = pbl[c];
            num.push(pbl[c]);
        }
    }
    (dis.length >= 4) ? dis.shift(): "";
    (numContent.length >= 4) ? numContent.shift(): "";
    numContent.push(num);
    dis.push(his);
    time();
}

function updatePcards() {
    for (var v = 0; v < dis.length; v++) {
        div = document.createElement('div');
        div.setAttribute("class", "pcardBoard");
        var pcards = document.querySelectorAll(".pcardBoard");
        for (b = 0; b < dis[v].length; b++) {
            innerdivs = document.createElement('div');
            innerdivs.setAttribute("class", "previousCards");
            innerdivs.style.backgroundColor = dis[v][b];
            innerdivs.textContent = numContent[v][b];
            div.appendChild(innerdivs);
        }
    }
    pBoaard.appendChild(div);
    (pcards.length > 3) ? RemoveElement(pcards, 1): "";
}

function randomPicker(elem, num, unique) {
    var result = [];
    var counter = 0;
    while (counter < num) {
        var rand = Math.floor(Math.random() * elem.length)
        if (unique == 1) {
            if (result.indexOf(elem[rand]) < 0) {
                result.push(elem[rand]);
                counter++;
            }

        } else {
            if (elem[rand] != "undefined") {
                result.push(elem[rand]);
                counter++;
            }
        }

    }
    return result;
}

function time() {
    resetTime();

    var settime = setInterval(function() {
        var min = parseInt(reloadTime / 60);
        var sec = reloadTime % 60;
        document.querySelector(".m").textContent = min + "m";
        document.querySelector(".s").textContent = sec + "s";
        if (reloadTime <= 0) {
            clearInterval(settime);
            update();
            resetTime();
            updatePcards();
        }
        reloadTime--;
    }, 1000);
}

function RemoveElement(node_list, len) {
    for (i = (node_list.length - 1); i >= 0; i--) {
        (i < len) ? node_list[i].remove(): true;
    }
}