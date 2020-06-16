// Your code here
class Cat {
  constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
   speak(){
    return `${this.name}  meowwwwwwwwwwww`;
  }
}

class Dog {
    constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
   speak(){
    return `${this.name} woof woof`;
  }
  
}

class Bird{
    constructor(name,sex){
    this.name = name;
    this.sex = sex;
  }
  speak(){
  if(this.sex === "male"){
    return `It's me! ${this.name}, the parrot!`
  }
  else{
    return `${this.name} says squawk!`
  }
}
  
}
let  cat = new Cat("Simba", "female");
let dog = new Dog("Rocco", "male");
let bird = new Bird("Pablo", "male");
let bird2 = new Bird("lulu", "female");
 cat.speak();
 dog.speak();
 bird.speak();
 bird2.spak();