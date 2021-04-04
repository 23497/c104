function submit(){
    url = document.getElementById("url").value;
    document.getElementById("img").src = url;
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelNotLoaded);

function modelLoaded(){
    console.log('model loaded');
}

function check(){
    img = document.getElementById("img");
    classifier.classify(img, gotResult);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = "Object" +results[0].label;
        document.getElementById("rate").innerHTML = "Accuracy" +results[0].confidence;
    }
}