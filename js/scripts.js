$(function()  {
  $("#blanks form").submit(function(event) {

      var blanks = ["person1", "person2","animal","exclamation","verb","noun"];

      blanks.forEach(function(blank)  {
        var userInput = $("input#" + blank).val();
        $("." + blank).text(userInput);
      });


      //  var person1Input = $("input#person1").val();
      // debugger;
      // var person2Input = $("input#person2").val();
      // var animalInput = $("input#animal").val();
      // var exclamationInput = $("input#exlamation").val();
      // var verbInput = $("input#verb").val();
      // var nounInput = $("input#noun").val();
      //
      //
      // $(".person1").append(person1Input);
      // $(".person2").append(person2Input);
      // $(".animal").append(animalInput);
      // $(".exclamation").append(exclamationInput);
      // $(".verb").append(verbInput);
      // $(".noun").append(nounInput);
      $("#story").show();
      event.preventDefault();
  });
});
