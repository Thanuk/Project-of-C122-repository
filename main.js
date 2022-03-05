x = 0;
y = 0;

apple = "";
drawn_apple = "";

screen_width = 0; 
screen_height = 0;

to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

function start(){
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event){
  console.log(event); 
  content = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

  to_number = Number(content);
  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "Started drawing apple";
    drawn_apple = "set";
  }
  
  else{
    document.getElementById("status").innerHTML = "The speech has not recognized a number";
  } 
}

function preload(){
  apple = loadImage("apple.png");
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  canvas = createCanvas(screen_width, screen_height - 150);
}

function speak(){
  var synth = window.speechSynthesis;
  speak_data = "";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}

function draw() {
  if(drawn_apple == "set")
  {
    speak_data = document.getElementById("status").innerHTML = to_number + " Apples drawn";
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    drawn_apple = "";
  }

  for (var i = 1; i <= to_number; i++) {
    x = Math.floor(Math.round() * 700);
    y = Math.floor(Math.round() * 400);
    image(apple, x, y, 50, 50);
  }

  speak();
}


