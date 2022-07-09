'use strict';

const convertInput = document.getElementById('convert-input');
const convertBtn = document.getElementById('convert-btn');
let lengthOutput = document.getElementById('length-output');
let volumeOutput = document.getElementById('volume-output');
let massOutput = document.getElementById('mass-output');

let convertNumber = 0;
const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;

// Convert length in meters and feet
function convertLength() {
  convertNumber = convertInput.value;
  const metersToFeet = convertNumber * feet;
  const feetToMeters = convertNumber / feet;
  lengthOutput.innerHTML = `
    ${convertNumber} meters = ${metersToFeet.toFixed(3)} meters | 
    ${convertNumber} feet = ${feetToMeters.toFixed(3)} meters
    `;
}

// Convert volume in liters and gallons
function convertVolume() {
  convertNumber = convertInput.value;
  const litersToGallon = convertNumber * gallon;
  const gallonToLiters = convertNumber / gallon;
  volumeOutput.innerHTML = `
    ${convertNumber} liters = ${litersToGallon.toFixed(3)} gallons | 
    ${convertNumber} gallons = ${gallonToLiters.toFixed(3)} liters
    `;
}

// Convert mass in kilograms and pounds
function convertMass() {
  convertNumber = convertInput.value;
  const kilosToPounds = convertNumber * pound;
  const poundsToKilos = convertNumber / pound;
  massOutput.innerHTML = `
        ${convertNumber} kilos = ${kilosToPounds.toFixed(3)} pounds | 
        ${convertNumber} pounds = ${poundsToKilos.toFixed(3)} kilos
        `;
}

// Button to conver user input number
convertBtn.addEventListener('click', convertLength);
convertBtn.addEventListener('click', convertVolume);
convertBtn.addEventListener('click', convertMass);
