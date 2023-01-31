var questions = [
        {
          question: "What is the capital of France?",
          choices: ["Paris", "London", "Rome", "Madrid"],
          answer: "Paris"
        },
        {
          question: "What is the capital of Germany?",
          choices: ["Berlin", "Paris", "Rome", "Madrid"],
          answer: "Berlin"
        },
        {
            question: "What is the capital of egypt?",
            choices:["Rome","Madrid","Cairo","Beijing"],
            answer: "Cairo"
        },
        {
            question: "What is the capital of Bhutan",
            choices:["Thimphu","Gelephu","Jakar","Paro"],
            answer:"Thimphu"
        },
        {
            question:"What is the capital of Australia",
            choices:["Perth","Adelaide","Canberra","Sydney"],
            answer:"Canberra"
        }

      ];
      
      var currentQuestion = 0;
      var score = 0;
      
      function displayQuestion() {
        var question = questions[currentQuestion];
        document.getElementById("question").innerHTML = question.question;
        var choices = document.getElementById("choices");
        choices.innerHTML = "";
        for (var i = 0; i < question.choices.length; i++) {
          var choice = question.choices[i];
          var li = document.createElement("li");
          li.innerHTML = "<input type='radio' name='choice' value='" + choice + "'>" + choice;
          choices.appendChild(li);
        }
      }
      
      function checkAnswer() {
        var choice = document.querySelector("input[name='choice']:checked").value;
        if (choice === questions[currentQuestion].answer) {
          score++;
          document.getElementById("result").innerHTML = "Correct!";
        } else {
          document.getElementById("result").innerHTML = "Wrong!";
        }
        document.getElementById("score").innerHTML = "Score: " + score;
      }
      
      document.getElementById("submit").onclick = function() {
        checkAnswer();
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayQuestion();
        }
      }
      
      displayQuestion();
      
    