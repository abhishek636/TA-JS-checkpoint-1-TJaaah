1. Using loops take 10 inputs from user and find the average of all the numbers.

function average () {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = prompt (`Enter ${i} value:`);
    sum += sum;
  }
  return sum/10;
}

2. What will be the output of the code below

```js
let i = 0;
while (i < 3) {
  println('hi');
  i++;
} //error printIn is not defined
```

3. Write a function named `getEvenSum` that accepts a parameter `max`. Return the sum of all even numbers. The value of max should default to 10.

function getEvenSum(max=10){
  sum=0;
  for(let i=0; i<=max; i++){
    if(i%2==0 )
  sum+=i
  }
  return sum
}

getOddSum();

4. Write a function named `getOddSum` that accepts a parameter `max`. Return the sum of all odd numbers. The value of max should default to 10.

function getOddSum(max=10){
  
  sum=0;
  for(let i=0; i<=max; i++){
    if(i%2 !==0 )
  sum+=i
  }
  return sum
}

getOddSum();

5. Write a function named `getProductOfDigits` that accepts a parameter `num`. It returns the product of all the digits in the number.

- If the input value is less than 0 return `not a valid input`
- For example if the input is `123` output should be `6`.

function getProductOfDigits (num){
  let product = 1;
  if(num < 0){
    return `not a valid input`;
    } else {
      while (num != 0){
        product = product * (num % 10);
        num = Math.floor(num/10)
      }
      return product ;
    }
}

6. What will be the output of the following code below in multiple conditions? Explain with reason?

```js
function check(num) {
  if (num > 5) {
    return 'Bigger than 5';
  }

  if (num < 5) {
    return 'Smaller than 5';
  }

  return num;
}

check(10); // 'Bigger than 5' as the value is greater than 5

check(1); // 'Smaller than 5' as the value is smaller than 5

check(5); // 5 as there is no condition for it thus it returns the value of parameter
```

7. What will be the output of the following code given below? Explain the reason?

```js
function getOutput(name) {
  if (name === 'Arya') return 'You are arya';
  if (name === 'John') return 'You are john';
  return 'Who are you';
}

getOutput('Arya'); // 'You are arya' // in above code put the condition if name is strictly equal to 'Arya' the return is 'You are arya';

getOutput('John'); // 'You are john' // in above code put the condition if name is strictly equal to 'john' the return is 'You are john';

getOutput(); // 'Who are you' // if the value of name is blank then in return 'Who are you';

8. What will be the output of the following code given below? Explain the reason?

```js
function getOutput(name) {
  if (name === 'Arya') console.log('You are arya');
  if (name === 'John') console.log('You are john');
  return 'Who are you';
}

getOutput('Arya'); // "You are arya" as per the given condition the output is displayed

getOutput('John'); // "You are john" as per the given condition the output is displayed

getOutput(); // "Who are you" as no value is passed through the parameter the return statement is executed
```

9. Can a function have multiple return statement? Give one example if possible and explain the reason.

10. What is the difference between `for` loop and `while` loop. What are the different place you can use them? Explain with example.

I would use a for loop for the reason that I may KNOW the NUMBER OF ITERATIONS I need to do and I have an INCREMENTING variable which can be handy sometimes.

I would use this loop when I am NOT SURE how many ITERATIONS I might need to carry out.

// for loop
function add(max){
  let sum = 0;
  for (let i = max; i > 0; i--){
    sum += i;
  }
  return sum;
}

//while loop
function add(max){
  let sum = 0, i = max;
  while (i > 0){
    sum += i;
    i--;
  }
  return sum;
}