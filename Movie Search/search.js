let movies = [
    {
        title: "Raone",
        image: "https://upload.wikimedia.org/wikipedia/en/5/58/Ra.Oneposter.jpg"
    },
    {
        title: "kick",
        image: "https://resize.indiatvnews.com/en/resize/oldbucket/730_-/entertainmentbollywood/Kick-movie-revi15882.jpg"
    },
    {
        title: "3Idiots",
        image: "hhttps://play-lh.googleusercontent.com/i_LHFFZLDYU6GNcd3JUr-m_2mH_uMbofDwAWMdVxcLw9EjANAZ_hai2zmRBx56VIaGyf8oqV2h366DlZivU"
    },
    {
        title: "Padman",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Padman_poster.jpg/220px-Padman_poster.jpg"
    },
    {
        title: "Dilwale",
        image: "https://upload.wikimedia.org/wikipedia/en/d/df/Dilwale.jpg"
    },
];

let searchInput = document.querySelector('#search');
let searchResultscontainer = document.querySelector('#searchresult');

searchInput.addEventListener("input", (e) => {
    if (e.target.value === "") {
        searchResultscontainer.innerHTML= "";
        return;
    }

    let searchResults = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    searchResultscontainer.innerHTML= "";
    console.log(searchResults);
    searchResults.forEach((element) => {
        let p = document.createElement("p");
        let img = document.createElement("img");
        p.textContent = element.title;
        img.src = element.image;
        searchResultscontainer.appendChild(p);
        searchResultscontainer.appendChild(img);

    });
});