// Back-End Logic
var pingPong = function(number) {
  var numberArray = [];

  for (var index = 1; index <= number; index += 1) {
    if ((index % 3 === 0) && (index % 5 != 0) && (index % 15 != 0)) {
      numberArray.push("PING ");
    } else if ((index % 5 === 0) && (index % 15 != 0) && (index % 3 != 0)){
      numberArray.push("PONG ");
    } else if ((index % 15 === 0) && (index % 5 === 0) && (index % 3 === 0)){
      numberArray.push("PING-PONG ");
    } else
      numberArray.push(index, " ");
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
    // var splitResult = result.split(' ');
      $(".addResults").append(result);
      var clear = $("input#number").val('');
  });
});
