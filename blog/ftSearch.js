const div = document.getElementById("generator");

let i;
let raw = await fetch("https://api.xefili.dev/articles", {"method":"GET"})
let raw2 = await raw.json()
let jsonResponse = await raw2.reverse();

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
    let ul = document.getElementById("search-ul");
    let li = document.getElementsByTagName("li");
    let query = document.getElementById("search-input").value;

    let res = await fetch(`https://api.xefili.dev/search?query=${query}&limit=3`, {method:"GET", mode:"cors"});
    const content = await res.json();


    let i;
    if(content.length == 3) {
        for(i=0;i<3;i++) {
            li[i].getElementsByTagName("a")[0].innerHTML = `${content[i].item.title}`;
            li[i].getElementsByTagName("a")[0].setAttribute("href", `#"${content[i].item.title}"`);
        }
    }
    if(content.length == 2) {
        for(i=0;i<2;i++) {
            li[i].getElementsByTagName("a")[0].innerHTML = `${content[i].item.title}`;
            li[i].getElementsByTagName("a")[0].setAttribute("href", `#"${content[i].item.title}"`);
        }
        li[2].getElementsByTagName("a")[0].innerHTML = "";
    }
    if(content.length == 1) {
        for(i=0;i<1;i++) {
            li[i].getElementsByTagName("a")[0].innerHTML = `${content[i].item.title}`;
            li[i].getElementsByTagName("a")[0].setAttribute("href", `#"${content[i].item.title}"`);
        }
        li[1].getElementsByTagName("a")[0].innerHTML = "";
        li[2].getElementsByTagName("a")[0].innerHTML = "";
    }

    if(query == "") {
        li[0].getElementsByTagName("a")[0].innerHTML = "";
        li[1].getElementsByTagName("a")[0].innerHTML = "";
        li[2].getElementsByTagName("a")[0].innerHTML = "";
    }
})