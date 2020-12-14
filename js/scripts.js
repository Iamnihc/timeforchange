// Costs of items, dollars
var itemCosts = {
  "Round Table large pizza": 19.99,
  "toyota corolla": 19925,
  "iPhone 12 Pro": 999,
  "Airpods Max": 549,
  "Airpods": 119,
  "One gallon of gas": 4,
  "In N Out Double Double Burger Combo": 7.84,
  "Your College Tuition (in state)": 13991,
  "Your College Tuition (out of state)": 43745,
  "One month of netfix": 8.99,
  "Median Home Price":200000,
  "Yacht":275000000,
};

// Salary of people, dollars per hour average
var peopleSalaries = {
  "Median American Household": 7.83760750963,
  "High School Teacher": 5.7291892165,
  "Senator": 174000 / 8760,
  "Average Salary of US Government Employees":2567/438,
  "Federal Minimum Wage, 9 to 5": 21112 / 8760,
  "California Minimum Wage, 9 to 5": 34944 / 8760,
  "Jeff Bezos": 13400000,

};

// Jeff https://marketrealist.com/p/how-much-does-jeff-bezos-make-a-second/

function getRealTime(income, item) {
  // returns time in milliseconds (i think)
  return (itemCosts[item] / peopleSalaries[income]) * 60 * 60 * 1000;
}
function getRCost(income,item,time) {
  // returns time in milliseconds (i think)
  return itemCosts[item] - (peopleSalaries[income]*(time/ 60 / 60 / 1000));
}
var startertime;
var totalTime;
var timeUpdater
function holder() {
  startertime = Date.now();
  timeUpdater = setInterval(()=> document.getElementById("time").innerHTML = ("held for " + ((Date.now() - startertime)/1000+"").padEnd(3,"0") + " seconds"),1);
}

function letGo() {
  totalTime = Date.now() - startertime;
  clearInterval(timeUpdater);
  //console.log(totalTime);
  updateScreen(totalTime, getPerson(), getItem());
}
function updateScreen(time, salary, item) {
  // shows the time difference somehow
  td = getRealTime(salary, item) - time;
  //console.log(getRealTime(salary, item));
  console.log("the real cost" + getRCost(salary,item,time));
  document.getElementById("out").innerHTML =
    "You are off by $" +
    Math.round(getRCost(salary,item,time)*100) / 100 ;
}

function createDropElement(name) {
  var opt = document.createElement("option");
  opt.id = name;
  opt.value = name;
  opt.innerHTML = name;
  return opt;
}

// creates a dropdown that pulls items from the dict itemCosts
function createItemDrop() {
  selectHTML = document.getElementById("itdrop");
  for (person in itemCosts) {
    console.log(person);
    selectHTML.appendChild(createDropElement(person));
  }
}

// Creates a menu that pulls items from the dict peopleSalaries
function createPeopleDrop() {
  selectHTML = document.getElementById("indrop");
  for (person in peopleSalaries) {
    console.log(person);
    selectHTML.appendChild(createDropElement(person));
  }
}

// Gets the currently selected salary in js
function getPerson() {
  return document.getElementById("indrop").value;
}

// Gets the currently selected item in js
function getItem() {
  return document.getElementById("itdrop").value;
}

createPeopleDrop();
createItemDrop();

function absorbEvent_(event) {
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}
function absorbTouchStart_(event) {
  holder();
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;

  return false;
}
function absorbTouchEnd_(event) {
  console.log("hmm");
  letGo();
  var e = event || window.event;
  e.preventDefault && e.preventDefault();
  e.stopPropagation && e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;

  return false;
}

function preventLongPressMenu(node) {
  node.ontouchstart = absorbTouchStart_;
  node.ontouchmove = absorbEvent_;
  node.ontouchend = absorbTouchEnd_;
  node.ontouchcancel = absorbEvent_;
}

function init() {
  preventLongPressMenu(document.getElementById("holdbutton"));
}
init();

function updateValues() {
  document.getElementById("salary").innerHTML = "$"((Math.round(peopleSalaries[getPerson()]*100))/100)+"Per Hour On Average";
  document.getElementById("itemCost").innerHTML = "$"itemCosts[getItem()];
}

isLight = window.matchMedia("(prefers-color-scheme: light)").matches
console.log(isLight)

if (isLight){
    toAdd = document.createElement("link")
    toAdd.rel = "stylesheet";
    toAdd.href = "css/theme-light.css"
    document.getElementById("lmao").appendChild(toAdd)
    
}
else{
    toAdd = document.createElement("link")
    toAdd.rel = "stylesheet";
    toAdd.href = "css/theme-dark.css"
    document.getElementById("lmao").appendChild(toAdd)
}

updateValues();
