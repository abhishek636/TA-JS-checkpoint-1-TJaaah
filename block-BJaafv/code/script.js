// first
function sum(a, b) {
    return a + b;
  } // if we call this function the output of this function is defined.
  
  // second
function sum(a, b) {
    console.log(a + b);
  } // if we call this function the output of this function in undefined.


  //If we store the returned value of both functions above in variable `first` and `second` what will be the value of `first` and `second`.

  const first = (a,b) => {
    return a + b;
  } // value of first (a,b) => { return a + b; }
    


  const second = (a, b) => {
    console.log(a + b);
  } // value of first (a,b) => { console.log(a + b);}


  //What will be the output when you call above `sum` function (first) with three parameter like `sum(12, 24, 35)`. Explain why?

  // first
function sum(a, b) {
    return a + b;
  }

  sum(12, 24, 35);// 36 // when we call the above `sum` function (first) with three parameters like `sum(12, 24, 35)` the output will be displayed is 36 becouse in function be can take only two parameter a,b and in calling a finction we placed three parameter.

//  Can you store the first `sum` function in a variable named `add`. If yes why? If no why?
  
const add = function sum(a, b) {
    return a + b;
  }  // yes we store the first sum function in a variable named `add` by using Anonymous function expression.


 // Declare a function named `sayHello` the accepts a parameter `name` and returns the name like `Hello Arya`.
  function sayHello(name){
    return `Hello` + " " + name ;
  }
