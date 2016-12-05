// name과 weapon을 argument로 받는 warrior factory를 만드세요.
//
// warrior factory는 name과 weapon property를 가진 object를 return해야 합니다.
//
// return 된 warrior object는 name과 weapon을 reference 하는 attack method가 있어야 합니다.
//
// 또한 adventure method는 attack method를 여러 번 invoke 하고 추가 기능으로 다른 것들도 구현해 보세요.


var warrior_factory = function(name, weapon) {

    var warrior = {};

    warroir.name = name;
    warrior.weapon = weapon;

    var attack = function() {
        console.log(this.name + " 가" + this.weapon + " 를 가지고 공격한다.")
    }

    var adventure = function() {
        warrior_factory.attack();
        warrior_factory.attack();
        warrior_factory.attack();
    }
    return warrior = attack();
}
