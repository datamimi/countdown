document.getElementById('answer-heading').innerHTML = 'No'

var birth_date = new Date("07/05/1989");
var hand_in_date = new Date("08/01/2019");
var today_date = new Date();

var time_diff_non_doc = Math.abs(birth_date.getTime() - today_date.getTime());
var day_diff_non_doc = Math.ceil(time_diff_non_doc / (1000 * 3600 * 24));

var time_diff_hand_in = Math.abs(today_date.getTime() - hand_in_date.getTime());
var day_diff_hand_in = Math.ceil(time_diff_hand_in / (1000 * 3600 * 24));

document.getElementById('stat-1').innerHTML = day_diff_non_doc
document.getElementById('stat-2').innerHTML = 0.5
document.getElementById('stat-3').innerHTML = day_diff_hand_in
