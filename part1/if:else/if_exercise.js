var name1 = "사장님, 사모님"
var age = 21;
var a;
var name2 = "미스터, 미스"
var is_member
var thirsty = "우유"
var drink_of_choice = "보리차"

if (prompt("웹사이트 멤버십니까?") == "네" && prompt("나이는요??") >= age){
	alert(name2 + " 환영합니다!")
} else {
	alert(name1 + " 죄송합니다. 가입불가합니다!")
}

if (prompt("목이 마르십니까?") == "네") {
	if(prompt("어떤 음료를 원하세요?") == thirsty){
		window.location = "http://www.naver.com"
	} else {
		alert("네" + name2 + " 님, 지금 즉시 " + drink_of_choice + "를 드리겠습니다.")
	}
} else {
	alert("좋은 시간되시길!")
}

