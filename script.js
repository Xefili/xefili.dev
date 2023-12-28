// GET blog contents
try {
    let i = 0;
    for(i=1;i<5;i++) {
        const url = `https://api.xefili.dev/articles/${i}`;
        const options = {method: 'GET'};
        const res = await fetch(url, options);
        const content = await res.json();

        document.getElementById(`art${i}`).innerHTML = `<h3>${content.title}</h3><text>${content.content}</text>`;
    }
} catch(e) {
    console.error("Failed to connect to server or could not find element");
}