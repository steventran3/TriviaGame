// Global Variables and Functions
// -----------------------------------------------------
var questions = [{
  question: "How many championships does the LA Lakers have?",
  answers: [16, 13, 10, 1],
  correctAnswer: 16
}, {
  question: "How many rings does Kobe have?",
  answers: [5, 4, 6, 7],
  correctAnswer: 5
}, {
  question: "Who did the Lakers draft in the 2017 NBA draft",
  answers: ["Malik Monk", "Lavar Ball", "Steven Tran", "Not Listed"],
  correctAnswer: "Not Listed"
}, {
  question: "What colors are the Lakers?",
  answers: ["Purple and Silver", "Purple and Gold", "Black and red", "None of the above"],
  correctAnswer: "Purple and Gold"
}, {
  question: "How many games did the Lakers win last year in the regular season?",
  answers: [17, 25, 15, 45],
  correctAnswer: 17
}, {
  question: "Who did the Lakers draft for the 27th pick?",
  answers: ["Kyle Kuzma", "Kobe Bryant", "Andrew Bynum", "Lonzo Ball"],
  correctAnswer: "Kyle Kuzma"
}, {
  question: "How many points did Kobe score for his final game?",
  answers: [61, 65, 60, 55],
  correctAnswer: 60
}, {
  question: "Where was the Lakers originally from?",
  answers: ["Minneapolis", "Always from LA", "Boston", "Cheesecake Factory"],
  correctAnswer: "Minneapolis"
}];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function(){
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0){
      console.log("Time is up");
      game.done();
    }
  },
  // Help - I don't understand this code
  start: function(){
    timer = setInterval(game.countdown, 1000);
    $("#subwrapper").html("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>")
    $("#start").remove();
    for (var i = 0; i < questions.length; i++){
      $("#subwrapper").append("<h2>" + questions[i].question + "</h2>")
      for (var j = 0; j < questions[i].answers.length; j++){
        $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
      }
    }
    $("#subwrapper").append("<br><button id='end'>Done!</button>"); 
  },
  // Help - I don't understand this code
  done: function(){
    $.each($("input[name='question-0']:checked"), function(){
      if($(this).val()==questions[0].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function(){
      if($(this).val()==questions[1].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function(){
      if($(this).val()==questions[2].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function(){
      if($(this).val()==questions[3].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function(){
      if($(this).val()==questions[4].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function(){
      if($(this).val()==questions[5].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function(){
      if($(this).val()==questions[6].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function(){
      if($(this).val()==questions[7].correctAnswer){
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
  // Help - I don't understand this code - why use this? What is subwrapper h2?
  result: function(){
    clearInterval(timer);
    $("#subwrapper h2").remove();
    $("#subwrapper").html("<h2>All Done!</h2>");
    $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
}

// Main Process
// -----------------------------------------------------
$("#start").on("click", function(){
  game.start();
});

$(document).on("click", "#end", function(){
  game.done();
});

