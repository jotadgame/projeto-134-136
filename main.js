img = "";
Objects = [];
modelStatus = "";

function preload(){
    img = loadImage('background2.jpg');
}

function setup() {
    canvas = creativeCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded() {
    console.log("Modelo Carregado!")
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}