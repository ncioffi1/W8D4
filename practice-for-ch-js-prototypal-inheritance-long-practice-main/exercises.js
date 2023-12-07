// # Prototypal Inheritance Exercises

// It's time to practice _prototypal inheritance_!

// ## Learning goals

// By the end of this practice, you should be able to

// * Write and explain `Function.prototype.inherits`
//   * Explain what a `Surrogate` class does and why you need it
//   * Explain what the `constructor` property does
//   * Explain what `__proto__` is
//   * Explain what `new` does
//   * Explain what `Object.create` does
// * Test an inheritance implementation

// ## inherits

// You've learned a couple of ways to implement class inheritance in Javascript.
// Let's first look at using a `Surrogate`.

// There are a number of steps:


// * Define a `Surrogate` class
// As already said, don't use __proto__. It's a non-standard property. (It's standardized for JavaScript in browsers now. Still don't use it.) But

// Subclass.prototype = new Superclass(); // Don't do this
// is not a very good method either. What if Superclass expects parameters?

// You have better options.

// ES2015 and above
// class handles all of this plumbing for you; complete example:

class Superclass {
    constructor(superProperty) {
        this.superProperty = superProperty;
    }
    method() {
        console.log("Superclass's method says: " + this.superProperty);
    }
}
class Subclass extends Superclass {
    constructor(superProperty, subProperty) {
        super(superProperty);
        this.subProperty = subProperty;
    }
    method() {
        super.method(); // Optional, do it if you want super's logic done
        console.log("Subclass's method says: " + this.subProperty);
    }
}

Function.prototype.inherits = function () {
  function Surrogate() {};  
  Surrogate.prototype = Superclass.prototype;
  Subclass.prototype = new Surrogate();
  Subclass.prototype.constructor = Subclass;
}
// Function.prototype.inherits = function () {
//     Cat.prototype = Object.create(SuperClass.prototype);  // syntactic sugar for the above 4 lines.
//     Cat.prototype.constructor = Cat;  
// }


// * Set the prototype of the `Surrogate` (`Surrogate.prototype =
//   SuperClass.prototype`)
// * Set `Subclass.prototype = new Surrogate()`
// * Set `Subclass.prototype.constructor = Subclass`

// Write a `Function.prototype.inherits` method that will do this for you. Do not
// use `Object.create` right now; you should deeply understand what the `new`
// keyword does and how the `__proto__` chain is constructed. This will help you in
// the upcoming Asteroids project:

// ```javascript
function MovingObject () {
    function fly() {
      console.log("flying...")
      return "fly"
    }
}

function Ship () {
  function move() {
    console.log("moving...")
    return "move"
  }
}
Ship.inherits(MovingObject);

function Asteroid () {
  function crash() {
    console.log("crashing...")
    return "crash"
  }
}
Asteroid.inherits(MovingObject);

myRock = new Asteroid();
myRock.prototype.crash.bind(rock);
myRock.prototype.crash.bind(this);
// ```

// How would you test `Function.prototype.inherits`? A few specs to consider:

// * You should be able to define methods/attributes on `MovingObject` that ship
//   and asteroid instances can use.
// * Defining a method on `Asteroid`'s prototype should not mean that a ship can
//   call it.
// * Adding to `Ship` or `Asteroid`'s prototypes should not change `MovingObject`'s
//   prototype.
// * The `Ship` and `Asteroid` prototypes should not be instances of
//   `MovingObject`.

// After you have written `Function.prototype.inherits` using the surrogate trick,
// refactor your solution using `Object.create`. Make sure to test that your
// updated solution works.

// You'll be writing an `inherits` method again for Asteroids.
