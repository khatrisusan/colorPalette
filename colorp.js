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
  let HSL = hslmine(r, g, b);
  changeValue(HSL);
 
/*   let HSL = hslmine(r,g,b); */

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
  /* colorAnalogous(h,s,l);
  colorMonochromatic(h,s,l);
  
  colorComplementary(h,s,l);
  colorCompound(h,s,l);
  colorShades(h,s,l); 
  colorTriad(h,s,l); */
 const HSL = {h, s, l}
/*   return HSL; */
  return HSL;
  }
  let type;
  let e;
/*   changeValue(); */

 function changeValue(HSL){
     // initially it should behave as analogous so call function colorAnalogous()
   // e = document.getElementById("types");
 /*    type = e.options[e.selectedIndex].value;
    findChange(type)
    /*  e.addEventListener("change", findChange);
     console.log(type); */
 
 //function findChange(type){
  
    e = document.getElementById("types");
     type = e.options[e.selectedIndex].value;
    console.log(type);
// DO BUNCH OF IF STATEMENTS....
let analogous = "analogous";
let monochromatic = "monochromatic";
let triad = "triad";
let complementary = "complementary";
let compound = "compound";
let shades = "shades";

//let analogous, , triad, complementary, compound, shades;
if (type == analogous){
    colorAnalogous(HSL);
}
else if (type == monochromatic){
    colorMonochromatic(HSL);
}
else if(type == triad){
    colorTriad(HSL);
}
else if(type == complementary){
    colorComplementary(HSL);
}
else if(type == compound){
    colorCompound(HSL);
}
else if(type == shades){
    colorShades(HSL);
    
}
//else{//Do analogous
//    colorAnalogous();
//}

 //}
}
  //Analogous
//H is shifted a few degrees for each color. S and L are kept constant
function colorAnalogous(HSL){

    console.log("Hello", HSL)
   // copy this
 let h = HSL.h;
 let s = HSL.s;
 let l = HSL.l;

    let ah1 = h-30;
    let ah2 =  h-15;
    let ah4 = h +15;
    let ah5 = h+30;
    console.log(h,s,l)

      document.querySelector(".colorContainer1").style.backgroundColor = (`hsl(${ah1}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer2").style.backgroundColor = (`hsl(${ah2}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer4").style.backgroundColor = (`hsl(${ah4}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer5").style.backgroundColor = (`hsl(${ah5}, ${s}%, ${l}%)`);

      document.querySelector(".hsl1").textContent = (`hsl(${Math.round(ah1)}, ${Math.round(s)}, ${Math.round(l)})`);
        document.querySelector(".hsl2").textContent = (`hsl(${Math.round(ah2)}, ${Math.round(s)}, ${Math.round(l)})`);
        document.querySelector(".hsl4").textContent = (`hsl(${Math.round(ah4)}, ${Math.round(s)}, ${Math.round(l)})`);
        document.querySelector(".hsl5").textContent = (`hsl(${Math.round(ah5)}, ${Math.round(s)}, ${Math.round(l)})`);
}


//Monochromatic
//H is kept constant, each color has either more S, less S, more L or less L (only one change on each color).
function colorMonochromatic(HSL){
  let h = HSL.h;
  let s = HSL.s;
  let l = HSL.l;
    console.log("should show monoColor")
    console.log(h,s,l);
     /* 
      moreS means more saturation, lessL means less lightness
      */

    // More S, More L, Less S & less L
    let moreS, moreL, lessS, lessL;
    moreS = 90;
    moreL = 90;
    lessS = 20;
    lessL = 20;

    document.querySelector(".colorContainer1").style.backgroundColor = (`hsl(${h}, ${moreS}%, ${l}%)`);
    document.querySelector(".colorContainer2").style.backgroundColor = (`hsl(${h}, ${s}%, ${moreL}%)`);
    document.querySelector(".colorContainer4").style.backgroundColor = (`hsl(${h}, ${lessS}%, ${l}%)`);
    document.querySelector(".colorContainer5").style.backgroundColor = (`hsl(${h}, ${s}%, ${lessL}%)`);

    document.querySelector(".hsl1").textContent = (`hsl(${Math.round(h)}, ${Math.round(moreS)}, ${Math.round(l)})`);
        document.querySelector(".hsl2").textContent = (`hsl(${Math.round(h)}, ${Math.round(s)}, ${Math.round(moreL)})`);
        document.querySelector(".hsl4").textContent = (`hsl(${Math.round(h)}, ${Math.round(lessS)}, ${Math.round(l)})`);
        document.querySelector(".hsl5").textContent = (`hsl(${Math.round(h)}, ${Math.round(s)}, ${Math.round(lessL)})`);
}


//Triad
//Two colors are shifted 60 or 120 degrees from the base. You decide what to do with the two remaining colors. Usually also shifting them, and adjusting the L is prefered.
function colorTriad(HSL){
    //shift hue 60 degrees apart;
      // new hew values;
      /* 
      th means triad-Hue 
      */
      let h = HSL.h;
      let s = HSL.s;
      let l = HSL.l;
      let th1 = h-120;
      let th2 =  h-60;
      let th4 = h +60;
      let th5 = h +120;
      console.log(h,s,l)
  
        document.querySelector(".colorContainer1").style.backgroundColor = (`hsl(${th1}, ${s}%, ${l}%)`);
        document.querySelector(".colorContainer2").style.backgroundColor = (`hsl(${th2}, ${s}%, ${l}%)`);
        document.querySelector(".colorContainer4").style.backgroundColor = (`hsl(${th4}, ${s}%, ${l}%)`);
        document.querySelector(".colorContainer5").style.backgroundColor = (`hsl(${th5}, ${s}%, ${l}%)`);

        document.querySelector(".hsl1").textContent = (`hsl(${Math.round(th1)}, ${Math.round(s)}, ${Math.round(l)})`);
        document.querySelector(".hsl2").textContent = (`hsl(${Math.round(th2)}, ${Math.round(s)}, ${Math.round(l)})`);
        document.querySelector(".hsl4").textContent = (`hsl(${Math.round(th4)}, ${Math.round(s)}, ${Math.round(l)})`);
        document.querySelector(".hsl5").textContent = (`hsl(${Math.round(th5)}, ${Math.round(s)}, ${Math.round(l)})`);
}

//Complementary
//One color is at 180 degrees from the base. You decide how to handle the other three!
function colorComplementary(HSL){
    /* 
    new hue should be + 180;
    ch means complementary Hue
     */
     let  h = HSL.h;
     let s = HSL.s;
     let l = HSL.l;
    let ch1 = h-90;
    let ch2 =  h-135;
    let ch4 = h +180;
    let ch5 = h+135;
    console.log(h,s,l)

      document.querySelector(".colorContainer1").style.backgroundColor = (`hsl(${ch1}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer2").style.backgroundColor = (`hsl(${ch2}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer4").style.backgroundColor = (`hsl(${ch4}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer5").style.backgroundColor = (`hsl(${ch5}, ${s}%, ${l}%)`);

      document.querySelector(".hsl1").textContent = (`hsl(${Math.round(ch1)}, ${Math.round(s)}, ${Math.round(l)})`);
      document.querySelector(".hsl2").textContent = (`hsl(${Math.round(ch2)}, ${Math.round(s)}, ${Math.round(l)})`);
      document.querySelector(".hsl4").textContent = (`hsl(${Math.round(ch4)}, ${Math.round(s)}, ${Math.round(l)})`);
      document.querySelector(".hsl5").textContent = (`hsl(${Math.round(ch5)}, ${Math.round(s)}, ${Math.round(l)})`);

}

//Compound
//A combination of complementary and analogous - you decide how many colors are complementary, and how many are analogous
function colorCompound(HSL){
    //2 complementry & 2 analogous
     let h = HSL.h;
     let s = HSL.s;
     let l = HSL.l;
    let comp1 = h+180;
    let comp2 =  h-180;
    //comp means hue changes 180
    let ana4 = h +15;
    let ana5 = h+30;
    //ana means hue changes lil bit
    console.log(h,s,l)

      document.querySelector(".colorContainer1").style.backgroundColor = (`hsl(${comp1}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer2").style.backgroundColor = (`hsl(${comp2}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer4").style.backgroundColor = (`hsl(${ana4}, ${s}%, ${l}%)`);
      document.querySelector(".colorContainer5").style.backgroundColor = (`hsl(${ana5}, ${s}%, ${l}%)`);

      document.querySelector(".hsl1").textContent = (`hsl(${Math.round(comp1)}, ${Math.round(s)}, ${Math.round(l)})`);
      document.querySelector(".hsl2").textContent = (`hsl(${Math.round(comp2)}, ${Math.round(s)}, ${Math.round(l)})`);
      document.querySelector(".hsl4").textContent = (`hsl(${Math.round(ana4)}, ${Math.round(s)}, ${Math.round(l)})`);
      document.querySelector(".hsl5").textContent = (`hsl(${Math.round(ana5)}, ${Math.round(s)}, ${Math.round(l)})`);


}

//Shades
//H is kept constant, a so is S, but L varies for each color.
function colorShades(HSL){
   let h = HSL.h;
   let s = HSL.s;
   let l = HSL.l;
   /*
     sl means shades lightness 
     */
    let sl1 = 20;
    let sl2 =  40;
    let sl4 = 60;
    let sl5 = 80;
      console.log(h,s,l)
  
        document.querySelector(".colorContainer1").style.backgroundColor = (`hsl(${h}, ${s}%, ${sl1}%)`);
        document.querySelector(".colorContainer2").style.backgroundColor = (`hsl(${h}, ${s}%, ${sl2}%)`);
        document.querySelector(".colorContainer4").style.backgroundColor = (`hsl(${h}, ${s}%, ${sl4}%)`);
        document.querySelector(".colorContainer5").style.backgroundColor = (`hsl(${h}, ${s}%, ${sl5}%)`);

        document.querySelector(".hsl1").textContent = (`hsl(${Math.round(h)}, ${Math.round(s)}, ${Math.round(sl1)})`);
        document.querySelector(".hsl2").textContent = (`hsl(${Math.round(h)}, ${Math.round(s)}, ${Math.round(sl2)})`);
        document.querySelector(".hsl4").textContent = (`hsl(${Math.round(h)}, ${Math.round(s)}, ${Math.round(sl4)})`);
        document.querySelector(".hsl5").textContent = (`hsl(${Math.round(h)}, ${Math.round(s)}, ${Math.round(sl5)})`);
}