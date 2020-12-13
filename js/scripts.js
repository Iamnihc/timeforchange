
// Costs of items, dollars
var itemCosts = {"pizza":20, "toyota corolla": 19925};

// Salary of people, dollars per hour
var peopleSalaries = {"me":12};



function getRealTime(income, item){
    // returns time in milliseconds (i think)
    return itemCosts[item] / peopleSalaries[income] * 60 *60 *1000;
}
var startertime
var totalTime
function holder(){
    startertime = Date.now();

}
function letGo(){
    totalTime =  Date.now() - startertime;
    console.log(totalTime)
    updateScreen(totalTime)
}
function updateScreen(time, salary, item){
    // shows the time difference somehow
    console.log(getRealTime(salary, item) - time);
}

// creates a dropdown that pulls items from the dict itemCosts
function createItemDrop(){

}

// Creates a menu that pulls items from the dict peopleSalaries
function createPeopleDrop(){

}

// Gets the currently selected salary in js
function getPeople(){

}

// Gets the currently selected item in js
function getItem(){

}
