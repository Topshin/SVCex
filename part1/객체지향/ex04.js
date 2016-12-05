var dog = {
        name: 'mong_gu',
        location: 'seoul',
        party: function() {
            console.log(this.name + " 가 미친듯이 춤을 춥니다.")
        },
        favorite_food: ['noddle', 'rice'],
        eat: function() {
            console.log(this.name + "는" + this.favorite_food[1] + "을" + "먹습니다.")
            this.hungry = false;
        },
        hungry: true,
        go_to_park: function() {
            this.location = 'Park'
            this.hungry = true
        }
      }
      dog.party();
      dog.eat();
      dog.go_to_park();
