function displayAction(e) {
    try {
        document.getElementById("alertBox").innerHTML =
        `
        Couldn't fetch posts from api. Check your connection or contact the webpage's administrator.
        Error: ${e}
        `;
        document.getElementById("action").classList.toggle("hidden");
    } catch (e) {
        console.error("Couldn't find element tagged alertBox");
    }
}
document.getElementById("close").addEventListener(onclick, () => {
    document.getElementById("action").classList.toggle("hidden");
})
// GET blog contents
try {
    const response = await fetch("https://api.xefili.dev/articles/", {method:"GET", "mode":"no-cors"});
    const arrLen = await response.length;
    let i;
    for(i=arrLen;i>arrLen-4;i--) {
        const res = response[i];
        const content = await res.json();

        document.getElementById(`art${i}`).innerHTML = `<h3>${content.title}</h3><text>${content.content}</text>`;
    }
} catch(e) {
    console.error("Failed to connect to server or could not find element");
    displayAction(e);
}