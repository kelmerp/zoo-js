//------------------------------------------------------------------------------------------------------------------
// YOUR CODE: Create your Zoo "object literal" and Animal "constructor" and "prototypes" here.
//------------------------------------------------------------------------------------------------------------------
var Zoo = {
    init: function() {
      this.animals = animals;
    },
    bipeds: function() {
      this.bipeds = bipeds
    },
    quadrupeds: function(){
      this.quadrupeds = quadrupeds
    }
};

  // init: function(animals){
  //   this.animals = animals;
  // },
  // bipeds: function(){
  //   return bipeds;
  // }
  
function Animal(name, legs) {
  this.name = name;
  this.legs = legs;
}

// function Zoo() {
//   this.bipeds = [];
//   this.quadrupeds = [];
// }

// Zoo.prototype.init = function() {
//   this.animals = animals;
// }

// Zoo.prototype.bipeds = function() {
//   return bipeds;
// }

// Zoo.prototype.quadrupeds = function() {
//   return quadrupeds;
// }


//------------------------------------------------------------------------------------------------------------------
// DRIVER CODE: Do **NOT** change anything below this point. Your task is to implement code above to make this work.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {  
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}

var animals = [
  new Animal("Human", 2),
  new Animal("Monkey", 2),
  new Animal("Kangaroo", 2),
  new Animal("Horse", 4),
  new Animal("Cow", 4),
  new Animal("Centipede", 100)
];

Zoo.init(animals);

assert(
  Zoo.bipeds().length === 3, "the Zoo should have 3 bipeds"
);
assert(
  Zoo.quadrupeds().length === 2, "the Zoo should have 2 bipeds"
);
assert(
  animals[0].identify() === "I am a Human with 2 legs.", "humans have 2 legs"
);
assert(
  animals[2].name === "Kangaroo", "expected 'Kangaroo'"
);
assert(
  animals[0].identify === animals[5].identify, "only one implementation of the identify() function should exist"
);
