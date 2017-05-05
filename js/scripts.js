// Back-End Logic
var numberPing = function(number) {
  if (number % 15 === 0) {
    return ("ping-pong");
  }
  else if (number % 5 === 0) {
    return ("pong");
  }
  else if (number % 3 === 0) {
    return ("ping");
  } else {
    return number;
  }
};

// User Interface Logic
$(document).ready(function() {
  $("form#user-number").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = numberPing(number);

    $("ul#results").text(result);
    $("ul#result").show();
      event.preventDefault();
  });
});
