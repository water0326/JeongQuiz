var startTouchX = 0;
var startTouchY = 0;
var endTouchX = 0;
var endTouchY = 0;
var touchX = 0;
var touchY = 0;
var isTouching = false;

function TouchClear() {
    startTouchX = 0;
    startTouchY = 0;
    endTouchX = 0;
    endTouchY = 0;
    touchX = 0;
    touchY = 0;
}

function handleTouchStart(e) {
    e.preventDefault(); // 기본 터치 이벤트 동작 방지

    var touches = e.changedTouches; // 터치 이벤트 정보 가져오기

    for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        startTouchX = touch.clientX - canvas.offsetLeft; // 터치된 x 좌표
        startTouchY = touch.clientY - canvas.offsetTop; // 터치된 y 좌표
    }
    touchX = 0;
    touchY = 0;
    isTouching = true;
}

function handleTouchEnd(e) {
    e.preventDefault(); // 기본 터치 이벤트 동작 방지

    var touches = e.changedTouches; // 터치 이벤트 정보 가져오기

    for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        endTouchX = touch.clientX - canvas.offsetLeft; // 터치된 x 좌표
        endTouchY = touch.clientY - canvas.offsetTop; // 터치된 y 좌표
    }
    isTouching = false;
}

function handleTouchMove(e) {
    e.preventDefault(); // 기본 터치 이벤트 동작 방지

    var touches = e.changedTouches; // 터치 이벤트 정보 가져오기

    for (var i = 0; i < touches.length; i++) {
        var touch = touches[i];
        touchX = touch.clientX - canvas.offsetLeft; // 터치된 x 좌표
        touchY = touch.clientY - canvas.offsetTop; // 터치된 y 좌표
    }
}

// Canvas에 터치 이벤트 리스너 등록
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchmove', handleTouchMove);
canvas.addEventListener('touchend', handleTouchEnd);