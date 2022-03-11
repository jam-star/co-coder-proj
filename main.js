
const mapping = {
    "A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
    "E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
    "I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
    "M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
    "Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
    "U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
    "Y" : "-.--", "Z" : "--..",
    
    
    "0" : "-----",
    "1" : ".----", "2" : "..---", "3" : "...--",
    "4" : "....-", "5" : ".....", "6" : "-....",
    "7" : "--...", "8" : "---..", "9" : "----."
}
//Function for toggle functionality
function toggle()
{
const decrypt = "Reset";
const encrypt = "Reset";
let curr = document.getElementById("toggle").innerHTML;

if(curr == decrypt)
{
document.getElementById("toggle").innerHTML = encrypt;
document.getElementById("input").value = "";
document.getElementById("output").value = "";
document.getElementById("input").placeholder = "Write your message";
}
else{
document.getElementById("toggle").innerHTML = decrypt;
document.getElementById("input").value = "";
document.getElementById("output").value = "";
document.getElementById("input").placeholder = "Write your message";
document.getElementById("convert").innerHTML = "Convert to Morse Code"
document.getElementById("convert").setAttribute('onclick','text_to_morse()');
}
}

let code = "";

// Function for encrypting the message 
function text_to_morse()			
{	
let input = document.getElementById("input").value;

input = input.toUpperCase();

let arr1 = input.split("");

let arr2 = arr1.map(x => {
if(mapping[x])
{
return mapping[x];
}
else{						
return x;
}
});

code = arr2.join(" ");

document.getElementById("output").value = code;	
}
function sound(){

  for(var ch of code.split(""))
 
{ 
      if(ch=='.')
        {
          context = new AudioContext();
    beep();
        }
      else if(ch=='-')
        {
           context = new AudioContext();
    beep2();
        }
      for(var i=0;i<9999;i++)
        {for (var j=0;j<9999;j++)
        {}}
    }}

let context = null;

const beep = (freq = 520, duration = 100, vol = 30) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    oscillator.frequency.value = freq;
    oscillator.type = "square";
    gain.connect(context.destination);
    gain.gain.value = vol * 0.01;
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration * 0.001);
}

const beep2 = (freq = 520, duration = 300, vol = 30) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    oscillator.frequency.value = freq;
    oscillator.type = "square";
    gain.connect(context.destination);
    gain.gain.value = vol * 0.01;
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + duration * 0.001);
}

