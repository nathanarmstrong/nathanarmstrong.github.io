// <---- create a bad name for the user ---->
var objects = ["Donkey", "Monkey", "Tire", "Desk", "Chair","Dick","Cunt"];
var action = ["Fucker", "Blower", "Snifer", "Crapper", "Jockey", "Murderer"];
var bad_name = objects[Math.floor(Math.random()*objects.length)] + " " + action[Math.floor(Math.random()*action.length)];

// <---- store submited name ---->
var submited_name = []

// <---- good counter ---->
var good_counter = 0;

// <---- bad counter ---->
var bad_counter = 0;

// <---- Player power level ---->
var weapon_power_level = 1;
var armor_power_level = 1;
var shield_power_level = 1;
var kills = 0;
var power_level = (weapon_power_level + armor_power_level + shield_power_level) * kills

// <---- Confidence level ---->
var confidence_level = 0;