window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  let recipes = {
  "shirleyTemple": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    orangeJuice: "half-full",
    sevenUp: "half-full",
    grenadine: "0.5",
    garnish: ["orange slice", "cherry"]
  },
  
  "vodkaSlime": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    limeJuice: "0.25",
    sevenUp: "until full",
    garnish: ["lime"]
  },    
  
  "seaBreeze": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "2",
    cranberryJuice: "half-full",
    grapefruitJuice: "half-full",
    garnish: ["lime wedge"]
  },
  
  "caesar": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    rimmer: "salt",
    vodka: "2",
    clamatoJuice: "until full",
    tabasco: "4 ",
    worcestershire: "4 ",
    garnish: ["lime wedge", "celery stick", "green bean"]
  },
  
  "saltyDog": {
    glass: "short",
    rimmer: "salt",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    grapefruitJuice: "until full",
    garnish: ["lime"]
  },
  
  "screwUp": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    orangeJuice: "half-full",
    sevenUp: "half-full",
    garnish: ["orange slice"]
  },
  
  "greyhound": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    grapefruitJuice: "until full",
    garnish: ["lime"]
  },
  
  "limeRickey": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    limeJuice: "1",
    sodaWater: "until full",
    simpleSyrup: "0.5",
    garnish: ["lime wedge"]
  },
  
  "capeCod": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    cranberryJuice: "until full",
    garnish: ["lemon"]
  },
  
  "moscowMule":{
    glass: "mule",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    limeJuice: "0.25",
    gingerBeer: "until full",
    garnish: ["lime wedge"]
  },
  
  "bloodyMary": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    rimmer: "salt",
    vodka: "2",
    tomatoJuice: "until full",
    tabasco: "4 ",
    worcestershire: "4 ",
    garnish: ["lime wedge", "celery stick", "green bean"]
  },
  
  "vodka7": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    sevenUp: "until full",
    garnish: ["lime"]
  },
  
  "screwdriver": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    orangeJuice: "until full",
    garnish: ["orange slice"]
  },
  
  "bayBreeze": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "2",
    cranberryJuice: "half-full",
    pineappleJuice: "half-full",
    garnish: ["lime wedge"]
  },
};

var player = GetPlayer();
var currentOn = player.GetVar("currentOn");
let currentRecipe = recipes[currentOn];

const getVariables = (player) => {
    return {
        garnish: player.GetVar("subGarnish") ? player.GetVar("subGarnish").split(',') : [],
        glass: player.GetVar("subGlass") || "",
        grenadine: player.GetVar("subGrena") || "",
        ice: player.GetVar("subIce") || "",
        //juice: player.GetVar("subJuice") || "",
        clamatoJuice: player.GetVar("subJuice_Clamato") || "",
        cranberryJuice: player.GetVar("subJuice_Cranberry") || "",
        grapefruitJuice: player.GetVar("subJuice_Grapefruit") || "",
        limeJuice: player.GetVar("subJuice_Lime") || "",
        orangeJuice: player.GetVar("subJuice_Orange") || "",
        pineappleJuice: player.GetVar("subJuice_Pineapple") || "",
        tomatoJuice: player.GetVar("subJuice_Tomato") || "",
        mixingMethod: player.GetVar("subMixing") || "",
        sevenUp: player.GetVar("subPop_7u") || "",
        rimmer: player.GetVar("subRimmer") || "",
        simpleSyrup: player.GetVar("subSimp") || "",
        tabasco: player.GetVar("subTaba") || "",
        vodka: player.GetVar("subVodka") || "",
        worcestershire: player.GetVar("subWorce") || "",
        gingerBeer: player.GetVar("subPop_Ginger") || "",
        sodaWater: player.GetVar("subPop_Soda") || ""
        //condiments: player.GetVar("subCondiments") || "",
        //pop: player.GetVar("subPop") || "",
        //coke: player.GetVar("subPop_Coke") || ""
    };
};

function resetVariables() {
    player.SetVar("subGarnish", "");
    player.SetVar("subGlass", "");
    player.SetVar("subGrena", "0");
    player.SetVar("subIce", "");
    player.SetVar("subJuice", "");
    player.SetVar("subJuice_Clamato", "");
    player.SetVar("subJuice_Cranberry", "");
    player.SetVar("subJuice_Grapefruit", "");
    player.SetVar("subJuice_Lime", "");
    player.SetVar("subJuice_Orange", "");
    player.SetVar("subJuice_Pineapple", "");
    player.SetVar("subJuice_Tomato", "");
    player.SetVar("subMixing", "");
    player.SetVar("subPop_7u", "");
    player.SetVar("subRimmer", "");
    player.SetVar("subSimp", "0");
    player.SetVar("subTaba", "0");
    player.SetVar("subVodka", "0");
    player.SetVar("subWorce", "0");
    player.SetVar("subPop_Ginger", "");
    player.SetVar("subPop_Soda", "");
    player.SetVar("subCondiments", "");
    player.SetVar("subPop", "");
    player.SetVar("subPop_Coke", "");
    player.SetVar("ifCorrect", 0);
};

const lightStars = {
	'bayBreeze': () => player.SetVar("comBayBr", true),
	'bloodyMary': () =>player.SetVar("comBloodyM", true),
	'caesar': () =>player.SetVar("comCaesar", true),
	'capeCod': () =>player.SetVar("ComCapeC", true),
	'greyhound': () =>player.SetVar("comGreyh", true),
	'limeRickey': () =>player.SetVar("comLimeR", true),
	'moscowMule': () =>player.SetVar("comMoscow", true),
	'saltyDog': () =>player.SetVar("comSaltyD", true),
	'screwdriver': () =>player.SetVar("comScrewd", true),
	'screwUp': () =>player.SetVar("comScrewU", true),
	'seaBreeze': () =>player.SetVar("comSeaBr", true),
	'shirleyTemple': () =>player.SetVar("comShirleyT", true),
	'vodka7': () =>player.SetVar("comVodka7", true),
	'vodkaSlime': () =>player.SetVar("comVodkaS", true),
};


function unifyAndSort(input) {
	if (input === undefined) {
        return '';
    };
    
    if (Array.isArray(input)) {
        return input.map(str => typeof str === 'string' ? str.toLowerCase().replace(/\s+/g, ' ').trim() : str).sort().join(', ');
    } else if (typeof input === 'string') {
        return input.toLowerCase().replace(/\s+/g, ' ').trim();
    } else {
        return input;
    };
};

// Compare the recipe and variables
var variables = getVariables(player);
let differences = {};
let filteredVariables = {};

for (let key in variables) {
    if (variables[key] !== '') {
        filteredVariables[key] = variables[key];
    };
};

for (let key in currentRecipe) {
    let recipeValue = unifyAndSort(currentRecipe[key]);
    let variableValue = unifyAndSort(filteredVariables[key]);

    if (recipeValue !== variableValue) {
        differences[key] = { recipe: recipeValue, variable: variableValue };
    };
};

for (let key in filteredVariables) {
    if (!(key in currentRecipe)) {
        differences[key] = { recipe: 'None', variable: unifyAndSort(filteredVariables[key]) };
    };
};

// Create alert message
let alertMessage = "The differences between our recipe and your choices:\n\n";
for (let key in differences) {
    alertMessage += `${key} -\n Recipe: ${differences[key].recipe},\n Your choice: ${differences[key].variable}\n\n`;
};

if (Object.keys(differences).length > 0) {
    player.SetVar("ifCorrect", 2);
    alert(alertMessage);
} else {
    player.SetVar("ifCorrect", 1);
    
    if (currentOn in lightStars) {
  		lightStars[currentOn]();
	} else {
  		console.error("Invalid drink:", currentOn);
	};
    
    alert("Exactly what our costomer ordered. Well done!");    
    resetVariables();
}
}

window.Script2 = function()
{
  var player = GetPlayer();
var tabasco = player.GetVar("subTaba");
var worcestershire = player.GetVar("subWorce");
var simpleSyrup = player.GetVar("subSimp");
var grenadine = player.GetVar("subGrena");
var rimmer = player.GetVar("subRimmer");

var summaryList = [
    tabasco && `Tabasco: ${tabasco} dashes`, 
    worcestershire && `Worcestershire: ${worcestershire} dashes`, 
    simpleSyrup && `Simple Syrup: ${simpleSyrup} oz`,
    grenadine && `Grenadine: ${grenadine} oz`,
    rimmer && `Rimmer: ${rimmer}`
].filter(Boolean);

player.SetVar("subCondiments", summaryList.join(", "));
}

window.Script3 = function()
{
  var player = GetPlayer();
var subCoke = player.GetVar("subPop_Coke");
var sub7up = player.GetVar("subPop_7u");
var subGinger = player.GetVar("subPop_Ginger");
var subSoda = player.GetVar("subPop_Soda");

var summaryList = [subCoke && `Coke: ${isNaN(subCoke) ? subCoke : subCoke + " oz"}`, 
                   sub7up && `7up: ${isNaN(sub7up) ? sub7up : sub7up + " oz"}`, 
                   subGinger && `Ginger beer: ${isNaN(subGinger) ? subGinger : subGinger + " oz"}`,
                   subSoda && `Soda: ${isNaN(subSoda) ? subSoda : subSoda + " oz"}`]
                  .filter(Boolean);

player.SetVar("subPop", summaryList.join(", "));
}

window.Script4 = function()
{
  var player = GetPlayer();
var Cranberry = player.GetVar("subJuice_Cranberry");
var Grapefruit = player.GetVar("subJuice_Grapefruit");
var Clamato = player.GetVar("subJuice_Clamato");
var Tomato = player.GetVar("subJuice_Tomato");
var Pineapple = player.GetVar("subJuice_Pineapple");
var Orange = player.GetVar("subJuice_Orange");
var Lime = player.GetVar("subJuice_Lime");

var summaryList = [Cranberry && `Cranberry juice: ${isNaN(Cranberry) ? Cranberry : Cranberry + " oz"}`,
				   Grapefruit && `Grapefruit juice: ${isNaN(Grapefruit) ? Grapefruit : Grapefruit + " oz"}`,
				   Clamato && `Clamato juice: ${isNaN(Clamato) ? Clamato : Clamato + " oz"}`,
				   Tomato  && `Tomato juice: ${isNaN(Tomato ) ? Tomato  : Tomato  + " oz"}`,
				   Pineapple && `Pineapple juice: ${isNaN(Pineapple) ? Pineapple : Pineapple + " oz"}`,
				   Orange && `Orange juice: ${isNaN(Orange) ? Orange : Orange + " oz"}`,
				   Lime && `Lime: ${isNaN(Lime) ? Lime : Lime + " oz"}`				   
                  ].filter(Boolean);

player.SetVar("subJuice", summaryList.join(", "));
}

window.Script5 = function()
{
  var player = GetPlayer();
var currentValue = player.GetVar("subGarnish");
var newValue = "Lime";

var valuesArray = currentValue ? currentValue.split(", ") : [];
var index = valuesArray.indexOf(newValue);

if (index !== -1) {
    valuesArray.splice(index, 1);
} else {
    valuesArray.push(newValue);
}

player.SetVar("subGarnish", valuesArray.join(", "));

//alert("The garnish you have chosen: " + valuesArray);
}

window.Script6 = function()
{
  var player = GetPlayer();
var currentValue = player.GetVar("subGarnish");
var newValue = "Lime wedge";

var valuesArray = currentValue ? currentValue.split(", ") : [];
var index = valuesArray.indexOf(newValue);

if (index !== -1) {
    valuesArray.splice(index, 1);
} else {
    valuesArray.push(newValue);
}

player.SetVar("subGarnish", valuesArray.join(", "));

//alert("The garnish you have chosen: " + valuesArray);
}

window.Script7 = function()
{
  var player = GetPlayer();
var currentValue = player.GetVar("subGarnish");
var newValue = "Orange slice";

var valuesArray = currentValue ? currentValue.split(", ") : [];
var index = valuesArray.indexOf(newValue);

if (index !== -1) {
    valuesArray.splice(index, 1);
} else {
    valuesArray.push(newValue);
}

player.SetVar("subGarnish", valuesArray.join(", "));

//alert("The garnish you have chosen: " + valuesArray);
}

window.Script8 = function()
{
  var player = GetPlayer();
var currentValue = player.GetVar("subGarnish");
var newValue = "Lemon";

var valuesArray = currentValue ? currentValue.split(", ") : [];
var index = valuesArray.indexOf(newValue);

if (index !== -1) {
    valuesArray.splice(index, 1);
} else {
    valuesArray.push(newValue);
}

player.SetVar("subGarnish", valuesArray.join(", "));

//alert("The garnish you have chosen: " + valuesArray);
}

window.Script9 = function()
{
  var player = GetPlayer();
var currentValue = player.GetVar("subGarnish");
var newValue = "Cherry";

var valuesArray = currentValue ? currentValue.split(", ") : [];
var index = valuesArray.indexOf(newValue);

if (index !== -1) {
    valuesArray.splice(index, 1);
} else {
    valuesArray.push(newValue);
}

player.SetVar("subGarnish", valuesArray.join(", "));

//alert("The garnish you have chosen: " + valuesArray);
}

window.Script10 = function()
{
  var player = GetPlayer();
var currentValue = player.GetVar("subGarnish");
var newValue = "Green bean";

var valuesArray = currentValue ? currentValue.split(", ") : [];
var index = valuesArray.indexOf(newValue);

if (index !== -1) {
    valuesArray.splice(index, 1);
} else {
    valuesArray.push(newValue);
}

player.SetVar("subGarnish", valuesArray.join(", "));

//alert("The garnish you have chosen: " + valuesArray);
}

window.Script11 = function()
{
  var player = GetPlayer();
var currentValue = player.GetVar("subGarnish");
var newValue = "Celery stick";

var valuesArray = currentValue ? currentValue.split(", ") : [];
var index = valuesArray.indexOf(newValue);

if (index !== -1) {
    valuesArray.splice(index, 1);
} else {
    valuesArray.push(newValue);
}

player.SetVar("subGarnish", valuesArray.join(", "));

//alert("The garnish you have chosen: " + valuesArray);
}

window.Script12 = function()
{
  var player = GetPlayer();
var countdownTimer;
var textBox = document.querySelector('div[data-acc-text="Timer"]');

if (textBox) {
    textBox.id = "Timer";
};


/*Recipes section*/
let recipes = {
  "shirleyTemple": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    orangeJuice: "half-full",
    sevenUp: "half-full",
    grenadine: "0.5",
    garnish: ["orange slice", "cherry"]
  },
  
  "vodkaSlime": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    limeJuice: "0.25",
    sevenUp: "until full",
    garnish: ["lime"]
  },    
  
  "seaBreeze": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "2",
    cranberryJuice: "half-full",
    grapefruitJuice: "half-full",
    garnish: ["lime wedge"]
  },
  
  "caesar": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    rimmer: "salt",
    vodka: "2",
    clamatoJuice: "until full",
    tabasco: "4 ",
    worcestershire: "4 ",
    garnish: ["lime wedge", "celery stick", "green bean"]
  },
  
  "saltyDog": {
    glass: "short",
    rimmer: "salt",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    grapefruitJuice: "until full",
    garnish: ["lime"]
  },
  
  "screwUp": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    orangeJuice: "half-full",
    sevenUp: "half-full",
    garnish: ["orange slice"]
  },
  
  "greyhound": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    grapefruitJuice: "until full",
    garnish: ["lime"]
  },
  
  "limeRickey": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    limeJuice: "1",
    sodaWater: "until full",
    simpleSyrup: "0.5",
    garnish: ["lime wedge"]
  },
  
  "capeCod": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    cranberryJuice: "until full",
    garnish: ["lemon"]
  },
  
  "moscowMule":{
    glass: "mule",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    limeJuice: "0.25",
    gingerBeer: "until full",
    garnish: ["lime wedge"]
  },
  
  "bloodyMary": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    rimmer: "salt",
    vodka: "2",
    tomatoJuice: "until full",
    tabasco: "4 ",
    worcestershire: "4 ",
    garnish: ["lime wedge", "celery stick", "green bean"]
  },
  
  "vodka7": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    sevenUp: "until full",
    garnish: ["lime"]
  },
  
  "screwdriver": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    orangeJuice: "until full",
    garnish: ["orange slice"]
  },
  
  "bayBreeze": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "2",
    cranberryJuice: "half-full",
    pineappleJuice: "half-full",
    garnish: ["lime wedge"]
  },
};

/*random item section*/
// Collect all keys from the recipes object
let recipeKeys = Object.keys(recipes);
// Function to get a random key
function getRandomKey(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};
// Get 1 random key
let randomKey = getRandomKey(recipeKeys);
// Assign to articulate variable
player.setVar("cmOrder1", randomKey);
var currentOn = player.GetVar("cmOrder1");
let currentRecipe = recipes[currentOn];

/*main section*/
const getVariables = (player) => {
    return {
        garnish: player.GetVar("subGarnish") ? player.GetVar("subGarnish").split(',') : [],
        glass: player.GetVar("subGlass") || "",
        grenadine: player.GetVar("subGrena") || "",
        ice: player.GetVar("subIce") || "",
        //juice: player.GetVar("subJuice") || "",
        clamatoJuice: player.GetVar("subJuice_Clamato") || "",
        cranberryJuice: player.GetVar("subJuice_Cranberry") || "",
        grapefruitJuice: player.GetVar("subJuice_Grapefruit") || "",
        limeJuice: player.GetVar("subJuice_Lime") || "",
        orangeJuice: player.GetVar("subJuice_Orange") || "",
        pineappleJuice: player.GetVar("subJuice_Pineapple") || "",
        tomatoJuice: player.GetVar("subJuice_Tomato") || "",
        mixingMethod: player.GetVar("subMixing") || "",
        sevenUp: player.GetVar("subPop_7u") || "",
        rimmer: player.GetVar("subRimmer") || "",
        simpleSyrup: player.GetVar("subSimp") || "",
        tabasco: player.GetVar("subTaba") || "",
        vodka: player.GetVar("subVodka") || "",
        worcestershire: player.GetVar("subWorce") || "",
        gingerBeer: player.GetVar("subPop_Ginger") || "",
        sodaWater: player.GetVar("subPop_Soda") || ""
        //condiments: player.GetVar("subCondiments") || "",
        //pop: player.GetVar("subPop") || "",
        //coke: player.GetVar("subPop_Coke") || ""
    };
};


function resetVariables() {
    player.SetVar("subGarnish", "");
    player.SetVar("subGlass", "");
    player.SetVar("subGrena", "0");
    player.SetVar("subIce", "");
    player.SetVar("subJuice", "");
    player.SetVar("subJuice_Clamato", "");
    player.SetVar("subJuice_Cranberry", "");
    player.SetVar("subJuice_Grapefruit", "");
    player.SetVar("subJuice_Lime", "");
    player.SetVar("subJuice_Orange", "");
    player.SetVar("subJuice_Pineapple", "");
    player.SetVar("subJuice_Tomato", "");
    player.SetVar("subMixing", "");
    player.SetVar("subPop_7u", "");
    player.SetVar("subRimmer", "");
    player.SetVar("subSimp", "0");
    player.SetVar("subTaba", "0");
    player.SetVar("subVodka", "0");
    player.SetVar("subWorce", "0");
    player.SetVar("subPop_Ginger", "");
    player.SetVar("subPop_Soda", "");
    player.SetVar("subCondiments", "");
    player.SetVar("subPop", "");
    player.SetVar("subPop_Coke", "");
};

// Function to unify and sort input
function unifyAndSort(input) {
	if (input === undefined) {
        return '';
    };
    
    if (Array.isArray(input)) {
        return input.map(str => typeof str === 'string' ? str.toLowerCase().replace(/\s+/g, ' ').trim() : str).sort().join(', ');
    } else if (typeof input === 'string') {
        return input.toLowerCase().replace(/\s+/g, ' ').trim();
    } else {
        return input;
    };
};

// Function to compare the recipe and variables
function compareRecipeAndVariables() {    
    var variables = getVariables(player);    
    let differences = {};
    let filteredVariables = {};
    
	for (let key in variables) {
    	if (variables[key] !== '') {
        	filteredVariables[key] = variables[key];
    	};
	};

	for (let key in currentRecipe) {
    	let recipeValue = unifyAndSort(currentRecipe[key]);
    	let variableValue = unifyAndSort(filteredVariables[key]);    
    	if (recipeValue !== variableValue) {
        	differences[key] = { recipe: recipeValue, variable: variableValue };
    	};
	};

	for (let key in filteredVariables) {
    	if (!(key in currentRecipe)) {
        	differences[key] = { recipe: 'None', variable: unifyAndSort(filteredVariables[key]) };
    	};
	};
  

	// Function to create alert message
    let alertMessage = "The differences between our recipe and your choices:\n\n";
	for (let key in differences) {
    	alertMessage += `${key} -\n Recipe: ${differences[key].recipe},\n Your choice: ${differences[key].variable}\n\n`;    	
	};
	if (Object.keys(differences).length > 0) {
    	alert(alertMessage);
    	resetVariables();
	} else {   
    	alert("Exactly what our costomer ordered. Well done!");
    	resetVariables();
	};
};
    

/*Timer section*/ 
const startTimer = () => {
    if (countdownTimer) {
        clearTimeout(countdownTimer); // Clear any existing timer
    }
    player.SetVar("countDown", 60); // Set countdown to 60 seconds
    player.SetVar("timerOn", true); // Ensure timerOn is true when starting the timer
    updateTimer();
};

const updateTimer = () => {
    var countdown = player.GetVar("countDown");
    var timerOn = player.GetVar("timerOn");
    var minutes = Math.floor(countdown / 60).toString().padStart(2, '0');
    var seconds = (countdown % 60).toString().padStart(2, '0');
    var timerElement = document.getElementById("Timer");

    if (timerElement) {
        timerElement.innerHTML = 
            "<span style='color: white; font: bold 24px \"Ink Free\", sans-serif;'>" + minutes + " : " + seconds + "</span>";
        
        if (countdown > 0 && timerOn) {
            countdown--;
            player.SetVar("countDown", countdown);
            countdownTimer = setTimeout(updateTimer, 1000); // Store the timer ID
        } else if (!timerOn) {
            // Reset the timer if timerOn is false
            player.SetVar("countDown", 60);
            timerElement.innerHTML = 
            "<span style='color: white; font: bold 24px \"Ink Free\", sans-serif;'>" + "01" + " : " + "00" + "</span>";
        } else {
            // Time's up
            compareRecipeAndVariables();
            timerElement.innerHTML = 
            "<span style='color: white; font: bold 24px \"Ink Free\", sans-serif;'>" + "01" + " : " + "00" + "</span>";
            player.SetVar("timerOn", false);            
        }
    } else {
        console.error("Element with ID 'Timer' not found.");
    }
};

startTimer();
}

window.Script13 = function()
{
  let recipes = {
  "shirleyTemple": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    orangeJuice: "half-full",
    sevenUp: "half-full",
    grenadine: "0.5",
    garnish: ["orange slice", "cherry"]
  },
  
  "vodkaSlime": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    limeJuice: "0.25",
    sevenUp: "until full",
    garnish: ["lime"]
  },    
  
  "seaBreeze": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "2",
    cranberryJuice: "half-full",
    grapefruitJuice: "half-full",
    garnish: ["lime wedge"]
  },
  
  "caesar": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    rimmer: "salt",
    vodka: "2",
    clamatoJuice: "until full",
    tabasco: "4 ",
    worcestershire: "4 ",
    garnish: ["lime wedge", "celery stick", "green bean"]
  },
  
  "saltyDog": {
    glass: "short",
    rimmer: "salt",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    grapefruitJuice: "until full",
    garnish: ["lime"]
  },
  
  "screwUp": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    orangeJuice: "half-full",
    sevenUp: "half-full",
    garnish: ["orange slice"]
  },
  
  "greyhound": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    grapefruitJuice: "until full",
    garnish: ["lime"]
  },
  
  "limeRickey": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    limeJuice: "1",
    sodaWater: "until full",
    simpleSyrup: "0.5",
    garnish: ["lime wedge"]
  },
  
  "capeCod": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    cranberryJuice: "until full",
    garnish: ["lemon"]
  },
  
  "moscowMule":{
    glass: "mule",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    limeJuice: "0.25",
    gingerBeer: "until full",
    garnish: ["lime wedge"]
  },
  
  "bloodyMary": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    rimmer: "salt",
    vodka: "2",
    tomatoJuice: "until full",
    tabasco: "4 ",
    worcestershire: "4 ",
    garnish: ["lime wedge", "celery stick", "green bean"]
  },
  
  "vodka7": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    sevenUp: "until full",
    garnish: ["lime"]
  },
  
  "screwdriver": {
    glass: "short",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "1",
    orangeJuice: "until full",
    garnish: ["orange slice"]
  },
  
  "bayBreeze": {
    glass: "tall",
    ice: "full",
    mixingMethod: "Build on ice",
    vodka: "2",
    cranberryJuice: "half-full",
    pineappleJuice: "half-full",
    garnish: ["lime wedge"]
  },
};

var player = GetPlayer();
var currentOn = player.GetVar("cmOrder1");
let currentRecipe = recipes[currentOn];

const getVariables = (player) => {
    return {
        garnish: player.GetVar("subGarnish") ? player.GetVar("subGarnish").split(',') : [],
        glass: player.GetVar("subGlass") || "",
        grenadine: player.GetVar("subGrena") || "",
        ice: player.GetVar("subIce") || "",
        //juice: player.GetVar("subJuice") || "",
        clamatoJuice: player.GetVar("subJuice_Clamato") || "",
        cranberryJuice: player.GetVar("subJuice_Cranberry") || "",
        grapefruitJuice: player.GetVar("subJuice_Grapefruit") || "",
        limeJuice: player.GetVar("subJuice_Lime") || "",
        orangeJuice: player.GetVar("subJuice_Orange") || "",
        pineappleJuice: player.GetVar("subJuice_Pineapple") || "",
        tomatoJuice: player.GetVar("subJuice_Tomato") || "",
        mixingMethod: player.GetVar("subMixing") || "",
        sevenUp: player.GetVar("subPop_7u") || "",
        rimmer: player.GetVar("subRimmer") || "",
        simpleSyrup: player.GetVar("subSimp") || "",
        tabasco: player.GetVar("subTaba") || "",
        vodka: player.GetVar("subVodka") || "",
        worcestershire: player.GetVar("subWorce") || "",
        gingerBeer: player.GetVar("subPop_Ginger") || "",
        sodaWater: player.GetVar("subPop_Soda") || ""
        //condiments: player.GetVar("subCondiments") || "",
        //pop: player.GetVar("subPop") || "",
        //coke: player.GetVar("subPop_Coke") || ""
    };
};

function resetVariables() {
    player.SetVar("subGarnish", "");
    player.SetVar("subGlass", "");
    player.SetVar("subGrena", "0");
    player.SetVar("subIce", "");
    player.SetVar("subJuice", "");
    player.SetVar("subJuice_Clamato", "");
    player.SetVar("subJuice_Cranberry", "");
    player.SetVar("subJuice_Grapefruit", "");
    player.SetVar("subJuice_Lime", "");
    player.SetVar("subJuice_Orange", "");
    player.SetVar("subJuice_Pineapple", "");
    player.SetVar("subJuice_Tomato", "");
    player.SetVar("subMixing", "");
    player.SetVar("subPop_7u", "");
    player.SetVar("subRimmer", "");
    player.SetVar("subSimp", "0");
    player.SetVar("subTaba", "0");
    player.SetVar("subVodka", "0");
    player.SetVar("subWorce", "0");
    player.SetVar("subPop_Ginger", "");
    player.SetVar("subPop_Soda", "");
    player.SetVar("subCondiments", "");
    player.SetVar("subPop", "");
    player.SetVar("subPop_Coke", "");
};

function unifyAndSort(input) {
	if (input === undefined) {
        return '';
    };
    
    if (Array.isArray(input)) {
        return input.map(str => typeof str === 'string' ? str.toLowerCase().replace(/\s+/g, ' ').trim() : str).sort().join(', ');
    } else if (typeof input === 'string') {
        return input.toLowerCase().replace(/\s+/g, ' ').trim();
    } else {
        return input;
    };
};

// Compare the recipe and variables
var variables = getVariables(player);
let differences = {};
let filteredVariables = {};

for (let key in variables) {
    if (variables[key] !== '') {
        filteredVariables[key] = variables[key];
    };
};

for (let key in currentRecipe) {
    let recipeValue = unifyAndSort(currentRecipe[key]);
    let variableValue = unifyAndSort(filteredVariables[key]);

    if (recipeValue !== variableValue) {
        differences[key] = { recipe: recipeValue, variable: variableValue };
    };
};

for (let key in filteredVariables) {
    if (!(key in currentRecipe)) {
        differences[key] = { recipe: 'None', variable: unifyAndSort(filteredVariables[key]) };
    };
};

// Create alert message
let alertMessage = "The differences between our recipe and your choices:\n\n";
for (let key in differences) {
    alertMessage += `${key} -\n Recipe: ${differences[key].recipe},\n Your choice: ${differences[key].variable}\n\n`;
};
if (Object.keys(differences).length > 0) {
    alert(alertMessage);
    resetVariables();
} else {    
    alert("You nailed it. Well done!");
    resetVariables();
};
}

window.Script14 = function()
{
  var player = GetPlayer();

function resetVariables() {
    player.SetVar("subGarnish", "");
    player.SetVar("subGlass", "");
    player.SetVar("subGrena", "0");
    player.SetVar("subIce", "");
    player.SetVar("subJuice", "");
    player.SetVar("subJuice_Clamato", "");
    player.SetVar("subJuice_Cranberry", "");
    player.SetVar("subJuice_Grapefruit", "");
    player.SetVar("subJuice_Lime", "");
    player.SetVar("subJuice_Orange", "");
    player.SetVar("subJuice_Pineapple", "");
    player.SetVar("subJuice_Tomato", "");
    player.SetVar("subMixing", "");
    player.SetVar("subPop_7u", "");
    player.SetVar("subRimmer", "");
    player.SetVar("subSimp", "0");
    player.SetVar("subTaba", "0");
    player.SetVar("subVodka", "0");
    player.SetVar("subWorce", "0");
    player.SetVar("subPop_Ginger", "");
    player.SetVar("subPop_Soda", "");
    player.SetVar("subCondiments", "");
    player.SetVar("subPop", "");
    player.SetVar("subPop_Coke", "");
};

resetVariables();
}

};
