const div = document.getElementById("generator");

let i;
var raw = await fetch("https://api.xefili.dev/articles", {"method":"GET"})
let raw2 = await raw.json()
var jsonResponse = await raw2.reverse();

for(i=0;i<jsonResponse.length+1;i++) {
    try {
        let content = jsonResponse[i];
        let box = document.createElement("box")
        box.innerHTML += `<h1 class="dark:text-white" id="${content.title}">${content.title}</h1><p class="dark:text-white">${content.content}</p>`;
        if(i % 2 != 0) {
            box.classList.add("bg-light-200", "dark:bg-dark-200");
        }
        box.classList.add("p-4", "m-4", "rounded-2xl", "block");
        div.appendChild(box);
    } catch(e) {
        console.log("");
    }
}

document.getElementById("search-input").addEventListener("input", async () => {
    var ul = document.getElementById("search-ul");
    var li = document.getElementsByTagName("li");
    var query = document.getElementById("search-input").value;
    console.info(query);
    var res = await fetch(`https://api.xefili.dev/search?query=${query}&limit=3`, {method:"GET", mode:"cors"});
    const content = await res.json();
    console.info(content);
    let i;
    for(i=0;i<li.length+1;i++) {
        li[i].getElementsByTagName("a")[0].innerHTML = `${content[i].item.title}`;
        li[i].getElementsByTagName("a")[0].setAttribute("href", `#"${content[i].item.title}"`);
    }
})