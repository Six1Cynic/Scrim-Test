let scoreHomeCont = document.getElementById("score-home");
let scoreAwayCont = document.getElementById("score-away");

let scoreHome = 0;

let scoreAway = 0;

function addPoint(desc) {
    
    if(desc === "home") {
         scoreHome++;
         scoreHomeCont.textContent = scoreHome;
    } else {
          scoreAway++;
         scoreAwayCont.textContent = scoreAway;
    }
   
      if(scoreHome > 10) {
       scoreHomeCont.textContent = "WINNER";
       scoreAwayCont.textContent = "GAME OVER"
   } else if((scoreAway > 10)){
      scoreHomeCont.textContent = "GAME OVER";
       scoreAwayCont.textContent = "WINNER"
   }
    
}

function addTwoPoints(desc) {
    
    if(desc === "home") {
         scoreHome += 2;
         scoreHomeCont.textContent = scoreHome;
    } else {
          scoreAway += 2;
         scoreAwayCont.textContent = scoreAway;
    }
   
      if(scoreHome > 10) {
       scoreHomeCont.textContent = "WINNER";
       scoreAwayCont.textContent = "GAME OVER"
   } else if((scoreAway > 10)) {
      scoreHomeCont.textContent = "GAME OVER";
       scoreAwayCont.textContent = "WINNER"
   }
}

function addThreePoints(desc) {
    if(desc === "home") {
         scoreHome += 3;
         scoreHomeCont.textContent = scoreHome;
    } else {
          scoreAway += 3;
         scoreAwayCont.textContent = scoreAway;
    }
    
      if(scoreHome > 10) {
       scoreHomeCont.textContent = "WINNER";
       scoreAwayCont.textContent = "GAME OVER"
   } else if((scoreAway > 10)) {
      scoreHomeCont.textContent = "GAME OVER";
       scoreAwayCont.textContent = "WINNER"
   }
}

function reset() {
    scoreHome = 0;
    scoreAway = 0;
    
    scoreHomeCont.textContent = "";
    scoreAwayCont.textContent = "";
}

setTimeout(reset,"5000");