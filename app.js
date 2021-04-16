const axios = require("axios");
const fs = require("fs");

const url = "http://jsonplaceholder.typicode.com/posts";

const fetchdata = async () => {
  try {
    const { data } = await axios.get(url);

    // Convert data to json string
    const jsondata = JSON.stringify(data);

    // Write the obtained file to require folder
    fs.writeFile("./result/posts.json", jsondata, (error) => {
      if (error) {
        throw new Error(error.message);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

fetchdata();
