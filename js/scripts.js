$(document).ready(function(){

  $("#fortune-survey").submit(function(event){
    event.preventDefault();

    var scoreCount = 0;
    var checkedCount = 0;

    $("input:checkbox[name=tea]:checked").each(function(){
      checkedCount++;
      if ($(this).hasClass("boring")) {
        scoreCount += 1;
      }
      if ($(this).hasClass("creative")) {
        scoreCount += 2;
      }
      if ($(this).hasClass("rebellious")) {
        scoreCount += 3;
      }
    })

    var finalScore = Math.round(scoreCount/checkedCount);

    if (finalScore === 1){
      $("#boring-result").show();
    } else if (finalScore === 2){
      $("#creative-result").show();
    } else if (finalScore === 3){
      $("#rebellious-result").show();
    } else {
      $("#no-answer").show();
    }

    $("#fortune-result").show();
    $("#fortune-survey").hide();
  });
});
