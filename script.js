var i = 0;
var j = 0;

var randomNum = Math.floor(Math.random() * (list.length - 1));

function randomize(word) {
    if (word == "startingWord") {
        document.getElementById("startingLink").innerHTML = "&nbsp";
        document.getElementById("startingLink").style.visibility= "visible";
    }

    disableBtns();
    if (i < 3) {
        setTimeout(function () {
            document.getElementById(word).innerHTML = list[j];
            j++;
            if (j < list.length) {
                randomize(word);
            } else {
                i++;
                j = 0;
                randomize(word);
            }
        }, 50);
    } else {
        var randomWord = list[randomNum];
        document.getElementById(word).innerHTML = randomWord;
        document.getElementById("startingLink").style.visibility= "visible";

        //reset
        i = 0;
        j = 0;
        randomNum = Math.floor(Math.random() * (list.length - 1));
        enableBtns();

        if (word == "startingWord"){
            document.getElementById("startingLink").innerHTML = "Link to start";
            document.getElementById("startingLink").setAttribute("href", "https://genshin-impact.fandom.com/wiki/" + randomWord);
        }
    }
}

function disableBtns() {
    document.getElementById("startBtn").disabled = true;
    document.getElementById("endBtn").disabled = true;
}

function enableBtns() {
    document.getElementById("startBtn").disabled = false;
    document.getElementById("endBtn").disabled = false;
}