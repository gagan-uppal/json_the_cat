const request = require('request');



const userInput = process.argv[2];


request('https://api.thecatapi.com/v1/breeds/search?q=' +userInput, (error, response, body) => {

//console.log(error);
if (error) {
console.log(error)};


//console.log(response);
//console.log(body);
//console.log(typeof body)
const data = JSON.parse(body);
//console.log(data);
//console.log(typeof data);
const firstelem = data[0];
if (firstelem){
  console.log(firstelem.description)
}

console.log("breed not found");

});



