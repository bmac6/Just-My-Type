$(document).ready(function () {
  $("#keyboard-upper-container").hide();
  let sentences = [
    "ten ate neite ate nee enet ite ate inet ent eate",
    "Too ato too nOt enot one totA not anot tOO aNot",
    "oat itain oat tain nate eate tea anne inant nean",
    "itant eate anot eat nato inate eat anot tain eat",
    "nee ene ate ite tent tiet ent ine ene ete ene ate",
  ],
   letterIndex = 0,

   sentenceIndex = 0,

   currentSentence = sentences[sentenceIndex],
   currentLetter = currentSentence[letterIndex];
   let highlighterPosition = 15;
   $("#sentence").append(currentSentence);
   $("#target-letter").append(currentLetter);
  $(document).keydown(function (e) {
    
    
    if (e.keyCode == 16) {
      $("#keyboard-lower-container").hide();
      $("#keyboard-upper-container").show();
    }
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 16) {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();
    }
    let asciiLetter = e.key.charCodeAt(0);
    $(`#${asciiLetter}`).css("background-color", "#f5f5f5");
  });

  $(document).keypress(function (e) {
    $(`#${e.keyCode}`).css("background-color", "yellow");
    if(e.which == e.keyCode){
      // $("#target-letter").html("space");
       $("#yellow-block").css("left", (highlighterPosition += 18), "px");
       $("#feedback").append("<span class='glyphicon glyphicon-ok'></span>")
     }
     else {
       $("#yellow-block").css("left", (highlighterPosition += 18), "px");
       $("#feedback").append("<span class='glyphicon glyphicon-remove'></span>")
     }

  if(e.key === currentLetter){
    letterIndex++;
    currentLetter=currentSentence[letterIndex];
    $("#target-letter").empty();
    
    if (currentLetter === " "){
      $("#target-letter").html("Space");
    }
    
    else{
      $("#target-letter").html(currentLetter);
  }
    }
    if (letterIndex ===currentSentence.length) {
      letterIndex = 0;
      sentenceIndex ++;
      currentSentence = sentences[sentenceIndex];
        }

    if (currentSentence === undefined)
   {}
    

  /*let sentencesIndex = sentences[0] === senctences.length; sentencesIndex++;
  //count= sentencesIndex++; */
});
});
/*target - LetterDiv.text(currentLetter);
    console.log("letter length", letterIndex);
    console.log("sentence length", sentences[sentenceIndex].length);
    $("#yellow-block").css({ left: move }); //moves yellow square
    move += 17.5;*/
    //check for end of sentence
    /*if (letterIndex == sentences[sentenceIndex].length) {
      $("#sentence").empty();
      sentenceIndex++;
      letterIndex = 0;
      move = 17.5;
      $("#sentence").html(sentences[sentenceIndex]);
    //}
    if (letterIndex ===currentSentence.length) {
      sentenceIndex++;
      currentSentence = sentences[sentenceIndex];
      $("#sentence").empty();
      $("#sentence").append(currentSentence);
      $("#target.letter").append(currentLetter);*/
  
    