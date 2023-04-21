let torchDuration = 1;  //minutes
let torchStatus = "unlit";
let torchImage = document.getElementById("torchImage");
let lightButton = document.getElementById("lightButton");
let clock = document.getElementById('remaining_time');

clock.innerHTML = torchDuration + " : " + "00";
lightButton.addEventListener("click", lightTorch);
torchImage.src = "img/Torch_0.png";


function torchBurningLoop() {
  let presentTime = document.getElementById('remaining_time').innerHTML;
  let timeArray = presentTime.split(" : ");
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

  setTimeout(torchBurningLoop, 1000);

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
  if (min == 0 && sec == 59) {
    torchImage.src = "img/Torch_1.png";
  }

  if (min == 0 && sec ==45) {
    torchImage.src = "img/Torch_2.png";
  };

  if (min == 0 && sec == 30) {
    torchImage.src = "img/Torch_3.png";
  };

  if (min == 0 && sec == 15) {
    torchImage.src = "img/Torch_4.png";
  };

  if (min == 0 && sec == 10) {
    torchImage.src = "img/Torch_5.png";
  };

  if (min == 0 && sec == 0) {
    torchImage.src = "img/Torch_6.png";
  };
}


function lightTorch(){
  if (torchStatus == "unlit" || clock.innerHTML == "00 : 00") {
  clock.innerHTML = torchDuration + " : " + "00";
  torchStatus = "burning";
  torchImage.src = "img/Torch_1.png";
  torchBurningLoop();
  } else {
  clock.innerHTML = torchDuration + " : " + "00";
  torchImage.src = "img/Torch_1.png";
  }
}