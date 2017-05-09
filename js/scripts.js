// Back-End Logic
var pingPong = function(number) {
  var numberArray = [];

  for (var index = 1; index <= number; index += 1) {
    if ((index % 3 === 0) && (index % 5 != 0) && (index % 15 != 0)) {
      numberArray.push("PING</br>");
    } else if ((index % 5 === 0) && (index % 15 != 0)){
      numberArray.push("PONG </br>");
    } else if (index % 15 === 0) {
      numberArray.push("PING-PONG</br>");
    } else
      numberArray.push(index, "</br>");
  };
    return numberArray;
}

// User Interface Logic
$(document).ready(function() {
  $("form#user-number").submit(function(event) {
    // debugger;
      event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
      $(".addResults").append(result);
      $("input#number").val('');
  });
});
