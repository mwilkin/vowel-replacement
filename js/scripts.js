$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var vowels =["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];
    var result ="";

    var input = $("#input").val();

    for(var inputIndex=0; inputIndex < input.length; inputIndex++) {
      var isVowel=false;
      for(var vowelIndex=0; vowelIndex < vowels.length; vowelIndex++) {
        if (input[inputIndex] === vowels[vowelIndex]) {
          isVowel = true;
        }
      }
      if (isVowel) result += "-";
      else result += input[inputIndex];
    }
    $("#result").append(result);
    console.log(result);
  });


});
