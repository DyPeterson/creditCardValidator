function doubleDigit(number) {
  const numberArray = number.split("");
  numberArray.reverse();
  for (let i = 0; i < numberArray.length; i += 2) {
    numberArray[i] *= 2;
    if (numberArray[i] > 9) {
      numberArray[i] = addDigits(numberArray[i]);
    }
  }
  numberArray.reverse();
  const sum = addDigits(numberArray.join(""));
  const isValid = validateNumber(sum);
  return isValid;
}

function addDigits(number) {
  const numberArray = ("" + number).split("");
  let sum = 0;
  numberArray.forEach(function (num) {
    sum += parseInt(num);
  });
  return sum;
}

function validateNumber(number) {
  const numberArray = ("" + number).split("");
  if (parseInt(numberArray[numberArray.length - 1]) === 0) {
    return true;
  } else {
    return false;
  }
}

function firstDigit(number) {
  const numberArray = ("" + number).split("");
  if (parseInt(numberArray[0]) === 4) {
    return "Visa";
  } else if (parseInt(numberArray[0]) === 3) {
    if (parseInt(numberArray[1]) === 4 || parseInt(numberArray[1]) === 7) {
      return "American Express";
    }
    // return validateLength(number)
    return "No Match";
  } else if (parseInt(numberArray[0]) === 5) {
    return "Mastercard";
  } else if (parseInt(numberArray[0]) === 6) {
    return "Discover";
  } else {
    return "No Match";
  }
}
function validateLength(number) {
  if (number.length > 16 || number.length < 15) {
    return "No Match";
  } else if (number.length === 15) {
    return "American Express";
  } else {
    return "visa mastercard discover";
  }
}

// UI LOGIC
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const number = $("#credit-card-input").val();
    const isValid = doubleDigit(number);
    const company = firstDigit(number);
    $("#valid-output").text("Is A Valid Card Number: " + isValid);
    $("#company-output").text(company);
  });
});
