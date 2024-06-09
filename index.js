for(var i=0;i<document.querySelectorAll(".whiteKey").length;i++){
  document.querySelectorAll(".whiteKey")[i].addEventListener("click", function(){
    var chosenO=this.querySelector(".circleO");
    btnAni(chosenO);
    var chosen=this.querySelector(".circle");
    btnAni(chosen);
    var audio;
    var keyClicked=this.classList;
    if(keyClicked.contains("c")){
      audio="C4";
    }
    else if(keyClicked.contains("d")){
      audio="D4";
    }
    else if(keyClicked.contains("e")){
      audio="E4";
    }
    else if(keyClicked.contains("f")){
      audio="F4";
    }
    else if(keyClicked.contains("g")){
      audio="G4";
    }
    else if(keyClicked.contains("a")){
      audio="A4";
    }
    else if(keyClicked.contains("b")){
      audio="B4";
    }
    else if(keyClicked.contains("c1")){
      audio="C5";
    }
    audio="Notes/"+audio+".mp3.mp3"
    audio= new Audio(audio);
    audio.play();
  });
}

for(var i=0; i<document.querySelectorAll(".key").length; i++){
  document.querySelectorAll(".key")[i].addEventListener("click", function(){
    var chosenO= this.querySelector(".circleO");
    btnAni(chosenO);
    var chosen= this.querySelector(".circle");
    btnAni(chosen);
    var keyClicked=this.classList;
    var audio;
    if(keyClicked.contains("c")){
      audio="C4";
    }
    else if(keyClicked.contains("d")){
      audio="D4";
    }
    else if(keyClicked.contains("e")){
      audio="E4";
    }
    else if(keyClicked.contains("f")){
      audio="F4";
    }
    else if(keyClicked.contains("g")){
      audio="G4";
    }
    else if(keyClicked.contains("a")){
      audio="A4";
    }
    else if(keyClicked.contains("b")){
      audio="B4";
    }
    else if(keyClicked.contains("c1")){
      audio="C5";
    }
    else if(keyClicked.contains("db")){
      audio="Db4";
    }
    else if(keyClicked.contains("eb")){
      audio="Eb4";
    }
    else if(keyClicked.contains("gb")){
      audio="Gb4";
    }
    else if(keyClicked.contains("ab")){
      audio="Ab4";
    }
    else if(keyClicked.contains("bb")){
      audio="Bb4";
    }
    audio="Notes/"+audio+".mp3.mp3";
    audio= new Audio(audio);
    audio.play();
  });
}

document.addEventListener("keypress", function(){
  keyPress(event.key);
})

function keyPress(key){
  var audio;
  var clicked;
  switch (key){
    case "a":
      audio="C4";
      clicked=document.querySelector(".whiteKey.c");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "s":
      audio="D4";
      clicked=document.querySelector(".whiteKey.d");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "d":
      audio="E4";
      clicked=document.querySelector(".whiteKey.e");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
      case "f":
      audio="F4";
      clicked=document.querySelector(".whiteKey.f");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "g":
      audio="G4";
      clicked=document.querySelector(".whiteKey.g");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "h":
      audio="A4";
      clicked=document.querySelector(".whiteKey.a");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "j":
      audio="B4";
      clicked=document.querySelector(".whiteKey.b");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "k":
      audio="C5";
      clicked=document.querySelector(".whiteKey.c1");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "w":
      audio="Db4";
      clicked=document.querySelector(".key.db");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "e":
      audio="Eb4";
      clicked=document.querySelector(".key.eb");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "t":
      audio="Gb4";
      clicked=document.querySelector(".key.gb");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "y":
      audio="Ab4";
      clicked=document.querySelector(".key.ab");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    case "u":
      audio="Bb4";
      clicked=document.querySelector(".key.bb");
      btnAni(clicked.querySelector(".circleO"));
      btnAni(clicked.querySelector(".circle"));
      break;
    default:
      break;
  }
  audio="Notes/"+audio+".mp3.mp3";
  audio=new Audio(audio);
  audio.play();
}

function btnAni(key){
  key.classList.remove("hidden");
  setTimeout(function(){
    key.classList.add("hidden");
  },1000);
}