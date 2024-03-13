class IntroScene extends Scene {
    GenerateObject() {
        this.title = new TextObject("사탕 냠냠", "'meetme", "60px", "#6E314A", width * 0.5, 300, "center");
        this.description = new TextObject("문제를 전부 맞추어 사탕을 받아보아요.", "'meetme", "20px", "#121212", width * 0.5, 345, "center");
        this.gameStartButton = new GameButton("시작", "'meetme", "30px", "#CDCDCD", "#6E314A", "#6E314A", "#CDCDCD", width * 0.2, height - 330, width*0.6, 55, 20);
        this.gameStartButton.Run = () => { sceneManager.ChangeScene(1) };
    }
    Update() {
        this.gameStartButton.Update();
    }
    Render() {
        
        // BG
        ctx.fillStyle = "#F5F5F5";
        ctx.fillRect(0, 0, width, height);

        this.title.Render();
        this.description.Render();
        this.gameStartButton.Render();
    }
}

