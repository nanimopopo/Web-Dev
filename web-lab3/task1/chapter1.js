<!DOCTYPE html>
<html>

<body>

  <script>
    alert( "I'm JavaScript!" );
  </script>

</body>

</html>

alert("I'm JavaScript!");

//task 2.4
let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert( admin ); // "John"


let ourPlanetName = "Earth";
let currentUserName = "John";

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?
const AGE = someCode(BIRTHDAY); // make age uppercase?


let name = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1

// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya



let name = prompt("What is your name?", "");
alert(name);

<!DOCTYPE html>
<html>
<body>

  <script>
    'use strict';

    let name = prompt("What is your name?", "");
    alert(name);
  </script>

</body>
</html>


a = 2
b = 2
c = 2
d = 1
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once


let a = 2; // a=4

let x = 1 + (a *= 2); // 5



"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)




let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3



5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false



if ("0") {
  alert( 'Hello' );
} // yes, it will



<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
  </script>


</body>

</html>



let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}



let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}




let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}



alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1 and 2
alert(1 && null && 2); // null
alert( alert(1) && alert(2) ); // 1 then undefined
alert( null || 2 && 3 || 4 ); // 3
if (age >= 14 && age <= 90);
// Variant 1 (using !)
if (!(age >= 14 && age <= 90));

// Variant 2 (without !)
if (age < 14 || age > 90);

if (-1 || 0) alert( 'first' ); // first
if (-1 && 0) alert( 'second' ); // no
if (null || -1 && 1) alert( 'third' ); // third



let userName = prompt("Who's there?", '');

if (userName === 'Admin') {
  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}



let i1 = 3;
while (i1) {
  alert(i1--); // 3, 2, 1 (Last value alerted is 1 because 0 is falsy)
}


let i2a = 0;
while (++i2a < 5) alert(i2a); // 1, 2, 3, 4 


let i2b = 0;
while (i2b++ < 5) alert(i2b); // 1, 2, 3, 4, 5 


for (let i = 0; i < 5; i++) alert(i);   // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert(i);  // 0, 1, 2, 3, 4 


for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i); // 2, 4, 6, 8, 10
  }
}


let i5 = 0;
while (i5 < 3) {
  alert(`number ${i5}!`); // number 0!, number 1!, number 2!
  i5++;
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num); // (Stops when num > 100 OR user hits Cancel/Esc)


let n = 10;
nextPrime: for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  console.log(i); // 2, 3, 5, 7
}




if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}



let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}






function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}


function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function min(a, b) {
  return a < b ? a : b;
}



function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}





function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);