var n = 7;
var counter = 1;
var sum = 1 ;
var def = 1 ;

while(counter <= n){
	sum = sum * counter;
	counter++
}
console.log(sum);

document.querySelector('#number_explain').innerHTML = "n 은 " + "1 부터" + n + "까지의 곱입니다." 
document.querySelector('#number_value').innerHTML = "결과 전체의 곱은" + sum + "입니다."