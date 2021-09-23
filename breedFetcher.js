const request = require('request');



//const breedName = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {


request('https://api.thecatapi.com/v1/breeds/search?q=' +breedName, (error, response, body) => {

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
  callback(null, firstelem.description)
}else{
callback("no breed name found"+ breedName, null);
}


});


};

module.exports = { fetchBreedDescription };
