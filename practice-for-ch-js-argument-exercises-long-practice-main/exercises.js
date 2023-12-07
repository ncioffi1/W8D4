// SUM

function sum() {
    mySum = 0; 
    for(i = 0; i < arguments.length; i++){
       mySum += arguments[i];
    }
     return mySum;
}

function sumv2(...args) {
    mySum = 0;
    for (const arg of args) {
        mySum += arg
    }
    return mySum;
}

// console.log(sum(1, 2, 3));
// console.log(sumv2(1, 2, 3));

// BIND


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
}
  
class Dog {
    constructor(name) {
      this.name = name;
    }
}
  
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind = function (ctx, ...bindTimeArguments) {
    let that = this;

    console.log(bindTimeArguments.length);
    if (bindTimeArguments.length === 2)
        return function() {
            return that.call(ctx, ...bindTimeArguments);
        }
    else if (bindTimeArguments.length === 0){
        return function(...myArgs) {
            return that.call(ctx, ...myArgs);
        }
    }
    else if (bindTimeArguments.length === 1){
        return function(...myArgs) {
            return that.call(ctx, ...bindTimeArguments, ...myArgs);
        }
    }
}

// markov.says("meow", "Ned");
// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
  /////////////////////////

  // CURRIEDSUM

  function curriedSum(numArgs) {
    numbers = [];
    sum = 0;
    return function _curriedSum(num) {
        numbers.push(num);
        if (numArgs === numbers.length){
            sum = numbers.reduce((acc, el) => acc + el);
            return sum;
        } else {
            return _curriedSum();
        }
    }
  }


  console.log(curriedSum(2)(1))



