// **** functions create divs ****
function create_removable_div(parent){
  var removable_div = document.createElement("div");
  removable_div.className = "removable";
  parent.appendChild(removable_div);
}

function create_dialog_div(parent){
  removable_div = document.getElementsByClassName("removable")
  var dialog_div = document.createElement("div");
  dialog_div.className = "dialog";
  parent.appendChild(dialog_div);
}

// **** function takes parent and deletes the removable class div child ****
function delete_removable(parent, child, i){
  var submit_div = document.getElementById(parent);
  var removable = document.getElementsByClassName(child)[i];
  submit_div.removeChild(removable);
}

// **** function creates continue button
function continue_button(value, story_function, parent){
  var continue_button = document.createElement("button");
  continue_button.setAttribute("onclick", story_function);
  continue_button.textContent = value;
  parent.append(continue_button);
}