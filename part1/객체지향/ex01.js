var person = {
    name: 'shin dong hyun',
    age: 31,
    location: 'korea',
    favorit_food: 'noodle',
    hobbies: ['running', 'soccer', 'basketball'],
    like_color: 'blue',
    cat: {
        name: 'mong_gu',
        hobbies: ['being inert', 'nudgind things off tables'],
    },
    party: function() {
        alert("Party Party !!")
    }
}

person.work = function() {
  console.log("제 이름은 " + this.name + " 입니다.")
  console.log("제 나이는 " + this.age + " 입니다.")
  console.log("제가 기르는 동물 이름은 " + this.cat.name + " 입니다.")
  console.log("제 취미는 " + this.hobbies + "인데" + "그 중 " + this.hobbies[0] +  " 을 제일 좋아합니다.")
}
person.work();

var float_through_life_on_autopilot = function(){
  person.party();
  person.work();
}
float_through_life_on_autopilot();
