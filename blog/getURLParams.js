var URLparams = window.location.search;
var id = URLparams.replace("?","").split("=")[1];
console.info(`Detected article ID ${id}`)

try {
    var res = await fetch(`https://api.xefili.dev/articles`, {"method":"GET", "mode":"cors"});
    var data = await res.json();
    var jsonified = await data.reverse();
    var articleTitle = await jsonified.title;
    var articleContent = await jsonified.content;
    console.info(`Successfully retrieved article!`);
    document.getElementById("articleTitle").innerHTML = articleTitle;
    document.getElementById("articleContent").innerHTML = articleContent;
    console.info(`Successfully displayed article!`);
    
} catch(e) {
    alert(`Something isn't working right, is the API down? Error ${e}`)
}