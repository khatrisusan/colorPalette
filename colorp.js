"use strict"
window.addEventListener("DOMContentLoaded", init);

function init(){
    console.log("init");
    document.querySelector("input").addEventListener("change", addColor)
}
function addColor(){
    console.log(this.value);
    let color = document.querySelector(".colorContainer3");
    let hex = document.querySelector(".hex3");
    let rgb = document.querySelector(".rgb3");
    let hsl = document.querySelector(".hsl3");
    color.style.backgroundColor = this.value;
    hex.textContent = this.value;
    let values = this.value;
   let r,g,b;
    r = parseInt(values[1].toString() + values[2].toString(), 16);
    g = parseInt(values[3].toString() + values[4].toString(), 16);
    b = parseInt(values[5].toString() + values[6].toString(), 16);
    console.log(`rgb(${r}, ${g}, ${b})`);
    let rgbValue = (`rgb(${r}, ${g}, ${b})`);
  rgb.textContent = rgbValue;
  hslmine(r,g,b);
  }
  /* 
  
  NOTE: hsl is not a function;
        Its pre-defined
  
  
   */
  
  //show rgb
  //show hsl
  
  
  //algorithm
  function hslmine(r,g,b){
  /* let r;
  let g;
  let b; */
  r /= 255;
  g /= 255;
  b /= 255;
  
  let h, s, l;
  
  const min = Math.min(r,g,b);
  const max = Math.max(r,g,b);
  
  if( max === min ) {
    h = 0;
  } else
  if (max === r) {
    h = 60 * (0 + (g - b) / (max - min) );
  } else
  if (max === g) {
    h = 60 * (2 + (b - r) / (max - min) );
  } else
  if (max === b) {
    h = 60 * (4 + (r - g) / (max - min) );
  }
  
  if (h < 0) {h = h + 360; }
  
  l = (min + max) / 2;
  
  if (max === 0 || min === 1 ) {
    s = 0;
  } else {
    s = (max - l) / ( Math.min(l,1-l));
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  
  //return("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  document.querySelector(".hsl3").textContent=(`hsl(${Math.round(h)}, ${Math.round(s)}, ${Math.round(l)})`);
  colorAnalogous(h,s,l);
  colorMonochromatic(h,s,l);
  colorTriad(h,s,l);
  colorComplementary(h,s,l);
  colorCompound(h,s,l);
  colorShades(h,s,l);

  }
  let type;
  let e;
  changeValue();

 function changeValue(){
     // initially it should behave as analogous so call function colorAnalogous()
    e = document.getElementById("types");
    type = e.options[e.selectedIndex].value;
     let selectedOption = document.querySelector("#types");
     selectedOption.addEventListener("change", findChange);
     console.log(type);
 
 function findChange(type){
    e = document.getElementById("types");
     type = e.options[e.selectedIndex].value;
    console.log(type);
// DO BUNCH OF IF STATEMENTS....
let analogous, monochromatic, triad, complementary, compound, shades;
if (type = analogous){
    colorAnalogous(h, s, l);
}
else if (type = monochromatic){
    colorMonochromatic(h,s,l);
}
else if(type = triad){
    colorTriad();
}
else if(type = complementary){
    colorComplementary();
}
else if(type = compound){
    colorCompound();
}
else if(type=shades){
    colorShades();
}
else{//Do analogous
    colorAnalogous();
}

 }
}
  //Analogous
//H is shifted a few degrees for each color. S and L are kept constant
function colorAnalogous(h, s, l){
    console.log("colorAnalogous");
    console.log(h,s,l)
  // new hew values;
    let ah1 = h-30;
    let ah2 =  h-15;
    let ah4 = h +15;
    let ah5 = h+30;
    console.log(h,s,l)

      document.querySelector(".colorContainer1").style.backgroundColor = (`hsl(${ah1}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer2").style.backgroundColor = (`hsl(${ah2}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer4").style.backgroundColor = (`hsl(${ah4}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer5").style.backgroundColor = (`hsl(${ah5}, ${s}%, ${l}%)`);
}

//Monochromatic
//H is kept constant, each color has either more S, less S, more L or less L (only one change on each color).
function colorMonochromatic(h,s,l){
    console.log("should show monoColor")
    console.log(h,s,l);
}

//Triad
//Two colors are shifted 60 or 120 degrees from the base. You decide what to do with the two remaining colors. Usually also shifting them, and adjusting the L is prefered.
function colorTriad(){}

//Complementary
//One color is at 180 degrees from the base. You decide how to handle the other three!
function colorComplementary(){}

//Compound
//A combination of complementary and analogous - you decide how many colors are complementary, and how many are analogous
function colorCompound(){}

//Shades
//H is kept constant, a so is S, but L varies for each color.
function colorShades(){}