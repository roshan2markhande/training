fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    for (let i in data) {
      console.log(data[i].title);
      //   document.write(`${data[i].title} <br>`);
    }
  })
  .catch((err) => {
    console.log("name is" + err);
  });
