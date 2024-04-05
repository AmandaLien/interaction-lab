
let bars = document.querySelectorAll(".rectangle");

let blues = ["lightblue", "cornflowerblue", "midnightblue", "#0F52BA", "#6F8FAF","#0096FF"];

let greens = ["lightgreen", "mediumseagreen", "darkgreen", "olivedrab", "yellowgreen"]

let greys = ["lightgray", "#C0C0C0", "gray", "	#708090", "#000000"];

let ranDeg = Math.floor(Math.random() * (50 - 10) + 10)

let ranNum = Math.floor(Math.random() * (4 - 1) + 1);


if(ranNum == 1){
  for (let bar of bars) {
    bar.style.backgroundColor = blues[Math.floor(Math.random() * blues.length)];
    bar.style.transform = 'rotate(' + Math.floor(Math.random() * (15 + 15) - 15) + 'deg)';
  }
}
if(ranNum == 2){
  for (let bar of bars) {
    bar.style.backgroundColor = greens[Math.floor(Math.random() * greens.length)];
    bar.style.transform = 'rotate(' + Math.floor(Math.random() * (15 + 15) - 15) + 'deg)';
  }
}
if(ranNum == 3){
  for (let bar of bars) {
    bar.style.backgroundColor = greys[Math.floor(Math.random() * greys.length)];
    bar.style.transform = 'rotate(' + Math.floor(Math.random() * (15 + 15) - 15) + 'deg)';
  }
}





