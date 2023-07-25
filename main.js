var SpeechRecognition=window.webkitSpeechRecognition;//Reconhece e converte fala em texto
//Chamando Api de reconhecimento de voz
var recognition = new SpeechRecognition();//Criando objeto de reconhecimento de voz

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
//Pegar o resultado salvo na variável recognition e aplicar o que está na função abaixo
recognition.onresult = function(event) { console.log(event); var Content = event.results[0][0].transcript; document.getElementById("textbox").innerHTML=Content; console.log(Content); if(Content =="tire minha selfie") { console.log("tirando selfie --- "); speak(); } }

function speak(){
    //A funcionalidade dessa função speak() é acionar o sistema para dizer o que for escrito dentro 
    //dessa função speak 
    var synth = window.speechSynthesis;//ativando a api que converte texto em fala
    speakData="Tirando sua selfie em 5 segundos"//quando a funcção speak for chamada, ela dirá a frase
    var utterThis = new SpeechSynthesisUtterance(speakData);//converte texto em fala
     synth.speak(utterThis);//passando a var acima para a função speak 
     Webcam.attach(camera); //acionar a camera
    setTimeout(function(){
        take_selfie();
        save();
    },5000)


}
camera=document.getElementById("camera")
//Configurando e acessando a camera no HTMl
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
})

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';

    })
 
}
function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src
    link.href = image;
    link.click();
}