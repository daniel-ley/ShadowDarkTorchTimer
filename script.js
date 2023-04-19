let torchDuration = 60;  //minutes
var appStatus = "running";
let torchImage = document.getElementById("torchImage");
let lightButton = document.getElementById("lightButton");
let clock = document.getElementById('remaining_time');


clock.innerHTML = torchDuration + " : " + "00";
lightButton.addEventListener("click", reset);
torchImage.src = "img/Torch_1.png";

startCountdown();

function startCountdown() {
  // if (appStatus == "stopped") {
  //   return
  // }
  let presentTime = document.getElementById('remaining_time').innerHTML;
  let timeArray = presentTime.split(/[ : ]+/);
  let minute = timeArray[0];
  let second = checkSecond((timeArray[1] - 1));

  manageTorch(minute, second);

  if(second == 59){
    minute = minute - 1
    }
  
  if(minute < 0){
    return;
    }
  
  document.getElementById('remaining_time').innerHTML =
    minute + " : " + second;

  setTimeout(startCountdown, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec
    };
  if (sec < 0) {
    sec = "59"
    };
  return sec;
}

function manageTorch(min, sec) {
  if (min == 45 && sec == 0) {
    torchImage.src = "img/Torch_2.png";
  };

  if (min == 30 && sec == 0) {
    torchImage.src = "img/Torch_3.png";
  };

  if (min == 15 && sec == 0) {
    torchImage.src = "img/Torch_4.png";
  };

  if (min == 0 && sec == 10) {
    torchImage.src = "img/Torch_5.png";
  };

  if (min == 0 && sec == 0) {
    torchImage.src = "img/Torch_6.png";
  };
}


function reset(){
  // appStatus = "stopped";
  torchImage.src = "img/Torch_1.png";
  document.getElementById('remaining_time').innerHTML =
    torchDuration + " : " + "00";
}

