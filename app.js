const fetchdata = () => {
  fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));
};

fetchdata();
