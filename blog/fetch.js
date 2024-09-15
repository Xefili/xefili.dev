let URLparams = window.location.search;
const id = URLparams.replace("?","").split("=")[1];
console.info(`Detected article ID ${id}`)

let title = document.getElementById("title");
let content = document.getElementById("content");
let data;
data = await fetch(`https://api.xefili.dev/articles/`, {method: "GET"});
data = await data.json();
data = data.reverse();

console.log(data);

title.innerHTML = data[id].title;
content.innerHTML = data[id].content;
document.getElementById("moreInfo").innerHTML = `${data[id].time.day}.${data[id].time.month}.${data[id].time.year} | Tags: ${data[id].tags[0]}, ${data[id].tags[1]}, ${data[id].tags[2]}`