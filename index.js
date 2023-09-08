//1. Create a JavaScript Object
/*let dog = {
    name: 'Sapphire',
    legs: 4
};*/



//2. Use Dot Notation to Access the Properties of an Object
/*let dog = {
    name: 'Sapphire',
    legs: 4
};

console.log(dog.name);
console.log(dog.numLegs);*/




//3. Create a Method on a Object
/*let dog = {
    name: 'Sapphire',
    legs: 4,
    sayLegs: function() {return "The number of legs is " + dog.numLegs + " legs.";}
};
dog.sayLegs();*/





//4. Make Code More Reusable with the this Keyword
/*let dog = {
    name: 'Sapphire',
    legs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
dog.sayLegs();*/



//5. Define a Constructor Function
/*function Dog(){
    this.name = 'Sapphire';
    this.color = 'Grey';
    this.numLegs = 6;
};*/




//6. Use a Constructor to Crate Objects
/*function Dog(){
    this.name = 'Sapphire';
    this.color = 'Grey';
    this.numLegs = 6;
};
let hound = new Dog();*/



//7. Extend Constructors to Receive Arguments
/*function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("Jaguar", "Pink");*/




//8. Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
let myHouse = new House(10);
myHouse instanceof House;




//9. Understand Own Properties
/*function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Jerry");
  let ownProps = [];

  for(let property in canary) {
      if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
      }
  };*/




  //10. Use Prototype Properties to Reduce Duplicate Code
  /*function Dog(name) {
    this.name = name;
  }
 
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Jake");*/