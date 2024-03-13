class ResultScene extends Scene {
    Awake() {
        this.giftCodeBlockXOffset = 50;
        this.giftCodeBlockIntervalOffset = 2;
        this.giftCodeBlockY = 500;
        this.giftCodeBlockLength = 30;
        
    }
    GenerateObject() {
        this.correctAnswerCountText = new TextObject("맞춘 문제 수", "'meetme", "30px", "#6E314A", width * 0.5, 180, "center");
        this.correctAnswerCount = new TextObject("(-1 / 9)", "'meetme", "30px", "#121212", width * 0.5, 210, "center");
        this.correctAnswerCount.Update = () => {
            this.correctAnswerCount.text = "(" + userAnswerCount + " / " + totalAnswerCount +")";
        }
        this.restartGameButton = new GameButton("다시 시작", "'meetme", "30px", "#CDCDCD", "#6E314A", "#6E314A", "#CDCDCD", width * 0.2, height - 200, width*0.6, 55, 20);
        this.message = new TextObject("글씨글씨", "'meetme", "24px", "#121212", width * 0.5, 240, "center");
        this.message.Update = () => {
            var text = "";
            if(userAnswerCount <= 5) {
                text = "정이에 대해 아는 것이 없군요!";
            }
            else if(userAnswerCount <= 9) {
                text = "아쉽게도 실패 ㅠㅠ^^";
            }
            else {
                text = "축하해요! 사탕 획득!";
            }
            this.message.text = text;
        }
        this.giftCodeMessage = new TextObject("사탕 코드(카카오톡)", "'meetme", "25px", "#121212", width * 0.5, 480, "center");
        this.giftCodeBlocks = [];
        for(var i = 0 ; i < totalAnswerCount ; i++) {
            if(isCorrect[i]) {
                this.giftCodeBlocks.push(new GiftCodeBlock(
                    giftCode[i], "'meetme", "20px", "#CDCDCD", "#6E314A",
                    (this.giftCodeBlockIntervalOffset + this.giftCodeBlockLength) * i + this.giftCodeBlockXOffset,
                    this.giftCodeBlockY,
                    this.giftCodeBlockLength,
                    this.giftCodeBlockLength,
                    this.giftCodeBlockLength * 0.5
                    )
                );
            }
            else {
                this.giftCodeBlocks.push(new GiftCodeBlock(
                    String(i+1), "'meetme", "25px", "#ABABAB", "#DEDEDE",
                    (this.giftCodeBlockIntervalOffset + this.giftCodeBlockLength) * i + this.giftCodeBlockXOffset,
                    this.giftCodeBlockY,
                    this.giftCodeBlockLength,
                    this.giftCodeBlockLength,
                    this.giftCodeBlockLength * 0.5
                    )
                );
            }

            
        }
        this.restartGameButton.Run = () => { sceneManager.ChangeScene(0) };
    }
    Update() {
        this.correctAnswerCount.Update();
        this.message.Update();
        this.restartGameButton.Update();
    }
    Render() {
        
        // BG
        ctx.fillStyle = "#F5F5F5";
        ctx.fillRect(0, 0, width, height);

        this.correctAnswerCountText.Render();
        this.correctAnswerCount.Render();
        this.message.Render();
        this.restartGameButton.Render();
        this.giftCodeMessage.Render();
        for(var i = 0 ; i < totalAnswerCount ; i++) {
            this.giftCodeBlocks[i].Render();
        }
    }
}