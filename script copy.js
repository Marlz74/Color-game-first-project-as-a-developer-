var cards = document.querySelectorAll(".card");
// var cb = document.querySelectorAll(".cardBoard");
// console.log(cb);
var color = ["red", "blue", "yellow", "blue", "red", "blue", "yellow", "black", "red", "blue", "yellow", "red", "yellow"];
var blueNO = [12, 2, 34, 24, 15, 9, 7];
var redNO = [3, 36, 10, 19, 23, 13, 1];
var yellowNO = [17, 31, 21, 25, 37, 20, 4];
var blackNO = [40, 45, 48, 49, 42, 41, 47]
var fhis = [];
var dis = [];
var sc = 0;
var ec = 1;
update();

function update() {
    var pr = noPicker(redNO, redNO.length);
    var pb = noPicker(blueNO, blueNO.length);
    var py = noPicker(yellowNO, yellowNO.length);
    var pbl = noPicker(blackNO, blackNO.length);
    var his = [];
    for (var c = 0; c < cards.length; c++) {
        var picked = colorpicker(color, 1);
        cards[c].style.backgroundColor = picked;
        his.push(picked);
        if (picked == "red") {
            cards[c].textContent = pr[c];
        } else if (picked == "blue") {
            cards[c].textContent = pb[c];
        } else if (picked == "yellow") {
            cards[c].textContent = py[c];
        } else if (picked == "black") {
            cards[c].textContent = pbl[c];
        }

    }
    time();
    n = [];
    for (var f = 0; f < 6; f++) {
        n.push(his[f][0]);
    }
    dis.push(n);
    console.log(dis);
    var varr = dis;
    while (sc < ec) {
        // console.log(fhis.length);
        if (fhis.length < 10) {
            fhis[sc] = varr.splice(0, varr.length);
            // console.log("i'm inside IF");
        } else if (fhis.length >= 10) {
            var ls = fhis.length - 1;
            fhis.pop();
            fhis = fhis;
            // console.log("poping");
            fhis[sc] = varr.splice(0, varr.length);
            // console.log(fhis);


        }


        sc++
    }
    ec++;

    // console.log(fhis);

    // generateArray() = dis;

    // console.log(varr);
    // console.log(fhis);
    // console.log(dis);
    // console.log(his);
}
// console.log(generateArray());

function colorpicker(col, no) {
    var result = [];
    var v = 0;
    while (v < no) {
        var rand = Math.floor(Math.random() * col.length)
        if (col[rand] != "undefined") {
            result.push(col[rand]);
            v++;
        }
    }
    return result;
}

function noPicker(elem, number) {
    i = 0;
    result = [];
    while (i < number) {
        rand = Math.floor(Math.random() * elem.length);
        if (result.indexOf(elem[rand]) < 0) {
            result.push(elem[rand]);
            i++;
        }
    }
    return result;
}

function time() {
    var time = new Date();
    var t = time.getTime() + Number(5200);

    var settime = setInterval(function() {
        var checker = new Date().getTime();
        var dif = t - checker;
        var min = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((dif % (1000 * 60)) / (1000));
        document.querySelector(".m").textContent = min + "m";
        document.querySelector(".s").textContent = sec + "s";
        if (dif < 1200) {
            clearInterval(settime);
            update();
        }

    }, 1000)
}


// var ty = [
//     ["a"],
//     ["b"],
//     ["c"],
//     ["d"],
//     ["e"],
//     ["f"],
//     ["g"]
// ];
// console.log(ty.pop());
// console.log(ty);