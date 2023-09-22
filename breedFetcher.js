const request = require("request");

// request the resource at the url to print the breed description
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (requestError, response, body) => {
    // if the request fails, call the callback with the error
    if (requestError) {
      callback(requestError, null);
      
    } else {
      // deserialize
      const data = JSON.parse(body);
      
      // if the data array is not empty, call the callback with the description
      if (data.length > 0) {
        const description = data[0].description;
        callback(null, description);
      
      // if the data array is empty, call the callback with an error message
      } else {
        callback("Breed not found", null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };