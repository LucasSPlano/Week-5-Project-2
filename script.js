import MusicTools from "./MusicTools.js";

//Midi Pitch to Frequency
let freqResult = document.getElementById("freqResult");
let midiInput = document.getElementById("midiInput");
let button1 = document.getElementById("midiToFreq");
//Freq to Midi Pitch
let midiResult = document.getElementById("midiResult");
let freqInput = document.getElementById("freqInput");
let button2 = document.getElementById("freqToMidi");
//dBFS to Linear Amplitude
let linearResult = document.getElementById("linearResult");
let dbfsInput = document.getElementById("dbfsInput");
let button3 = document.getElementById("dbfsToLinear");
//Linear Amplitude to dBFS
let dbfsResult = document.getElementById("dbfsResult");
let linearInput = document.getElementById("linearInput");
let button4 = document.getElementById("linearToDbfs");



//FUNCTIONS

const midiToFreq = function(){
    let actFreq = MusicTools.midiPitchToFrequency(midiInput.value);
    freqResult.innerText = actFreq;
};

const freqToMidi = function(){
    let actMidi = MusicTools.midiPitchToFrequency(freqInput.value);
    midiResult.innerText = actMidi;
};

const dbfsToLinearAmp = function(){
    let actLinearAmp = MusicTools.midiPitchToFrequency(dbfsInput.value);
    linearResult.innerText = actLinearAmp;
};

const linearAmpTodBFS = function(){
    let actDbfs = MusicTools.midiPitchToFrequency(linearInput.value);
    dbfsResult.innerText = actDbfs;
};


//Event Listeners
button1.addEventListener("click", midiToFreq);
button2.addEventListener("click", freqToMidi);
button3.addEventListener("click", dbfsToLinearAmp);
button4.addEventListener("click", linearAmpTodBFS);