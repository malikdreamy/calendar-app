
const currentState = () =>{
    if(localStorage.getItem("currentState")){
        //let tabs = document.getElementById("tabs");
        //tabs.remove();
    let state = localStorage.getItem("currentState");
    let parser = new DOMParser();
    let doc = parser.parseFromString(state, 'text/html'); 
    //doc.body.outerHTML = doc.body.innerHTML 

    // let bodyOri = document.getElementsByTagName('body')[0].childNodes[5]
    let bodyOri = document.getElementsByTagName('html')[0];
      bodyOri.replaceWith(doc.firstChild);
    //const range = document.createRange();
    //range.createContextualFragment(state);
    //document.getElementsByClassName("replacement")[0].setAttribute("id", "tabs");
    $( function() {
        $( "#tabs").tabs({
        });
    });
    $("#calendar1").remove();

    let newCalendar = `
    <div id="calendar1">
    <h2>Calendar</h2>
    <h4>Select The Date Below To Add Schedule</h4>
</div>`;
const range = document.createRange();
let fragment = range.createContextualFragment(newCalendar);
document.getElementById("replacement").append(fragment);
document.getElementById("replacement");
    $("#calendar1").multiDatesPicker({            // add date picker to #calendar1
        numberOfMonths: 1,
        changeYear: true,
        changeMonth: true,
        showOtherMonths: true,
        minDate: new Date (2022, 0, 1),
        maxDate: new Date (2025,0, 5),
        gotoCurrent: true  
    });
    document.querySelector("#calendar1 > div").style.backgroundColor = "rgba(14, 3, 3, 0.712)"; // edit color of calendar
    document.querySelector("#calendar1 > div").style.marginLeft = "auto"; //center calendar to middle of page
    document.querySelector("#calendar1 > div").style.marginRight = "auto";
    //document.getElementsByClassName("replacement")[0].setAttribute("id", "calendar1");
    let saveBtn = document.querySelector("#hour-11 > button")
    saveBtn.addEventListener("click", saveSch)
    let storageArray = [];
var scheduleObj = [];
const saveSchedule = () => {
    selectedMonth = document.querySelector('[selected="selected"]').innerText;
    selectedDay = document.getElementById("addDate").innerText;
    selectedYear = document.querySelectorAll('[selected="selected"]')[1].innerText;
    let newScedule = {
        date: selectedMonth + " " + selectedDay + " " + selectedYear
    }
    var elem = document.querySelector("#hour-11");
    var clone = elem.cloneNode(true);
    clone.id = "hour";
    clone.classList.add("row");
    clone.classList.add("time-block");
    clone.classList.add("future");
    clone.classList.add("createdBlock");
    clone.style.display = "flex";
    clone.firstElementChild.classList.add("createdInput");
    clone.dataset.instance = selectedDay;
    let saveImg = clone.querySelector('.saveBtn');
    saveImg.remove();
    let removeBtn = document.createElement('button');
    clone.appendChild(removeBtn);
    removeBtn.style.backgroundColor = "red";
    removeBtn.style.height = "65px"
    removeBtn.style.width = "65px";
    removeBtn.style.borderRadius = "5px"
    removeBtn.style.display = "block";
    removeBtn.classList.add("removeBtn")
    removeBtn.innerText = "Remove From Schedule";
    removeBtn.style.fontSize = "11px";
    let addBtn = document.createElement('button');
    addBtn.style.backgroundColor = "green";
    addBtn.style.width = "65px";
    addBtn.style.borderRadius = "5px"
    addBtn.innerText = "Create New Event"
    addBtn.style.fontSize = "10px"
    addBtn.style.height = "65px";
    addBtn.setAttribute('id', "addBtn")
    clone.appendChild(addBtn);
 var num_tabs = $('div#tabs ul li.tab').length + 1;        
$('div#tabs ul').append(
'<li class="tab"><a href="#tab-' + num_tabs + '"> ' + selectedMonth + " " + selectedDay + " " + selectedYear + '</a></li>' );
$('div#tabs').append(
'<div id="tab-' + num_tabs + '"></div>');
$('#tabs').tabs("refresh");
$('#tabs').tabs("option", "active", -1); //makes the new tab active     
function insertContent(content) {
    var activeTab = $("#tabs").tabs('option', 'active');   
    activeTab += 1;   
    $("#tab-" + activeTab).append(content); }
    insertContent(clone);

$('#tabs').tabs();
scheduleObj.push(newScedule);
changeColor();
//let string = document.getElementById("tabs").innerHTML;
    let string = document.getElementsByTagName("html")[0].outerHTML;
localStorage.setItem("currentState", string);
}   
saveBtn.addEventListener("click", saveSchedule);
}};
    
window.addEventListener("load", currentState);
$("#calendar1").multiDatesPicker({            // add date picker to #calendar1
    numberOfMonths: 1,
    changeYear: true,
    changeMonth: true,
    showOtherMonths: true,
    minDate: new Date (2022, 0, 1),
    maxDate: new Date (2025,0, 5),
    gotoCurrent: true  
});

$( function() {
    $("#tabs").tabs({
         });
  });
document.querySelector("#hour-9").style.display = "none";
document.querySelector("#hour-10").style.display = "none"; // make extra schedule tabs display none
document.querySelector("#calendar1 > div").style.backgroundColor = "rgba(14, 3, 3, 0.712)"; // edit color of calendar
document.querySelector("#calendar1 > div").style.marginLeft = "auto"; //center calendar to middle of page
document.querySelector("#calendar1 > div").style.marginRight = "auto";
let block = document.querySelector("#addSchedule");  // gets button that creates new ScheduleBlock
let dayBox = document.querySelectorAll(".ui-state-default"); // selects all days of the week for a month

const activateBtn = () =>{
let activeBtn = document.querySelector(".ui-datepicker-current-day").innerText; // gets current date
document.getElementById("addDate").innerText = activeBtn;
return activeBtn;
}

for( let i = 0; i < dayBox.length; i++){
dayBox[i].addEventListener("click", activateBtn); // loops over every day of the week and adds event listener
};

const saveSch = () =>{
let act = activateBtn();
//act.classList.add("ui-state-highlight"); // if user saves schedule in day it turns green
//act.parentElement.classList.add("ui-state-highlight")
};

let saveBtn = document.querySelector("#hour-11 > button")
saveBtn.addEventListener("click", saveSch)

const loadRmv = () => {
removeBtn = document.querySelectorAll(".removeBtn");

}
window.addEventListener("click", loadRmv);

const addNewBlock = (e) =>{
    let parent = e.target.parentElement;
    var clone = parent.cloneNode(true);
    e.target.parentElement.parentElement.appendChild(clone);
    let string = document.getElementsByTagName("html")[0].outerHTML;
    localStorage.setItem("currentState", string);
}

const checkForAddBtn = () => {
if (document.querySelector("#addBtn")){
let addBtn = document.querySelectorAll("#addBtn");
addBtn.forEach((item) => {
    item.addEventListener('click', addNewBlock)

});
} else {}};

window.addEventListener("click", checkForAddBtn);

const changeColor = () =>{
var date = new Date();
var today = date.getDate();
let created = document.querySelectorAll(".createdBlock");
for (let i = 0; i < created.length; i++){
let selectedDay = created[i].dataset.instance;
    if (today > selectedDay ){
created[i].style.backgroundColor =  "#ff6961";
    }
}
}
const removeSchedule = (e) =>{
    let parent = e.target.parentElement;
    let grandParent = parent.parentElement
    let targetIndex = e.target.parentElement.parentElement.getAttribute('aria-labelledby').slice(6,8);
    let listEl = '[aria-labelledby="ui-id-' + targetIndex + '"]';
    let currentList = document.querySelector(listEl);
    parent.remove();
    let string = document.getElementsByTagName("html")[0].outerHTML;
        localStorage.setItem("currentState", string);
//     let string = document.getElementById("tabs").innerHTML;
// localStorage.setItem("currentState", string);

    if(grandParent.innerHTML == ''){
        currentList.remove();
        let string = document.getElementsByTagName("html")[0].outerHTML;
        localStorage.setItem("currentState", string);
       
    }}

    const checkForRemoveBtn = () => {
        if (document.querySelector(".removeBtn")){
        let removeBtn = document.querySelectorAll(".removeBtn");
        removeBtn.forEach((item) => {
            item.addEventListener('click', removeSchedule);
        //     let string = document.getElementById("tabs").innerHTML;
        // localStorage.setItem("currentState", string);
        });
        } else {}};
        
        window.addEventListener("click", checkForRemoveBtn);

let storageArray = [];
var scheduleObj = [];
const saveSchedule = () => {
    selectedMonth = document.querySelector('[selected="selected"]').innerText;
    selectedDay = document.getElementById("addDate").innerText;
    selectedYear = document.querySelectorAll('[selected="selected"]')[1].innerText;
    let newScedule = {
        date: selectedMonth + " " + selectedDay + " " + selectedYear
    }
    var elem = document.querySelector("#hour-11");
    var clone = elem.cloneNode(true);
    clone.id = "hour";
    clone.classList.add("row");
    clone.classList.add("time-block");
    clone.classList.add("future");
    clone.classList.add("createdBlock");
    clone.style.display = "flex";
    clone.firstElementChild.classList.add("createdInput");

    clone.dataset.instance = selectedDay;
    let saveImg = clone.querySelector('.saveBtn');
    saveImg.remove();
    let removeBtn = document.createElement('button');
    clone.appendChild(removeBtn);
    removeBtn.style.backgroundColor = "red";
    removeBtn.style.height = "65px"
    removeBtn.style.width = "65px";
    removeBtn.style.borderRadius = "5px"
    removeBtn.style.display = "block";
    removeBtn.classList.add("removeBtn")
    removeBtn.innerText = "Remove From Schedule";
    removeBtn.style.fontSize = "11px";
    let addBtn = document.createElement('button');
    addBtn.style.backgroundColor = "green";
    addBtn.style.width = "65px";
    addBtn.style.borderRadius = "5px"
    addBtn.innerText = "Create New Event"
    addBtn.style.fontSize = "10px"
    addBtn.style.height = "65px";
    addBtn.setAttribute('id', "addBtn")
    clone.appendChild(addBtn);
var num_tabs = $('div#tabs ul li.tab').length + 1;        
$('div#tabs ul').append(
'<li class="tab"><a href="#tab-' + num_tabs + '"> ' + selectedMonth + " " + selectedDay + " " + selectedYear + '</a></li>' );
        
$('div#tabs').append(
'<div id="tab-' + num_tabs + '"></div>');
$('#tabs').tabs("refresh");
$('#tabs').tabs("option", "active", -1); //makes the new tab active
            
function insertContent(content) {
    var activeTab = $("#tabs").tabs('option', 'active');   
    activeTab += 1;   
    $("#tab-" + activeTab).append(content); }
    insertContent(clone);

$('#tabs').tabs();
scheduleObj.push(newScedule);
changeColor();
//let string = document.getElementById("tabs").innerHTML;
    let string = document.getElementsByTagName("html")[0].outerHTML;
localStorage.setItem("currentState", string);

}
    
saveBtn.addEventListener("click", saveSchedule);

$(document).on('change keydown keypress input', 'div[data-placeholder]', function() {
    if (this.textContent) {
        this.dataset.divPlaceholderContent = 'true';
    }
    else {
        delete(this.dataset.divPlaceholderContent);
    }
});







