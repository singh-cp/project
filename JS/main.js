function showSearch() {
    const searchIcon = document.getElementById("search-icon"); 
    if (searchIcon.classList.contains("fa-magnifying-glass")) {
        document.getElementsByClassName("search-form")[0].style.display = "inherit";
        searchIcon.classList.replace("fa-magnifying-glass", "fa-magnifying-glass-arrow-right");
    }else{
        document.getElementsByClassName("search-form")[0].style.display = "none";
        searchIcon.classList.replace("fa-magnifying-glass-arrow-right","fa-magnifying-glass");
    }
}

const filterButton = document.getElementById("listing-filter");
filterButton.addEventListener("click",() =>{
    document.querySelector(".filter-form").classList.toggle("display-block");
})