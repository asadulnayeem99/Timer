const endDate = "8 April 2024 12:00 AM";

// All Selector
document.getElementById("end-date").innerText = endDate;
const title = document.getElementById("title");
const titlebg = document.getElementById("titlebg");
const days = document.getElementById("Days");
const hour = document.getElementById("Hours");
const Minutes = document.getElementById("Minutes");
const Seconds = document.getElementById("Seconds");
const main = document.getElementById("main");
const color = document.getElementById("color");
const rgb = genretColorDecimal();


function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const dif = (end - now) / 1000;
// conversion
  days.value = Math.floor(dif / 3600 / 24);
  hour.value = Math.floor((dif / 3600) % 24);
  Minutes.value = Math.floor((dif / 60) % 60);
  Seconds.value = Math.floor(dif % 60);

  if (dif < 0) {
    clearInterval(x);
    days.value = 0;
    hour.value = 0;
    Minutes.value = 0;
    Seconds.value = 0;
    const title2 = document.getElementById("title2");
    const main2 = document.getElementById("main2");
    main2.remove();
    title.innerHTML = "Eid Mubarak";

    //styling

    title.style.textTransform = "uppercase";
    title.style.backgroundImage =
      "linear-gradient(-225deg, #231557 0%, #44107a 29%, #ff1361 67%, #fff800 100%)";
    title.style.backgroundSize = "auto auto";
    title.style.backgroundClip = "border-box";
    title.style.backgroundSize = "200% auto";
    title.style.color = "#fff";
    title.style.fontFamily = "'Belanosima', sans-serif";
    title.style.backgroundClip = "text";
    title.style.textFillColor = "transparent";
    title.style.webkitBackgroundClip = "text";
    title.style.webkitTextFillColor = "transparent";
    title.style.animation = "textclip 2s linear infinite";
    title.style.display = "block";
    title.style.fontSize = "120px";
    title.style.textAlign = "center";
    setInterval(function () {
      const ran = generateRandomGradient();
      titlebg.style.backgroundImage = ran;
    }, 2000);

    function greetings() {
      const video = document.createElement("video");
      video.controls = true;
      video.src = "./eidi.mp4";
      video.autoplay = true;
      video.loop = true;
      main.append(video);
      setTimeout(function () {
        video.pause();
        video.currentTime = 0;
        title.remove();
        title2.innerHTML = "We are coming back soon";
        // main.style.backgroundImage = "url('./WallpaperDog-10992623.png')"
        video.remove();
        const body = document.querySelector("body");
        body.appendChild(main2);
      }, 60000);
    }
    greetings();
  }
}

// set interval
const x = setInterval(function () {
  clock();
}, 1000);

let dayss = document.getElementById("dayss");
const options = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20, 21,
  22, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
options.forEach((option) => {
  const optionElement = document.createElement("option");
  optionElement.text = option;
  optionElement.value = option;
  dayss.appendChild(optionElement);
});
let year = document.getElementById("year");
const YOptions = [];
for (let i = 2023; i <= 2099; i++) {
  YOptions.push(i);
}
// console.log(YOptions);
// YOptions.forEach((option) => {
//   const opE = document.createElement("option");
//   opE.text = option;
//   opE.value = option;
//   year.appendChild(opE);
// });

function genretColorDecimal() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}


function generateRandomGradient() {
  const color1 = genretColorDecimal();
  const color2 = genretColorDecimal();
  const gradient = `linear-gradient(45deg, ${color1}, ${color2})`;
  return gradient;
}
