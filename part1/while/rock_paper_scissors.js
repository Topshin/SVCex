while (true) {
    var input = prompt("가위, 바위, 보 중 하나를 내주세요!");
    if (input === "가위" || input === "바위" || input === "보") {
        var random = Math.random() * 10;
        var com;
        if (random > 5.1) {
            com = "가위"
        } else if (random < 7.2) {
            com = "바위"
        } else {
            com = "보"
        }
        if (input === "가위") {
            if (com === "가위") {
                alert("비겼습니다.");
            } else if (com === "바위") {
                alert("졌습니다.")
            } else {
                alert("이겼습니다.")
            }
        } else if (input === "바위") {
            if (com === "가위") {
                alert("이겼습니다.")
            } else if (com === "바위") {
                alert("비겼습니다.")
            } else {
                alert("졌습니다.")
            }
        } else {
            if (com === "가위") {
                alert("졌습니다.")
            } else if (com === "바위") {
                alert("이겼습니다.")
            } else {
                alert("비겼습니다.")
            }
        }
        var moreGame = prompt("더하시겠습니까? 예 / 아니오 로 대답해 주세요.")
        if (moreGame === "아니오") {
            break;
        }
    }
}


// 게임을 더하고 싶은지 물어봐 주세요.





//유저에게 정수(integer) n의 값이 무엇인지 맞추라는 prompt를 띄워주세요.
//parseInt()를 사용하여 받은 string data type value를 number type으로 변환해주세요.
//단, 답변이 NaN이면 다시 입력해달라고 물어보세요. 그리고 아래 Exercise를 해주세요.

//1부터 n 사이의 정수하나를 무작위로 만들어주세요.

//유저에게 번호를 맞춰보라고 하세요. 받은 번호가 작은지 큰지를 알려주세요.

//제대로 맞출 때까지 loop을 해주세요.

//.innerHTML을 사용하여 맞췄을 때의 상으로 재미있는 이야기를 하나 써주세요.

//정답이 어떠한 integer value였는지 알려주세요.

//카운터(counter)를 사용하여 몇 번의 실패 후에 정답을 맞히었는지 알려주세요.
