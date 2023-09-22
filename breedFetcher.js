const request = require("request");

// declare variables to store the breed command line argument and combine it with the url
const args = process.argv.slice(2);
const breed = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

// request the resource at the url to print the breed description
const requestBreed = function() {
  request(url, (requestError, response, body) => {
    // if the request fails, print the error
    if (requestError) {
      console.log(requestError);
      return;
    }

    // deserialize
    const data = JSON.parse(body);
    
    // if the data array is empty, print a message
    if (!data.length) {
      console.log("The requested breed was not found");
      return;
    }
    
    // print the breed description
    console.log(data[0].description);
  });
};

requestBreed();
