//variables
let input = document.getElementById("input");

let intro = document.getElementById("intro");
let name = document.getElementById("name");
let image = document.getElementById("picture");
let date = document.getElementById("date");

//function
function generateSanrio(){ 

  if(input.value == "1"){
    name.innerHTML = "chi chai monchan";
    date.innerHTML = "january 15th"
    image.src ="https://cdn.glitch.global/3c623a6d-2662-4dfe-a215-bcc1f2a11d23/6ba504fe-2956-47d0-abd3-7bd0c0d03cf9.image.png";
  }
  else if(input.value == "2"){
    name.innerHTML = "pochacco";
    date.innerHTML = "febuary 29th"
    image.src ="https://www.sanrio.co.jp/wp-content/uploads/2022/06/list-pochacco.png";
  }
  else if(input.value == "3"){
    name.innerHTML = "cinnamoroll";
    date.innerHTML = "march 6th"
    image.src ="https://www.sanrio.co.jp/wp-content/uploads/2022/06/mv-cinnamon.png";
  }
    else if(input.value == "4"){
    name.innerHTML = "pompompurin";
    date.innerHTML = "april 16th"
    image.src ="https://www.sanrio.co.jp/wp-content/uploads/2022/06/list-pompompurin.png";
  }
    else if(input.value == "5"){
    name.innerHTML = "nemukko nyako";
    date.innerHTML = "may 25th"
    image.src ="https://static.myfigurecollection.net/upload/entries/1/44020-43a48.jpg";
  }
    else if(input.value == "6"){
    name.innerHTML = "roonroonlulu";
    date.innerHTML = "june 9th"
    image.src ="https://64.media.tumblr.com/1d3c49e5a85c5f8f1f2d9f7f47aaacf8/06b838af1f328cc7-a4/s400x600/0845e446e92fb69e4d7cbbc32590f11944fa5fc6.png";
  }
    else if(input.value == "7"){
    name.innerHTML = "ruby";
    date.innerHTML = "july 29th"
    image.src ="https://static.wikia.nocookie.net/jewelpet/images/2/27/Ruby-vector.svg";
  }
  else if(input.value == "8"){
    name.innerHTML = "hanamaruobake";
    date.innerHTML = "augst 7th"
    image.src ="https://i.pinimg.com/originals/c5/d2/de/c5d2de5542903f44c9d07075fe7bd421.webp";
  }
  else if(input.value == "9"){
    name.innerHTML = "wish me mell";
    date.innerHTML = "september 20th"
    image.src ="https://www.sanrio.co.jp/wp-content/uploads/2022/06/mv-wishmemell.png";
  }
  else if(input.value == "10"){
    name.innerHTML = "chocopanda";
    date.innerHTML = "october 18th"
    image.src ="https://www.sanrio.co.jp/wp-content/uploads/2022/06/list-chocopanda.png";
  }
  else if(input.value == "11"){
    name.innerHTML = "hello kitty";
    date.innerHTML = "november 1st"
    image.src ="https://www.sanrio.co.jp/wp-content/uploads/2022/06/mv-hellokitty.png";
  }
  else if(input.value == "12"){
    name.innerHTML = "pippo";
    date.innerHTML = "december 16th"
    image.src ="https://tiermaker.com/images/template_images/2022/15713467/sanrio-ultimate-character-list-15713467/sanriocharacterspippoimage004.png";
  }
  else{
    intro.innerHTML = "that's not a real month but okay<br><br>your buddy is:"
    name.innerHTML = "gudetama";
    date.innerHTML = "everyday is gudetama's birthday"
    image.src ="https://w7.pngwing.com/pngs/917/919/png-transparent-animal-sitting-on-white-cloth-%E3%81%90%E3%81%A7%E3%81%9F%E3%81%BE-sticker-gudetama-smiley-desktop-wallpaper-emoticon-thumbnail.png";
  }
   
}

