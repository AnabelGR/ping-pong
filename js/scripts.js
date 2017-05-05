// Back-End Logic
var pingPong = function(number) {
  for (i = 0; i < number + 1; i++); {
    if (number === 0) {
      return ("0");
    }
    else if (number % 15 === 0) {
      return ("P I N G - P O N G !");
    }
    else if (number % 5 === 0) {
      return ("P O N G !");
    }
    else if (number % 3 === 0) {
      return ("P I N G !");
    }
    else if (number) {
      return number;
    } else {
      return ("This is not a valid number.");
      clear;
    }
  }
};

// User Interface Logic
$(document).ready(function() {
  $("form#user-number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    var clear = $("input#number").val('');

    $("div#results").append("<p class='animated zoomInLeft'>" + result + "</p>");
    $("div#results").show();
  });
});
