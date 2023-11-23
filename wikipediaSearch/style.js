let containerEle = document.createElement("div");
containerEle.classList.add("containerEle");
document.body.appendChild(containerEle);

let wikipediaSearchHeaderEle = document.createElement("div");
wikipediaSearchHeaderEle.classList.add("wikipediaHeader");
containerEle.appendChild(wikipediaSearchHeaderEle);

let wikipediaLogo = document.createElement("img");
wikipediaLogo.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/wiki-logo-img.png";
wikipediaLogo.classList.add("logo");
wikipediaSearchHeaderEle.appendChild(wikipediaLogo);

let lineBreakEle = document.createElement("br");
wikipediaSearchHeaderEle.appendChild(lineBreakEle);

let inputEle = document.createElement("input");
inputEle.type = "search";
inputEle.placeholder = "Type a keyword and press Enter to search";
inputEle.classList.add("inputEle");
wikipediaSearchHeaderEle.appendChild(inputEle);

let spinnerContainerEle = document.createElement("div");
containerEle.appendChild(spinnerContainerEle);

let spinnerEle = document.createElement("span");
spinnerEle.textContent = "Loading....";
spinnerEle.style.display = "none"
spinnerContainerEle.appendChild(spinnerEle);

let searchResultsContainerEle = document.createElement("div");
searchResultsContainerEle.classList.add("searchResults");
containerEle.appendChild(searchResultsContainerEle);

function createAndAppendSearchResults(result){
    let {link, title, description} = result;

    let resultItemEle = document.createElement("div");
    resultItemEle.classList.add("resultItem");


    let titleItem = document.createElement("a");
    titleItem.href = link;
    titleItem.target = "_blank";
    titleItem.textContent = title;
    titleItem.classList.add("resultTitle");
    resultItemEle.appendChild(titleItem);

    let titleBreakEle = document.createElement("br");
    resultItemEle.appendChild(titleBreakEle);

    let urlEle = document.createElement("a");
    urlEle.classList.add("resultUrl");
    urlEle.href = link;
    urlEle.target = "_blank";
    urlEle.textContent = link;
    resultItemEle.appendChild(urlEle);

    let lineBreakEle = document.createElement("br");
    resultItemEle.appendChild(lineBreakEle);

    let descriptionEle = document.createElement("p");
    descriptionEle.classList.add("linkDescription");
    descriptionEle.textContent = description;
    resultItemEle.appendChild(descriptionEle);

    searchResultsContainerEle.appendChild(resultItemEle);

}

function displayResults(searchResults){
    spinnerEle.style.display = "none";

    for (let result of searchResults){
        createAndAppendSearchResults(result);
    }
}

function searechWikipedia(event){
    if (event.key === "Enter"){
        spinnerEle.style.display = "block";
        searchResultsContainerEle.textContent = "";

        let searchInput = inputEle.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method : "GET"
        };

        fetch(url, options)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonData){
                let {search_results} = jsonData;
                displayResults(search_results);
            });
    }
}

inputEle.addEventListener("keydown", searechWikipedia);
