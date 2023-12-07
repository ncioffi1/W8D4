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

//   function curriedSum(numArgs) {
//     numbers = [];
//     return function _curriedSum(num) {
//         numbers.push(num);
//         if (numArgs === numbers.length){
//             sum = numbers.reduce((acc, el) => acc + el);
//             return sum;
//         } else {
//             return _curriedSum;
//         }
//     }
//     return _curriedSum;
//   }

//   let sum2 = curriedSum(4);
//   console.log(sum2(5)(30)(20)(1));


  /////////////////////////

  // Function.prototype.curry

    function myCurry(numArgs) {
        numbers = [];
        return function _curry(num) {
            numbers.push(num);
            if (numArgs === numbers.length){
                return numbers;
            } else {
                return _curry;
            }
        }
        return _curry;
    }

    let curry2 = myCurry(3);
    console.log(curry2(5)(6)(7));

// Function.prototype.curry
// Write a method Function.prototype.curry(numArgs). This should return a function that will

// Collect arguments until there are numArgs of them,
// If there are too few arguments still, it should return itself.
// When there are numArgs arguments, it should call the original function.
// Write a version that uses Function.prototype.apply and another one that uses ... (the spread operator).



