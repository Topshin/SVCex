// 여러분은 이제 Function expression을 만들 수 있습니다.
var fn = function () {
  console.log('heeey')
}

// 당연히 invoke할 줄 알고요.
fn()

// 이제 새로운 것을 배우겠습니다.
//유저가 HTML element를 클릭하면 function이 invoke 되도록.

// 아래 코드의 `fn` function을 event handler라고 합니다.
//무엇을 하는 코드일지 생각해보세요.
document.querySelector('#target').addEventListener('click', fn)

// 아래 코드처럼 event handler로 variable 안에 들어 있는 function을 사용하는 거보다
//이름 없는 function 자체를 넣어 사용하는 경우가 많습니다.
document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal')
})
