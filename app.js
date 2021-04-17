const https = require("https");
const fs = require("fs");
https
  .get("https://jsonplaceholder.typicode.com/posts", (res) => {
    //Initialize the data
    let data = [];

    console.log("Status Code:", res.statusCode);

    res.on("data", (chunk) => {
      data.push(chunk); //obtain chuncks of the data
    });

    //obtain the complete data
    res.on("end", () => {
      console.log("Response ended: ");

      //join and parse the entire data
      const finalData = JSON.parse(Buffer.concat(data).toString());

      //convert the json file to string
      const jsonData = JSON.stringify(finalData);

      //write the the file to the desired directory
      fs.writeFile("./result/posts.json", jsonData, (error) => {
        if (error) {
          throw new Error(error.message);
        }
      });
    });
  })
  .on("error", (err) => {
    console.log("Error: ", err.message);
  });
