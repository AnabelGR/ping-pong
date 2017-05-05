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
          event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = numberPing(number);

    $("ul#results").append("<li>" + result + "</li>");
    $("ul#result").show();

  });
});
