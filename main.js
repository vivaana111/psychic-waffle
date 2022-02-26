Webcam.set({
    width:350,
    height :300,
    image_format : 'png',
    png_quality:90
})
camera = document.getElementById("camera") ;
Webcam.attach( '#camera');

function take_snapshot()
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>' ;

        }) ;
    }
    console.log("ml5 version:", ml5.version) ;
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vA1ZkixJa/model.json' , modelLoaded);

    function modelLoaded(){
        console.log('Model loaded ')
        }
function speak(){
          speak_data_1 = "The first prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 );
    synth.speak(utterThis);
      }

        function check()
        {
          img = document.getElementById('captured_image');
          classifier.classify(img, gotResult);
        }
      
      function gotResult(error, results) {
        if (error) {
          console.error(error);
          
        } 
        else {
          console.log(results);
          document.getElementById("result_object_name").innerHTML = results[0].label;
          prediction_1= results[0].label;
          gesture = results[0].label;
          speak()
          
          if(gesture == "good job 😛👍")

          {
            toSpeak = "Well Done , you have done a great job !";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
          }
          else if(gesture == "victory ✌️")
          {
            toSpeak = "That was a marvelous victory";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
          }
          else if(gesture == "superb 👌")
          {
            toSpeak = "Superb ";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
          }
      
          speak();
        }
      }
      
      
      
      
      
      