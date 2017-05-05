// Back-End Logic
var pingPong = function(number) {
  for (i = 0; i < number + 1; i++); {
    if (number % 15 === 0) {
      return ("P I N G - P O N G !");
    }
    else if (number % 5 === 0) {
      return ("P O N G !");
    }
    else if (number % 3 === 0) {
      return ("P I N G !");
    } else {
      return number;
    }
  }
};

// User Interface Logic
$(document).ready(function() {
  $("form#user-number").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $("div#results").append("<p>" + result + "</p>");
    $("div#results").show();
  });

  $(function () {
    $('.tlt').textillate();
  });
});
