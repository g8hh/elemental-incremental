var game = {
  energy: 0,
  totalEnergy: 0,
  clickPower: 1,
  clickStat: 0,
  u1: false,
  proton: 0,
  protonPower: 0,
  protonSpeed: 1000,
  protonInterval: false,
  protonInitCost: 20,
  protonCostMult: 4/3,
  protonCost: 20,
  protonCost10: 20 * (1 - Math.pow(4/3, 10)) / (1 - 4/3),
  protonCost100: 20 * (1 - Math.pow(4/3, 100)) / (1 - 4/3),
  electron: 0,
  electronPower: 0,
  electronInitCost: 50,
  electronCostMult: 1.33,
  electronCost: 50,
  electronCost10: 50 * (1 - Math.pow(1.33, 10)) / (1 - 1.33),
  electronCost100: 50 * (1 - Math.pow(1.33, 100)) / (1 - 1.33),
  neutrino: 0,
  neutrinoPower: 0,
  neutrinoInitCost: 100000,
  neutrinoCostMult: 2,
  neutrinoCost: 100000,
  neutrinoCost10: 100000 * (1 - Math.pow(2, 10)) / (1 - 2),
  neutrinoCost100: 100000 * (1 - Math.pow(2, 100)) / (1 - 2),
  H: 0,
  deu: 0,
  tritium: 0,
  Hpower: 1,
  mass: 0,
  ach: {
    num: 20,
    get: 0,
    power: 1,
    id: new Array(20),
    name: new Array(20),
    desc: new Array(20)
  },
  unlockStage: 0,
  sigFigs: 4,
  minPowerForSci: 6,
  lastTick: Date.now()
};
const rand = new Uint32Array(8);
const MAX_VALUE = 1.79769312e308;
var energyLastSecond = MAX_VALUE;
var lastResetTime = 0;




function format(amount, maxPrecision) {
  let power = Math.floor(Math.log10(amount));
  if (power < game.minPowerForSci) {
    if(maxPrecision == 0) {return Math.round(amount);}
    else return Math.round(amount * Math.pow(10, maxPrecision)) / Math.pow(10, maxPrecision);
  }
	else {
    let mantissa = amount / Math.pow(10, power);
    return mantissa.toFixed(game.sigFigs-1) + "e" + power; 
  }
}

function changeSigFigs(amount) {
  if(((game.sigFigs + amount) < 8) && ((game.sigFigs + amount) > 0)) {
    game.sigFigs += amount;
    updateEverything();
  }
}

function changeMinPowerForSci(amount) {
  if(((game.minPowerForSci + amount) < 16) && ((game.minPowerForSci + amount) > 0)) {
    game.minPowerForSci += amount;
    updateEverything();
  }
}


function logBase(base, input) {
	return Math.log(input) / Math.log(base);
}

function logBuy(type, initalCost, costMult) {
	var quo = game.energy / initalCost;
	var geoConst = 1 - (1 / costMult);
	quo = Math.floor(logBase(costMult, quo * geoConst));
	
	if(quo > 0) {
	    var newCost = initalCost * Math.pow(costMult, quo);
    
	    switch(type) {
        case -1: 
          game.proton += quo;
			    game.protonCost = newCost;
			    document.getElementById('protonD').innerHTML = format(game.proton);
			    document.getElementById('protonC').innerHTML = format(Math.round(newCost));
          game.protonCost10 = game.protonCost * (1 - Math.pow(game.protonCostMult, 10)) / (1 - game.protonCostMult);
          game.protonCost100 = game.protonCost * (1 - Math.pow(game.protonCostMult, 100)) / (1 - game.protonCostMult);
			    break;
        case -3: 
          game.electron += quo;
			    game.electronCost = newCost;
			    document.getElementById('electronD').innerHTML = format(game.electron);
			    document.getElementById('electronC').innerHTML = format(Math.round(newCost));
          game.electronCost10 = game.electronCost * (1 - Math.pow(game.electronCostMult, 10)) / (1 - game.electronCostMult);
          game.electronCost100 = game.electronCost * (1 - Math.pow(game.electronCostMult, 100)) / (1 - game.electronCostMult);
			    break;
      }
  }
}

function Crandom(chance, recursionLevel) {
  if(chance > 1e-7) {
    if(rand[0] < 4294967296 * chance) {
      window.crypto.getRandomValues(rand);
      return true;
    }
    else {
      window.crypto.getRandomValues(rand);
      return false;
    }
  }
  else if(rand[recursionLevel] > 4294967296 * 1e-7 || recursionLevel > 7) {
    window.crypto.getRandomValues(rand);
      return false;
  }
  else return Crandom(chance * 1e7, recursionLevel++);
  /* how to use this to generate a random number from 0 to 65536:
    window.crypto.getRandomValues(rand);
  document.getElementById("test").innerHTML = Math.floor(rand[0] / 65536); */
}



function slowDecay(num, halfLife) {
  
}

function mediumDecay(num, halfLife) {
  
}

function fastDecay(num, halfLife) {
  
}

          
          

function tap(a)
{
  game.energy += a;
  game.totalEnergy += a;
  document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
}

function makeProton()
{
  if(game.energy >= Math.ceil(game.protonCost)) 
  {
    game.energy -= Math.ceil(game.protonCost);
    game.proton++;
    updateProtonPower();
    game.protonCost *= game.protonCostMult;
    game.protonCost10 *= game.protonCostMult;
    game.protonCost100 *= game.protonCostMult;
    document.getElementById("protonC").innerHTML = format(game.protonCost, 0);
    document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
    document.getElementById("protonD").innerHTML = game.proton;
    document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);
  }
}

function makeMaxProtons()
{
  if(game.energy / (1e9 * (game.protonCostMult - 1)) > game.protonCost) {
    logBuy(-1, game.protonCost, game.protonCostMult);
  }
    else {
  let count = 0;
  while(game.energy > game.protonCost) {
    if(game.energy > game.protonCost100) {
      game.energy -= game.protonCost100;
      let a = Math.pow(game.protonCostMult, 100);
      game.protonCost *= a;
      game.protonCost10 *= a;
      game.protonCost100 *= a;
      count += 100;
    }
    else if(game.energy > game.protonCost10) {
      game.energy -= game.protonCost10;
      let b = Math.pow(game.protonCostMult, 10);
      game.protonCost *= b;
      game.protonCost10 *= b;
      count += 10;
    }
    else {
      game.energy -= game.protonCost;
      game.protonCost *= game.protonCostMult;
      count++;
    }
  }
  game.proton += count;
  updateProtonPower();
  game.protonCost10 = game.protonCost * (1 - Math.pow(game.protonCostMult, 10)) / (1 - game.protonCostMult);
  game.protonCost100 = game.protonCost * (1 - Math.pow(game.protonCostMult, 100)) / (1 - game.protonCostMult);
  document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
  document.getElementById("protonD").innerHTML = game.proton;
  document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);
  document.getElementById("protonC").innerHTML = format(game.protonCost, 0);
    }
}

function updateProtonSpeed() {
  clearInterval(game.protonInterval);
  game.protonInterval = setInterval(function()
            {
  tap(game.protonPower * game.Hpower * game.ach.power);
}, game.protonSpeed); }

function updateProtonPower() {
  game.protonPower = game.proton * (1+game.neutrinoPower);
}

function updateElectronPower() {
  game.electronPower = game.electron * (1+game.neutrinoPower);
  game.clickPower = 1 + game.neutrinoPower + game.electronPower;
}

function updatePePower() {
  updateProtonPower();
  updateElectronPower();
}


function makeElectron()
{
  if(game.energy >= Math.ceil(game.electronCost))
  {
    game.energy -= Math.ceil(game.electronCost);
    game.electron++;
    updateElectronPower();
    game.electronCost *= game.electronCostMult;
    game.electronCost10 *= game.electronCostMult;
    game.electronCost100 *= game.electronCostMult;
    document.getElementById("electronC").innerHTML = format(game.electronCost, 0);
    document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
    document.getElementById("electronD").innerHTML = game.electron;
    document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
    document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
  }
}

function makeMaxElectrons()
{
  if(game.energy / (1e9 * (game.electronCostMult - 1)) > game.electronCost) {
    logBuy(-3, game.electronCost, game.electronCostMult);
  }
    else {
  let count = 0;
  while(game.energy > game.electronCost) {
    if(game.energy > game.electronCost100) {
      game.energy -= game.electronCost100;
      let a = Math.pow(game.electronCostMult, 100);
      game.electronCost *= a;
      game.electronCost10 *= a;
      game.electronCost100 *= a;
      count += 100;
    }
    else if(game.energy > game.electronCost10) {
      game.energy -= game.electronCost10;
      let b = Math.pow(game.electronCostMult, 10);
      game.electronCost *= b;
      game.electronCost10 *= b;
      count += 10;
    }
    else {
      game.energy -= game.electronCost;
      game.electronCost *= game.electronCostMult;
      count++;
    }
  }
  game.electron += count;
  updateElectronPower();
  game.electronCost10 = game.electronCost * (1 - Math.pow(game.electronCostMult, 10)) / (1 - game.electronCostMult);
  game.electronCost100 = game.electronCost * (1 - Math.pow(game.electronCostMult, 100)) / (1 - game.electronCostMult);
  document.getElementById("electronC").innerHTML = format(game.electronCost, 0);
  document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
  document.getElementById("electronD").innerHTML = game.electron;
  document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
  document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
  }
}


function makeNeutrino()
{
  if(game.energy >= Math.ceil(game.neutrinoCost))
  {
    game.energy -= Math.ceil(game.neutrinoCost);
    game.neutrino++;
    game.neutrinoPower = game.neutrino;
    updatePePower();
    game.neutrinoCost *= game.neutrinoCostMult;
    game.neutrinoCost10 *= game.neutrinoCostMult;
    game.neutrinoCost100 *= game.neutrinoCostMult;
    game.clickPower = 1 + game.electronPower + game.neutrinoPower;
    document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
    document.getElementById("neutrinoC").innerHTML = format(game.neutrinoCost, 0);
    document.getElementById("neutrinoD").innerHTML = game.neutrino;
    document.getElementById("neutrinoP").innerHTML = Math.round(1 + game.neutrino);
    document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
    document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
    document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);
  }
}

function makeMaxNeutrinos()
{
  if(game.energy / (1e9 * (game.electronCostMult - 1)) > game.electronCost) {
    logBuy(-4, game.neutrinoCost, game.neutrinoCostMult);
  }
    else {
  let count = 0;
  while(game.energy > game.neutrinoCost) {
    if(game.energy > game.neutrinoCost100) {
      game.energy -= game.neutrinoCost100;
      let a = Math.pow(game.neutrinoCostMult, 100);
      game.neutrinoCost *= a;
      game.neutrinoCost10 *= a;
      game.neutrinoCost100 *= a;
      count += 100;
    }
    else if(game.energy > game.neutrinoCost10) {
      game.energy -= game.neutrinoCost10;
      let b = Math.pow(game.neutrinoCostMult, 10);
      game.neutrinoCost *= b;
      game.neutrinoCost10 *= b;
      count += 10;
    }
    else {
      game.energy -= game.neutrinoCost;
      game.neutrinoCost *= game.neutrinoCostMult;
      count++;
    }
  }
  game.neutrino += count;
  game.neutrinoPower = game.neutrino;
  updatePePower();
  game.neutrinoCost10 = game.neutrinoCost * (1 - Math.pow(game.neutrinoCostMult, 10)) / (1 - game.neutrinoCostMult);
  game.neutrinoCost100 = game.neutrinoCost * (1 - Math.pow(game.neutrinoCostMult, 100)) / (1 - game.neutrinoCostMult);
  document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
  document.getElementById("neutrinoC").innerHTML = format(game.neutrinoCost, 0);
  document.getElementById("neutrinoD").innerHTML = game.neutrino;
  document.getElementById("neutrinoP").innerHTML = Math.round(1 + game.neutrino);
  document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
  document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
  document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);
  }
}






function u1b()
{
  if(game.H >= 100 && !game.u1)
    {
      game.u1 = true;
      game.H -= 100;
      game.protonSpeed /= 2;
      game.Hpower = Math.sqrt(game.H + 1) * Math.sqrt(game.deu + 1);
      document.getElementById("HpD").innerHTML = game.H;
      document.getElementById("u1p").innerHTML = game.u1;
      document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
      document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);   
      document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
      updateProtonSpeed();
    }
}

function w2b() {
  if(game.energy >= 10000 && game.unlockStage == 1) {
    game.unlockStage++;
    game.energy -= 10000;
    document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
    hideAndShow();
  }
}

function w3b() {
  if(game.H >= 10 && game.unlockStage == 2) {
    game.unlockStage++;
    game.H -= 10;
    game.Hpower = Math.sqrt(game.H + 1) * Math.sqrt(game.deu + 1);
    document.getElementById("HpD").innerHTML = game.H;
    document.getElementById("w3p").innerHTML = game.unlockStage > 2;
    document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
    document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);
    document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
    hideAndShow();
  }
}



function p1() //not the McLaren P1, this is a :ripaarex:
{
  if(Date.now() - lastResetTime <= 4000 && Math.min(game.proton, game.electron) >= 1 && !game.ach.id[14]) {
    game.ach.id[14] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  
  lastResetTime = Date.now();
  game.H += Math.min(game.proton, game.electron);
  game.Hpower = Math.sqrt(game.H + 1) * Math.sqrt(game.deu + 1);
  game.energy = 0;
  game.clickPower = 1;
  game.proton = 0;
  game.electron = 0;
  game.electronPower = 0;
  game.protonPower = 0;
  game.protonCost = 20;
  game.electronCost = 50;
  game.neutrino = 0;
  game.neutrinoPower = 0;
  game.neutrinoCost = 100000;
  document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
  document.getElementById("protonD").innerHTML = game.proton;
  document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);
  document.getElementById("protonC").innerHTML = format(game.protonCost, 0);
  document.getElementById("electronD").innerHTML = game.electron;
  document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
  document.getElementById("electronC").innerHTML = format(game.electronCost, 0);
  document.getElementById("neutrinoC").innerHTML = format(game.neutrinoCost, 0);
  document.getElementById("neutrinoD").innerHTML = game.neutrino;
  document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
  document.getElementById("HpD").innerHTML = game.H;
  document.getElementById("HpP").innerHTML = Math.round(100 * game.Hpower - 100);
}





setInterval(function()
           {
  //slowDecay();
}, 33.333333333333)



setInterval(function()
           {
  if(!(game.totalEnergy > 0)) {hardReset();}
  checkForAchievements();
  hideAndShow();
}, 1000)



function hideAndShow() {
  switch(game.unlockStage) {
    case 0:
      document.getElementById('unlock1').style.visibility = "hidden";
      document.getElementById('tab1a').style.visibility = "hidden";
      document.getElementById('tab1b').style.visibility = "hidden";
      document.getElementById('tab1c').style.visibility = "hidden";
      if(game.H > 1)
        game.unlockStage++;
    break;
      
    case 1:
      document.getElementById('unlock1').style.visibility = "visible";
      document.getElementById('tab1a').style.visibility = "visible";
      document.getElementById('tab1b').style.visibility = "hidden";
      document.getElementById('tab1c').style.visibility = "hidden";
      break;
      
    case 2:
      document.getElementById('unlock1').style.visibility = "visible";
      document.getElementById('tab1a').style.visibility = "hidden";
      document.getElementById('tab1b').style.visibility = "visible";
      document.getElementById('tab1c').style.visibility = "visible";
      break;
      
    case 3:
      document.getElementById('unlock1').style.visibility = "visible";
      document.getElementById('tab1a').style.visibility = "hidden";
      document.getElementById('tab1b').style.visibility = "visible";
      document.getElementById('tab1c').style.visibility = "hidden";
      break;
  }
}



function save() {
    localStorage.cc = btoa(JSON.stringify(game));
}

function load() {
    if(localStorage.cc) {
      game = JSON.parse(atob(localStorage.cc));
    }
  else hardReset();
  if(!(game.totalEnergy > 0)) hardReset();

    //transformToDecimal(game);
  initializeVariables();
  updateEverything();
  updateProtonSpeed();
  tab("tab1");
}



window.addEventListener('keydown', function(event) {
	switch(event.keyCode) {
    case 72: // H
      p1();
      break;
  }
});



setInterval(function()
            {
  save();
  updateEverything();
}, 6969);




function checkForAchievements() {
  if(game.proton >= 6 && game.electron >= 6 && !game.ach.id[0]) {
    game.ach.id[0] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton >= 10 && game.electron >= 10 && !game.ach.id[1]) {
    game.ach.id[1] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton >= 18 && game.electron >= 18 && !game.ach.id[2]) {
    game.ach.id[2] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton >= 26 && game.electron >= 26 && !game.ach.id[6]) { 
    game.ach.id[6] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton >= 36 && game.electron >= 36 && !game.ach.id[7]) {
    game.ach.id[7] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton >= 47 && game.electron >= 47 && !game.ach.id[17]) {
    game.ach.id[17] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton >= 54 && game.electron >= 54 && !game.ach.id[18]) {
    game.ach.id[18] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton == 0 && game.electron >= 30 && !game.ach.id[10]) {
    game.ach.id[10] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton >= 30 && game.electron == 0 && !game.ach.id[11]) {
    game.ach.id[11] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  
  if(game.totalEnergy >= 21300 && !game.ach.id[3]) {
    game.ach.id[3] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.totalEnergy >= 133100 && !game.ach.id[4]) {
    game.ach.id[4] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.totalEnergy >= 1e6 && !game.ach.id[5]) {
    game.ach.id[5] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.energy >= 1e7 && !game.ach.id[8]) {
    game.ach.id[8] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.energy >= 5e7 && game.neutrino == 0 && !game.ach.id[19]) {
    game.ach.id[19] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  
  if(game.H + 2*game.deu >= 294 && !game.ach.id[9]) {
    game.ach.id[9] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.neutrino >= 10 && !game.ach.id[15]) {
    game.ach.id[15] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.proton + game.electron + game.neutrino >= 100 && !game.ach.id[16]) {
    game.ach.id[16] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  if(game.ach.get >= 10 && !game.ach.id[13]) {
    game.ach.id[13] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  
  if(game.energy - energyLastSecond >= 20000 && !game.ach.id[12]) {
    game.ach.id[12] = true; 
    updateAchievementColors();
    checkAchievementCount();
  }
  
  energyLastSecond = game.energy;
}

function checkAchievementCount() {
  let n = 0;
  for(let i = 0; i < game.ach.num; i++)
    if(game.ach.id[i]) n++;
  game.ach.get = n;
  game.ach.power = Math.pow(1.05, n);
  document.getElementById("achBonusD").innerHTML = format(game.ach.power, 2);
  document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);
  document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
  document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
}

function updateAchievementColors() {
  for(let i = 1; i < game.ach.num+1; i++) {
     if(game.ach.id[i-1]) 
       document.getElementById("ach" + i + "D").className = "achT";
     else
       document.getElementById("ach" + i + "D").className = "achF";
  }
}




function initializeVariables() {
  if(!game.energy) game.energy = 0;
  if(!game.totalEnergy) game.totalEnergy = 0;
  if(!game.proton) game.proton = 0;
  if(!game.protonPower) game.protonPower = 0;
  if(!game.protonInitCost) game.protonInitCost = 20;
  if(!game.protonCostMult) game.protonCostMult = 4/3;
  if(!game.protonCost) game.protonCost = 20;
  if(!game.protonCost10) game.protonCost10 = 20 * (1 - Math.pow(4/3, 10)) / (1 - 4/3);
  if(!game.protonCost100) game.protonCost100 = 20 * (1 - Math.pow(4/3, 100)) / (1 - 4/3);
  if(!game.electron) game.electron = 0;
  if(!game.electronPower) game.electronPower = 0;
  if(!game.electronInitCost) game.electronInitCost = 50;
  if(!game.electronCostMult) game.electronCostMult = 1.33;
  if(!game.electronCost) game.electronCost = 50;
  if(!game.electronCost10) game.electronCost10 = 50 * (1 - Math.pow(1.33, 10)) / (1 - 1.33);
  if(!game.electronCost100) game.electronCost100 = 50 * (1 - Math.pow(1.33, 100)) / (1 - 1.33);
  if(!game.neutrino) game.neutrino = 0;
  if(!game.neutrinoPower) game.neutrinoPower = 0;
  if(!game.neutrinoInitCost) game.neutrinoInitCost = 100000;
  if(!game.neutrinoCostMult) game.neutrinoCostMult = 2;
  if(!game.neutrinoCost) game.neutrinoCost = 100000;
  if(!game.neutrinoCost10) game.neutrinoCost10 = 100000 * (1 - Math.pow(2, 10)) / (1 - 2);
  if(!game.neutrinoCost100) game.neutrinoCost100 = 100000 * (1 - Math.pow(2, 100)) / (1 - 2);
  if(!game.H) game.H = 0;
  if(!game.deu) game.deu = 0;
  if(!game.tritium) game.tritium = 0;
  if(!game.Hpower) game.Hpower = 1;
  if(!game.clickPower) game.clickPower = 1;
  if(!game.clickStat) game.clickStat = 0;
  if(!game.protonSpeed) game.protonSpeed = 1000;
  if(!game.u1) game.u1 = false;
  if(!game.mass) game.mass = 0;
  if(!game.unlockStage) game.unlockStage = 0;
  if(!game.sigFigs) game.sigFigs = 4;
  if(!game.minPowerForSci) game.minPowerForSci = 6;
  if(!game.ach) {
    game.ach = {
      num: 20,
      get: 0,
      power: 1,
      id: new Array(20)
    }
  }
  if(!game.ach.num) game.ach.num = 20;
  if(!game.ach.id || !game.ach.id[0]) {
    game.ach.id = new Array(game.ach.num);
    for(let i = 0; i < game.ach.num; i++)
      game.ach.id[i] = false;
  }
  if(game.ach.id.length != game.ach.num) {
    let a = game.ach.id;
    game.ach.id = new Array(game.ach.num);
    for(let i = 0; i < Math.min(a.length(), game.ach.num); i++) 
      game.ach.id[i] = a[i];
  }
}


function updateEverything() {
    checkAchievementCount();
    updatePePower();
    document.getElementById("energyDisplay").innerHTML = format(game.energy, 0);
    document.getElementById("totalEnergyD").innerHTML = format(game.totalEnergy, 0);
    document.getElementById("protonD").innerHTML = game.proton;
    document.getElementById("protonP").innerHTML = format(game.Hpower * game.protonPower * game.ach.power * 1000 / game.protonSpeed, 2);
    document.getElementById("protonC").innerHTML = format(game.protonCost, 0);
    document.getElementById("electronD").innerHTML = game.electron;
    document.getElementById("electronP").innerHTML = format(game.Hpower * game.electronPower * game.ach.power, 2);
    document.getElementById("electronC").innerHTML = format(game.electronCost, 0);
    document.getElementById("neutrinoC").innerHTML = format(game.neutrinoCost, 0);
    document.getElementById("neutrinoD").innerHTML = game.neutrino;
    document.getElementById("neutrinoP").innerHTML = Math.round(1 + game.neutrino);
    document.getElementById("clickD").innerHTML = format(game.Hpower * game.clickPower * game.ach.power, 2);
    document.getElementById("HpD").innerHTML = game.H;
    document.getElementById("HpP").innerHTML = Math.round(100 * game.Hpower - 100);
    document.getElementById("u1p").innerHTML = game.u1;
    document.getElementById("sigFigD").innerHTML = game.sigFigs;
    document.getElementById("minPowerForSciD").innerHTML = game.minPowerForSci;
    document.getElementById("minPowerForSciD2").innerHTML = game.minPowerForSci;
    hideAndShow();
    updateAchievementColors();
}


function hardReset() {
  clearInterval(game.protonInterval);
  
  game.energy = 0;
  game.totalEnergy = 0;
  game.proton = 0;
  game.protonPower = 0;
  game.protonInterval = false;
  game.protonInitCost = 20;
  game.protonCostMult = 4/3;
  game.protonCost = 20;
  game.protonCost10 = 20 * (1 - Math.pow(4/3, 10)) / (1 - 4/3);
  game.protonCost100 = 20 * (1 - Math.pow(4/3, 100)) / (1 - 4/3);
  game.electron = 0;
  game.electronPower = 0;
  game.electronInitCost = 50;
  game.electronCostMult = 1.33;
  game.electronCost = 50;
  game.electronCost10 = 50 * (1 - Math.pow(1.33, 10)) / (1 - 1.33);
  game.electronCost100 = 50 * (1 - Math.pow(1.33, 100)) / (1 - 1.33);
  game.neutrino = 0;
  game.neutrinoPower = 0;
  game.neutrinoInitCost = 100000;
  game.neutrinoCostMult = 2;
  game.neutrinoCost = 100000;
  game.neutrinoCost10 = 100000 * (1 - Math.pow(2, 10)) / (1 - 2);
  game.neutrinoCost100 = 100000 * (1 - Math.pow(2, 100)) / (1 - 2);
  game.H = 0;
  game.deu = 0;
  game.tritium = 0;
  game.Hpower = 1;
  game.clickPower = 1;
  game.clickStat = 0;
  game.protonSpeed = 1000;
  game.u1 = false;
  game.mass = 0;
  game.ach.get = 0;
  game.ach.power = 1;
  game.unlockStage = 0;
  game.sigFigs = 4;
  game.minPowerForSci = 6;
  
  updateEverything();
  updateProtonSpeed();
}


function tab(tab) {
	// hide all your tabs, then show the one the user selected.
	document.getElementById("tab1").style.display = "none";
	document.getElementById("tab2").style.display = "none";
  document.getElementById("tabU1").style.display = "none";
	document.getElementById("tabO1").style.display = "none";
	document.getElementById("tabM").style.display = "none";
  document.getElementById("tabM.1").style.display = "none";
  document.getElementById("tabM.2").style.display = "none";
  document.getElementById("tabM.3").style.display = "none";
  document.getElementById("tabM.4").style.display = "none";
  document.getElementById("tabM.5").style.display = "none";
	document.getElementById(tab).style.display = "inline-block";
  if(tab.startsWith("tabM.")) 
    document.getElementById("tabM").style.display = "inline-block";
}
// go to a tab for the first time, so not all show
  load();
