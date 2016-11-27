	
var userName = prompt("이름이 뭐에요?");
document.querySelector('#username').textContent = userName;

var age = prompt("나이는요?");
document.querySelector('#age').textContent = age;

var local = prompt("사는곳은?");
document.querySelector('#where').textContent = local;

var allInform = local + "에 사는" + age + "살 " + userName + "님! " + "만나서 반갑습니다!";
document.querySelector('#inform').textContent = allInform;



var noun1 = "대한민국 만세!";
var adjective2 = "만만세!";
var verb3 = "대~~~한민국!";

document.querySelector('#noun1').textContent = noun1;
document.querySelector('#adjective2').textContent = adjective2;
document.querySelector('#verb3').textContent = verb3;

