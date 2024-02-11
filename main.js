var cat = 0;
var dog = 0;
var lion = 0;
var cow = 0;
var background_noise = 0;
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/e7aUfPGsI/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("results_label").innerHTML = 'Audio detected - '+
        results[0].label;
        document.getElementById("results_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("image");

        if(results[0].label == "dog"){
            img.src = "dog.png";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Audio - "+ dog;
        }
        else if(results[0].label == "cat"){
            img.src = "cat.png";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Audio - "+ cat;
        }
        else if(results[0].label == "lion"){
            img.src = "lion (2).png";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Audio - "+ lion;
        }
        else if(results[0].label == "cow"){
            img.src = "cow.png";
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Audio - "+ cow;
        }
        else{
            img.src = "image-removebg-preview (2).png";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Audio - "+ background_noise;
        }
    }
}