const div = document.getElementById("generator");

let i;
var raw = await fetch("https://api.xefili.dev/articles", {"method":"GET"})
var jsonResponse = await raw.json()

for(i=0;i<jsonResponse.length+1;i++) {
    try {
        let content = jsonResponse[i];
        div.appendChild(document.createElement("box")).innerHTML += `<h1 class="dark:text-white" id=${content.title}>${content.title}</h1><text class="dark:text-white">${content.content}</text>`
    } catch(e) {
        console.log("");
    }
}

document.getElementById("search-input").addEventListener("input", async () => {
    var ul = document.getElementById("search-ul");
    var li = document.getElementsByTagName("li");
    var query = document.getElementById("search-input").value;
    console.info(query);
    var options = {"method":"GET"}
    var res = await fetch(`https://api.xefili.dev/articles?title_like=${query}&_limit=3`, options);
    const content = await res.json();
    console.info(content);
    let i;
    for(i=0;i<li.length+1;i++) {
        li[i].getElementsByTagName("a")[0].innerHTML = `${content[i].title}`;
        li[i].getElementsByTagName("a")[0].setAttribute("href", `#${content[i].title}`);
    }
})