class InGameScene extends Scene {
    Awake() {
        DataClear();
    }
    GenerateObject() {
        this.currentQuestion = new TextObject("9문제 중 0번째 문제", "'meetme", "20px", "#121212", width * 0.5, 200, "center");
        this.currentQuestion.Update = () => { 
            this.currentQuestion.text = totalAnswerCount + "문제 중 " +  currentQuestionNumber + "번째 문제";
        };
        this.questionContent = new TextObject("문제 내용", "'meetme", "30px", "#6E314A", width * 0.5, 240, "center");
        this.questionContent.Update = () => {
            this.questionContent.text = questions[currentQuestionNumber - 1].content;
        };
        this.choice1Button = new GameButton("선택지 1번", "'meetme", "26px", "#CDCDCD", "#6E314A", "#6E314A", "#CDCDCD", width * 0.2, height - 400, width*0.6, 44, 20);
        this.choice1Button.OnUpdate = () => {
            this.choice1Button.text = questions[currentQuestionNumber - 1].choice1;
        }
        this.choice1Button.Run = () => {
            userChoice = 1;
            this.AnswerCheck();
        };
        
        this.choice2Button = new GameButton("선택지 2번", "'meetme", "26px", "#CDCDCD", "#6E314A", "#6E314A", "#CDCDCD", width * 0.2, height - 340, width*0.6, 44, 20);
        this.choice2Button.OnUpdate = () => {
            this.choice2Button.text = questions[currentQuestionNumber - 1].choice2;
        }
        this.choice2Button.Run = () => {
            userChoice = 2;
            this.AnswerCheck();
        };
        this.choice3Button = new GameButton("선택지 3번", "'meetme", "26px", "#CDCDCD", "#6E314A", "#6E314A", "#CDCDCD", width * 0.2, height - 280, width*0.6, 44, 20);
        this.choice3Button.OnUpdate = () => {
            this.choice3Button.text = questions[currentQuestionNumber - 1].choice3;
        }
        this.choice3Button.Run = () => {
            userChoice = 3;
            this.AnswerCheck();
        };
    }
    Update() {
        this.currentQuestion.Update();
        this.questionContent.Update();
        this.choice1Button.Update();
        this.choice2Button.Update();
        this.choice3Button.Update();
    }
    Render() {
        
        // BG
        ctx.fillStyle = "#F5F5F5";
        ctx.fillRect(0, 0, width, height);

        this.currentQuestion.Render();
        this.questionContent.Render();
        this.choice1Button.Render();
        this.choice2Button.Render();
        this.choice3Button.Render();

        
    }
    AnswerCheck() {
        if(userChoice == questions[currentQuestionNumber - 1].answerChoice || questions[currentQuestionNumber - 1].answerChoice == 4) {
            userAnswerCount++;
            isCorrect[currentQuestionNumber - 1] = true;
        }
        if(currentQuestionNumber == totalAnswerCount) {
            sceneManager.ChangeScene(2);
        }
        else {
            currentQuestionNumber++;
        }
    }
}