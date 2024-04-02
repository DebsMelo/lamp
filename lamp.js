const turnOnOff = document.getElementById("turnOnOff");

const lamp = document.getElementById("lamp");

function isLampBroken() {
  return lamp.src.indexOf("broken") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/on.png";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/off.png";
  }
}

function lampBroken() {
  lamp.src = "./img/broken.png";
}

function lampOnOff() {
  if (turnOnOff.textContent == "Turn On") {
    lampOn();
    turnOnOff.textContent = "Turn Off";
  } else {
    lampOff();
    turnOnOff.textContent = "Turn On";
  }
}

turnOnOff.addEventListener("click", lampOnOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);
