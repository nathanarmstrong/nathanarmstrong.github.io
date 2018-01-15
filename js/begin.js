function background_check () {
  delete_removable("story", "removable", 0);
  create_removable_div(story);
  removable_div = document.getElementsByClassName("removable")[0];
  create_dialog_div(removable_div);
  dialog_div = document.getElementsByClassName("dialog")[0];
  journy_begins = document.createElement("p");
  journy_begins.textContent = "Our journy begins with the town drunk at a local pub getting shit faced... that drunk-o's name is " + bad_name + ". Ha thats you, a drunk face slob. What would you like to do next?";
  dialog_div.appendChild(journy_begins);
  continue_button("drink more beer", "drink_beer()", dialog_div);
  continue_button("hit on waitress", "hit_on_waitess()", dialog_div);
  continue_button("Leave the bar(unlikely you drunk)", "leave_bar()", dialog_div);
}

function drink_beer(){
  delete_removable("story", "removable", 0);
  create_removable_div(story);
  removable_div = document.getElementsByClassName("removable")[0];
  create_dialog_div(removable_div);
  dialog_div = document.getElementsByClassName("dialog")[0];
  confidence_level = confidence_level + 1;

}