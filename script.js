function displayAction(e) {
    alert(`Looks like we've hit a roadblock. If this problem persists, contact mail@xefili.dev with the following error code: ${e}`);
}
// GET blog contents
try {
    const response = await fetch("https://api.xefili.dev/articles/", {method:"GET", mode:"cors"});
    const res = await response.json();
    const jsonReponse = await res.reverse();
    var arrLen = jsonReponse.length;
    let i;
    let k = 1;
    for(i=0; i!=arrLen; i++) {
        console.log(i);
        document.getElementById(`artTitle${k}`).innerHTML = jsonReponse[i].title;
        document.getElementById(`artText${k}`).innerHTML = jsonReponse[i].content;
        document.getElementById(`artLink${k}`).setAttribute("href", `blog/read.html?articleId=${i+1}`);
        k++;
    }
} catch(e) {
    displayAction(e);
}