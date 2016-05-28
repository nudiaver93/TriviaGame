$(document).ready(function() {

var trivia = [
    {
        q: "Which one of these characters is female?",
        a: "Nes",
        b: "Star Fox",
        c: "Link",
        d: "Samus"
    },
    {
        q: "Who saved baby Mario?",
        a: "Wario",
        b: "Luigi",
        c: "Koopa",
        d: "Yoshi"
    },
    {
        q: "Which one of these is a normal-type Pokemon?",
        a: "Pikachu",
        b: "Charizard",
        c: "Mew",
        d: "Jigglypuff"
    },
    {
        q: "Who is the Hero of Time?",
        a: "Captain Falcon",
        b: "Mario",
        c: "Red of Kanto",
        d: "Link"
    },    
    {
        q: "What was the first game to feature Mario as a character?",
        a: "Super Smash Bros",
        b: "Super Mario Bros",
        c: "Yoshi Island",
        d: "Donkey Kong"
    },
    {
        q: "What is the name of Link's horse?",
        a: "Bella",
        b: "Seabiscuit",
        c: "Ponyta",
        d: "Epona"
    },
    {
        q: "Which of these characters is not part of the Nintendo Franchise?",
        a: "Olimar from Pikmin",
        b: "Greninja from Pokemon",
        c: "Ike from Fire Emblem",
        d: "Cloud from Final Fantasy"
    },
    {
        q: "Which of these is not a Nintendo System?",
        a: "N64",
        b: "Gamecube",
        c: "Gameboy Color",
        d: "Dreamcast"
    },
];

var correct = 0;
var incorrect = 0;
var i = 0;
var number = 60;

function game() {
    $('.question').html(trivia[i].q);
    $('.choices').html("<li><input type='radio' name='options'>" + "<p>" + 
        trivia[i].a + "</p>" + "</li><li><input type='radio' name='options'>" + "<p>" + 
        trivia[i].b + "</p>" + "</li><li><input type='radio' name='options'>"  + "<p>" + 
        trivia[i].c + "</p>" + "</li><li><input type='radio' name='options'value='correct'>" + "<p>" + 
        trivia[i].d + "</p>" + "</li>");
}

function results() {
    var percent = correct / 8 * 100;
    var percentFixed = percent.toFixed(0);
    $('.question').hide();
    $('.choices').hide();
    $('.final').html("<p>Correct: " + correct + "</p><br>" + "<p>Incorrect: " + incorrect + 
        "</p><br>" + "<p>Score: " + percentFixed + "%</p>")
}

function run(){
      counter = setInterval(increment, 1000);
    }

function increment(){
      number--
      document.getElementById('timer').innerHTML = ('<h3>' + number + '</h3>')
      if (number === 0){
        alert('Time is up!')
        stop();
        $('#timer').hide();
        results();
      }
    }
function stop(){
      clearInterval(counter);
    }

$('.start').click(function() {
    run();
    game();
    $('.start').hide();
});

$('.choices').on('change', function() {
   if($('input[name=options]:checked', '.choices').val() == 'correct') {
    alert("That is correct!");
    correct ++;
   } else {
    alert("Sorry, that's incorrect.");
    incorrect ++;
   }; 
   i ++;
   if(i == trivia.length) {
        alert("You have completed the trivia game!");
        stop();
        $('#timer').hide();
        results();
   } 
   else {
   game();
    }
});
});