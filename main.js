//https://teachablemachine.withgoogle.com/models/P1-7SAHPO/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/P1-7SAHPO/model.json",modelready)
}
function modelready(){
    classifier.classify(gotResults)
}
function gotResults(error, result){
    if (error) {
        console.error(error)
    } else {
        console.log(result)
        document.getElementById("result_label").innerHTML = "I can hear - " + result[0].label
        document.getElementById("result_confidence").innerHTML = "Accuracy - " + result[0].confidence
        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)
        document.getElementById("result_label").style.color = "rgb(" + r + ","  + g + ","  + b + ")"
        document.getElementById("result_confidence").style.color = "rgb(" + r + ","  + g + ","  + b + ")"
        img1 = document.getElementById("i1")
        img2 = document.getElementById("i2")
        img3 = document.getElementById("i3")
        img4 = document.getElementById("i4")
        if (result[0].label == "Knock"){
        img1.src = "aliens-01.gif"
        img2.src = "aliens-02.png"
        img3.src = "aliens-03.png"
        img4.src = "aliens-04.png"
        }
        if (result[0].label == "Clap"){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
            }
         if (result[0].label == "Snap"){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
            }        
        if (result[0].label == "Background Noise"){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
            }  

    }
}