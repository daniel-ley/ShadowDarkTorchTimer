let torchDuration = 60;  //minutes
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

  if (torchStatus == "unlit") {
    torchImage = "img/Torch_0.png";
    return
  }

  if(second == 59){
    minute = minute - 1
    }
  
  if(minute < 0){
    return;
    }
  
  document.getElementById('remaining_time').innerHTML =
    minute + " : " + second;

  manageTorch(minute, second);

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
  if (min == 59 && sec == 59) {
    torchImage.src = "img/Torch_1.png";
  }

  if (min == 45 && sec ==0) {
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
    torchStatus = "unlit";
  };
}

function reset_torch() {
  torchStatus = "burning";
  clock.innerHTML = torchDuration + " : " + "00";
  torchImage.src = "img/Torch_1.png";
}

function lightTorch() {
    torchStatus = "unlit";
    setTimeout(reset_torch,1001)
    setTimeout(torchBurningLoop, 1001);
}