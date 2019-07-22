var fetchJSONData = new Object();
function updateJSONData(){
fetchJSONData = JSON.parse($("#json-data-text").val());
console.log(fetchJSONData);

}
alert("A");