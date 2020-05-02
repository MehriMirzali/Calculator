
function divide(){
  document.getElementById("p1").innerHTML += "/";
}
function sub(){
    document.getElementById("p1").innerHTML += "*";
  }
  function insertmin(){
    document.getElementById("p1").innerHTML +="-";
  }
  function insertp(){
    document.getElementById("p1").innerHTML += "+";
  }
  function modul(){
    document.getElementById("p1").innerHTML += "%";
  }
  function plusminus(){
    document.getElementById("p1").innerHTML += "&#8676;";
  }
  function one(){
    document.getElementById("p1").innerHTML += "1";
  }
  function two(){
    document.getElementById("p1").innerHTML += "2";
  }
  function three(){
    document.getElementById("p1").innerHTML += "3";
  }
  function four(){
    document.getElementById("p1").innerHTML += "4";
  }
  function five(){
    document.getElementById("p1").innerHTML += "5";
  }
  function six(){
    document.getElementById("p1").innerHTML += "6";
  }
  function seven(){
    document.getElementById("p1").innerHTML += "7";
  }
  function eight(){
    document.getElementById("p1").innerHTML += "8";
  }
  function nine(){
    document.getElementById("p1").innerHTML += "9";
  }
  function zero(){
    document.getElementById("p1").innerHTML += "0";
  }
  function common(){
    document.getElementById("p1").innerHTML += ",";
  }
  function clearm(){
    document.getElementById("p2").innerHTML = "";
    document.getElementById("p1").innerHTML = "";
  }
function Count(){
    document.getElementById("p2").innerHTML = eval(document.getElementById("p1").innerHTML )
}