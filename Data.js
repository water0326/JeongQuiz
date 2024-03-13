var userAnswerCount = 0;
var currentQuestionNumber = 1;
var userChoice = 0;
const totalAnswerCount = 10;
const giftCode = "SENU9F4V7M";
var isCorrect = [false, false, false, false, false, false, false, false, false, false];
const questions = [
    {
        content: "정이가 가장 좋아하는 계절은?",
        choice1: "봄",
        choice2: "가을",
        choice3: "겨울",
        answerChoice: 1
    },
    {
        content: "정이가 가장 좋아하는 숫자는?",
        choice1: "2",
        choice2: "7",
        choice3: "10",
        answerChoice: 2
    },
    {
        content: "정이가 가장 좋아하는 음식은?",
        choice1: "스파게티",
        choice2: "양념게장",
        choice3: "아구찜",
        answerChoice: 1
    },
    {
        content: "정이의 라면 취향은?",
        choice1: "푹 끓인 라면",
        choice2: "적당한 라면",
        choice3: "꼬들한 라면",
        answerChoice: 3
    },
    {
        content: "누나랑 가장 데이트 가고 싶은 곳은?",
        choice1: "제주도",
        choice2: "일본",
        choice3: "누나가 가고 싶은 곳",
        answerChoice: 1
    },
    {
        content: "정이의 장래희망이 아니었던 것은?",
        choice1: "축구 선수",
        choice2: "수학 선생님",
        choice3: "프로게이머",
        answerChoice: 3
    },
    {
        content: "정이의 신발 사이즈는?",
        choice1: "285",
        choice2: "290",
        choice3: "300",
        answerChoice: 2
    },
    {
        content: "정이가 키운 적 있는 동물은?",
        choice1: "병아리",
        choice2: "강아지",
        choice3: "도마뱀",
        answerChoice: 1
    },
    {
        content: "정이가 가장 키우고 싶어하는 견종은?",
        choice1: "골든 리트리버",
        choice2: "시고르자브종",
        choice3: "치와와",
        answerChoice: 2
    },
    {
        content: "정이가 누나를 좋아하는 이유는?",
        choice1: "예뻐서",
        choice2: "귀여워서",
        choice3: "고양이 같아서",
        answerChoice: 4
    }

]

function DataClear() {
    userAnswerCount = 0;
    currentQuestionNumber = 1;
    userChoice = 0;
    isCorrect = [false, false, false, false, false, false, false, false, false, false];
}