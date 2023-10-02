const tags = ["javascript", "react", "express"];

let query = "";
tags.map((tag) => {
  return (query = query + "tags_like=" + tag + "&");
});

console.log(query);
