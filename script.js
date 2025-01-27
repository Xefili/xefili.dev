var data;

async function queryAPI() {
    data = await fetch("https://api.xefili.dev/articles/", {method:"GET"});
    data = await data.json();
    data = data.reverse();
}

await queryAPI();

let latest = document.getElementById("latest");
let storybox = document.getElementById("stories");

function fillLatest() {
    let title = document.createElement("h1");
    title.innerHTML = data[0].title;
    title.classList.add("no-underline", "text-3xl");
    latest.appendChild(title);

    let content = document.createElement("p");
    content.innerHTML = data[0].content;
    latest.appendChild(content);
    latest.addEventListener("click", () => {
        window.location.href = `https://xefili.dev/blog/read.html?id=0`;
    });
}

function fillStories() {
    for(let i = 2; i<=data.length; i++) {
        let div = document.createElement("div");
        div.classList.add("border", "p-4", "rounded-2xl");
        div.addEventListener("click", () => {
            window.location.href = `https://xefili.dev/blog/read.html?id=${i-1}`;
        });
        let title = document.createElement("h1");
        title.innerHTML = data[i-1].title;
        title.classList.add("no-underline", "text-3xl");
        div.appendChild(title);
        let content = document.createElement("p");
        content.innerHTML = data[i-1].content;
        div.appendChild(content);
        storybox.appendChild(div);
    }
}

fillLatest();
fillStories();
