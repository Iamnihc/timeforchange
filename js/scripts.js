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
};

// Salary of people, dollars per hour average
var peopleSalaries = {
  "Median American Household": 7.83760750963,
  "High School Teacher": 5.7291892165,
  "Senator": 174000 / 8760,
  "Federal Minimum Wage, 9 to 5": 21112 / 8760,
  "California Minimum Wage, 9 to 5": 34944 / 8760,
  "Jeff Bezos": 13400000,

};

// Jeff https://marketrealist.com/p/how-much-does-jeff-bezos-make-a-second/

function getRealTime(income, item) {
  // returns time in milliseconds (i think)
  return (itemCosts[item] / peopleSalaries[income]) * 60 * 60 * 1000;
}
var startertime;
var totalTime;
function holder() {
  startertime = Date.now();
}
function letGo() {
  totalTime = Date.now() - startertime;
  console.log(totalTime);
  updateScreen(totalTime, getPerson(), getItem());
}
function updateScreen(time, salary, item) {
  // shows the time difference somehow
  td = getRealTime(salary, item) - time;
  console.log(getRealTime(salary, item));
  document.getElementById("out").innerHTML =
    "You are off by " +
    Math.round(td) / 1000 +
    " seconds. <br> try again if you would like";
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
  document.getElementById("salary").innerHTML = peopleSalaries[getPerson()];
  document.getElementById("itemCost").innerHTML = itemCosts[getItem()];
}

isLight = window.matchMedia("(prefers-color-scheme: light)").matches
console.log(isLight)

updateValues();
