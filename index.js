// <---- create a bad name for the user ---->
var objects = ["Donkey", "Monkey", "Tire", "Desk", "Chair","Dick","Cunt"];
var action = ["Fucker", "Blower", "Snifer", "Crapper", "Jockey", "Murderer"];
var bad_name = objects[Math.floor(Math.random()*objects.length)] + " " + action[Math.floor(Math.random()*action.length)];
// console.log("**** Bad Name ****");
// console.log(bad_name);
// console.log("++++++++++++++++++++++++++");

// <---- store submited name ---->
submited_name = []

// <---- select story div ---->
var story = document.getElementById("story");

// **** function to take user's name and create a verify user name ****
function begin_story(){
// <---- collect actual user's name ---->
var first_name = document.getElementsByClassName("name_submit")[0].value;
var last_name = document.getElementsByClassName("name_submit")[1].value;
submited_name.push(first_name + " " + last_name);
// console.log("**** Submited Name ****");
// console.log(submited_name);
// console.log("++++++++++++++++++++++++++");

// <---- delete input form ---->
delete_removable("submit_div","removable", 0);
// var submit_div = document.getElementById("submit_div");
// var removable = document.getElementsByClassName("removable")[0];
// submit_div.removeChild(removable[0]);


// <---- create new removable div ---->
var removable_div = document.createElement("div");
removable_div.className = "removable";

name_is = document.createElement("p");
name_is.textContent = "Ah... soo your name is..."

show_bad_name = document.createElement("h1")
show_bad_name.textContent = bad_name

acknowledge_name = document.createElement("p");
acknowledge_name.textContent = "Are you okay with this name?"

// <--- create ok or change buttons --->
var okay_name_button_div = document.createElement("div")
var ok_name_button = document.createElement("button");
ok_name_button.setAttribute("onclick", "name_okay()");
ok_name_button.textContent = "Okay Dokay";
var wrong_name_button = document.createElement("button");
wrong_name_button.setAttribute("onclick", "name_wrong()")
wrong_name_button.textContent = "Nope Change it!";
okay_name_button_div.appendChild(ok_name_button);
okay_name_button_div.appendChild(wrong_name_button)

// <--- removable div's content --->
removable_div.appendChild(name_is);
removable_div.appendChild(show_bad_name)
removable_div.appendChild(acknowledge_name);
removable_div.appendChild(okay_name_button_div)

// <--- create new div --->
story.appendChild(removable_div);
}

function name_wrong(){
  delete_removable("story", "removable", 0);
  var removable_div = document.createElement("div")
  removable_div.className = "removable";
  var sorry_your_name_is = document.createElement("p");
  sorry_your_name_is.textContent = "Sorry I dont care... I am goint to just call you '" + bad_name + "' I like the way it sounds. Its much better then that stupid name you game me. '" + submited_name + "', HA what kinda idot names their kid that.";

removable_div.appendChild(sorry_your_name_is);
continue_button("Continue with your stupid name", "background_check()", removable_div)
story.appendChild(removable_div)

}

function name_okay(){
  delete_removable("story", "removable", 0);
  create_removable_div();
}

function create_removable_div(){
  var removable_div = document.createElement("div");
  removable_div.className = "removable";
}

// **** function takes parent and deletes the removable class div child ****
function delete_removable(parent, child, i){
  var submit_div = document.getElementById(parent);
  var removable = document.getElementsByClassName(child)[i];
  submit_div.removeChild(removable);
}

function continue_button(value, story_function, parent){
  var continue_button = document.createElement("button");
  continue_button.setAttribute("onclick", story_function);
  continue_button.textContent = value;
  parent.append(continue_button);
}
