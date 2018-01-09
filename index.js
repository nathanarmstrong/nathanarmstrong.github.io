
var objects = ["Donkey", "Monkey", "Tire", "Desk", "Chair","Dick","Cunt"];
var action = ["Fucker", "Blower", "Snifer", "Crapper", "Jockey"];

var bad_name = objects[Math.floor(Math.random()*objects.length)] + " " + action[Math.floor(Math.random()*action.length)];
console.log("**** Bad Name ****");
console.log(bad_name);
console.log("++++++++++++++++++++++++++");


function test(){
var first_name = document.getElementsByClassName("name_submit")[0].value;
var last_name = document.getElementsByClassName("name_submit")[1].value;
var subited_name = first_name + " " + last_name;
console.log("**** Submited Name ****");
console.log(first_name, last_name);
console.log("++++++++++++++++++++++++++");

var submit_div = document.getElementById("submit_div");
var submit_form = document.getElementById("submit_form");

submit_div.removeChild(submit_form);


}