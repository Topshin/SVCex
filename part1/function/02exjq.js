var get_sentence = function() {
    var morning = "good mornig";
    var afterNoon = "hello";
    var untilOne = Math.random();

    if (untilOne <= 0.5) {
        return morning;
    } else {
        return afterNoon;
    }
}
;

$('.new-sentence').html(get_sentence());

var counter = 1;

while (counter <= 10) {
  get_sentence();
  counter++
  console.log(get_sentence());
}

//new_sentence라는 variable 안에 get_sentence에서 return된 value를 저장해주세요.

//jQuery를 사용하여 <p> tag 안에 new_sentence안의 string을 넣어주시고 HTML document의 .new-sentence에 넣어주세요.

//new_sentence variable이 필요 없도록 위 코드들를 refactor 해주세요. refactor란 코드를 조금더 효율적으로 돌아가게 바꾸는 것입니다.

//get_sentence에서 return 되는 value가 정말 random 하다는 것을 확인하기 위하여, while loop을 사용하여 get_sentence를 10번 invoke 하세요.

//같은 value가 10번 연속 return될 확률이 얼마나 되나요?
