var SpeechRecognition = window.webkitSpeechRecognition ;
var Recognition = new SpeechRecognition() ;

function start() {
document.getElementById("textbox").innerHTML = "" ;
Recognition.start();
}

Recognition.onresult= function (event) {
var content = event.results[0][0].transcript ;
document.getElementById("textbox").innerHTML=content ;
}

function speak(){
var synth = window.speechSynthesis;
speak_data=document.getElementById("textbox").value ;
var utterThis = new SpeechSynthesisUtterence(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
}

Webcam.set({
width:360,
height:250,
image_format : 'png',
png_quality:90
});
camera = document.getElementById("camera");

