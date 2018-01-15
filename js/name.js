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

  // <---- select story div ---->
  var story = document.getElementById("story");

  // <---- create new removable div ---->
  var removable_div = document.createElement("div");
  removable_div.className = "removable";
  var dialog_div = document.createElement("div");
  dialog_div.className = "dialog"

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
  dialog_div.appendChild(name_is);
  dialog_div.appendChild(show_bad_name);
  dialog_div.appendChild(acknowledge_name);
  dialog_div.appendChild(okay_name_button_div);
  removable_div.appendChild(dialog_div);

  // <--- create new div --->
  story.appendChild(removable_div);
}

function name_wrong(){
  delete_removable("story", "removable", 0);
  create_removable_div(story);
  removable_div = document.getElementsByClassName("removable")[0];
  create_dialog_div(removable_div);
  dialog_div = document.getElementsByClassName("dialog")[0];
  var sorry_your_name_is = document.createElement("p");
  sorry_your_name_is.textContent = "Sorry I dont care... I am goint to just call you '" + bad_name + "' I like the way it sounds. Its much better then that stupid name you game me. '" + submited_name + "', HA what kinda idiot names their kid that.";
  dialog_div.appendChild(sorry_your_name_is)
  continue_button("Continue with your much better name", "background_check()", dialog_div)
  bad_counter = bad_counter + 1;
}

function name_okay(){
  delete_removable("story", "removable", 0);
  create_removable_div(story);
  removable_div = document.getElementsByClassName("removable")[0];
  create_dialog_div(removable_div);
  dialog_div = document.getElementsByClassName("dialog")[0];
  var we_beguin = document.createElement("p");
  we_beguin.textContent = "Good, im glad you like that name better then the stupid name you have. Now the journy begins.";
  dialog_div.appendChild(we_beguin)
  continue_button("Continue with your much better name", "background_check()", dialog_div)
  good_counter = good_counter + 1;
}