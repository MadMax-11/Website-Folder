let cl = document.write;

for (let count = 1; count < 101; count++) {
  if (count % 3 === 0 && count % 5 === 0) {
    cl("FizzBuzz");
  } else if (count % 3 === 0) {
    cl("Fizz");
  } else if (count % 5 === 0) {
    cl("Buzz");
  } else {
    cl(count);
  }
}

let name = "Batman";

for (let count = 0; count < name.length; count++) {
  cl = name[count];
}

cl("dont repeat yourself");
cl("dont repeat yourself");
