var FizzBuzz = function(max) {
  for (var i = 0; i <= max; i++) {
    var result = "";

    if (i % 3 == 0) {
      result += "fizz";
    }
    if (i % 5 == 0) {
      result += "buzz";
    }
    if (result === "") {
      console.log(i);
    } else {
      console.log(result);
    }
  }
}

FizzBuzz(1000);
