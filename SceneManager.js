const Scenes = [new IntroScene(), new InGameScene(), new ResultScene()];
const startSceneIndex = 0;
const fps = 60;

var sceneManager;

class currentScene {
    constructor() {
        this.indexInScenes = startSceneIndex;
        this.scene = Scenes[startSceneIndex];
    }
    ChangeScene(idx) {

        this.scene.Exit();
        if(this.looper != null) {
            clearInterval(this.looper);
        }

        this.indexInScenes = idx;
        this.scene = Scenes[this.indexInScenes];

        this.SceneLoad();

    }
    SceneLoad() {
        
        this.scene.Awake();
        this.scene.GenerateObject();
        this.scene.Start();
        this.looper = setInterval(() => {
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            this.scene.Update();
            this.scene.Render();
        }, 1000 / fps);

    }
}

function Start() {
    SetCanvas();
    sceneManager = new currentScene();
    sceneManager.SceneLoad();
}

window.onload = Start();
