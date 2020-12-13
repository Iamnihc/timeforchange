
// Costs of items, dollars
var itemCosts = {"pizza":20, "toyota corolla": 19925, "iPhone 12 Pro": 999, "Airpods Max":549, "Airpods":119, "One gallon of gas": 4, "Double Double Burger Combo":7.84, "Your College Tuition (in state)":13991, "Your College Tuition (out of state)":43745, "One month of netfix":8.99 };

// Salary of people, dollars per hour
var peopleSalaries = {"me":12, "Jeff":13400000};
// Jeff https://marketrealist.com/p/how-much-does-jeff-bezos-make-a-second/ 


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
    updateScreen(totalTime, getPerson(), getItem())
}
function updateScreen(time, salary, item){
    // shows the time difference somehow
    td = getRealTime(salary, item) - time;
    console.log(getRealTime(salary, item))
    document.getElementById("out").innerHTML = "You are off by" + (td/1000) + " seconds. try again if you would like"

}

function createDropElement(name){
    var opt = document.createElement("option")
    opt.id=name;
    opt.value = name;
    opt.innerHTML = name;
    return opt;

}

// creates a dropdown that pulls items from the dict itemCosts
function createItemDrop(){
    selectHTML = document.getElementById("itdrop")
    for (person in itemCosts){
        console.log(person)
        selectHTML.appendChild(createDropElement(person))
    }
}


// Creates a menu that pulls items from the dict peopleSalaries
function createPeopleDrop(){
    selectHTML = document.getElementById("indrop")
    for (person in peopleSalaries){
        console.log(person)
        selectHTML.appendChild(createDropElement(person))
    }
}

// Gets the currently selected salary in js
function getPerson(){
    return document.getElementById("indrop").value
}

// Gets the currently selected item in js
function getItem(){
    return document.getElementById("itdrop").value
}

createPeopleDrop();
createItemDrop();