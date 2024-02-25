function displayAction(e) {
    alert(`Looks like we've hit a roadblock. If this problem persists, contact mail@xefili.dev with the following error code: ${e}`);
}
// GET blog contents
try {
    const response = await fetch("https://api.xefili.dev/articles/", {method:"GET"});
    const jsonReponse = await response.json();
    var arrLen = jsonReponse.length;
    let i;
    let k = 1;
    for(i=arrLen-1;i>arrLen-5;i--) {
        console.log(i);
        document.getElementById(`artTitle${k}`).innerHTML = jsonReponse[i].title;
        document.getElementById(`artText${k}`).innerHTML = jsonReponse[i].content;
        document.getElementById(`artLink${k}`).setAttribute("href", `blog/read.html?articleId=${i+1}`);
        k++;
    }
} catch(e) {
    displayAction(e);
}