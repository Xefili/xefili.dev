const div = document.getElementById("generator");

let i;
var raw = await fetch("https://api.xefili.dev/articles", {"method":"GET"})
var len = await raw.json()

for(i=1;i<len.length+1;i++) {
    var res = await fetch(`https://api.xefili.dev/articles/${i}`, {"method":"GET"});
    var content = await res.json();
    div.appendChild(document.createElement("box")).innerHTML += `<h1 class="dark:text-white" id=${content.title}>${content.title}</h1><text class="dark:text-white">${content.content}</text>`
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
    for(i=0;i<li.length;i++) {
        var a = li[i].getElementsByTagName("a")[0].innerHTML = content[i].title;
        var b = li[i].getElementsByTagName("a")[0].setAttribute("href", `#${content[i].title}`);
    }
})