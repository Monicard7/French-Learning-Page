
// helper functions
function $(id) {
    return document.getElementById(id);
}

// initialize functions
document.addEventListener("DOMContentLoaded", () => {
    $("btnCheck").addEventListener("click", Check);
    $("btnNew").addEventListener("click", NewQuestion);
    $("btnNew").click();
});
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        $("btnCheck").click();
        $("btnNew").click();
    }
});

// variables
var input;
var question;
var answer;
// var verbs = JSON.parse(verbs);

// functions
function GetQuestion(qP, qV, qN) {
    var p = ["0", "I", "You", "He", "She", "We", "You(all)", "They (m.)", "They (f.)"];

    var pa = ["0", "je", "tu", "il", "elle", "nous", "vous", "ils", "elles"];
    switch (qN) {
        case 0: //positive
            switch (qP) {
                case 1:
                    if (verbs[qV][1][qP].charAt(0) == "a" ||
                        verbs[qV][1][qP].charAt(0) == "e" ||
                        verbs[qV][1][qP].charAt(0) == "i" ||
                        verbs[qV][1][qP].charAt(0) == "o" ||
                        verbs[qV][1][qP].charAt(0) == "u") {
                        question = p[qP].concat(" ", verbs[qV][0][qP], "... ");
                        answer = "J'".concat(verbs[qV][1][qP]);
                    }
                    break;

                default:
                    question = p[qP].concat(" ", verbs[qV][0][qP], "... ");
                    answer = pa[qP].concat(" ",verbs[qV][1][qP]);
                    break;
            }
            break;

        case 1: // negative
            question = p[qP].concat(" not ", verbs[qV][0][qP], "... ");
            answer = pa[qP].concat(" ", verbs[qV][2][qP]);
            break;

        case 2: // question
            question = p[qP].concat(" ", verbs[qV][0][qP], "? ");
            answer = verbs[qV][1][qP].concat(" ", pa[qP], "?");
            break; 
    }

    answer = answer.charAt(0).toUpperCase() + answer.slice(1);
    return question;
}

function Check(input) {
    input = ($("input").value.toString()).toLowerCase();
    let result = input.includes(answer.toLowerCase());

    if (result) {
        $("corr").innerHTML = `<li style="color:MediumSeaGreen;">Good Job! ${question}   =>   ${answer}</li><br />` + $("corr").innerHTML;
    } else {
        $("incorr").innerHTML = `<li>${question}   =>   ${answer}</li><br />` + $("incorr").innerHTML;
    }
}

function NewQuestion() {
    // generate int between 1 and 32
    var maxP = 8; // number of personal pronouns
    var maxV = 22; // number of verbs
    var minV = 19; // starting from 1st verb
    var min = 1;
    var qP = Math.floor(Math.random() * (maxP + 1 - min)) + min;
    var qV = Math.floor(Math.random() * (maxV + 1 - minV)) + minV;
    var qN = Math.floor(Math.random() * (2 + 1 - 0)) + 0;
    var qT;
    //question = GetQuestion(q);

    $("question").innerHTML = "Question: ".concat(GetQuestion(qP, qV, qN));
    $("input").value = "";
}

